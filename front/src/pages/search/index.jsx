import Head from "next/head";
import { useState } from "react";
import { MdBloodtype } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import styles from "./styles.module.scss";
import api from "../../services/api";

export default function Search({ data, accessToken }) {
  const [samples, setSamples] = useState(data);
  async function handleDelete(id) {
    try {
      await api.delete(`api/sample/${id}`, {
        headers: {
          authorization: String(accessToken),
        },
      });
      const find = samples.filter((r) => r.code !== id);
      setSamples(find);
      console.log("Deletado!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>Buscar amostras</title>
      </Head>
      <main className={styles.container}>
        {samples.length > 0 ? (
          samples.map((sample) => (
            <div key={sample.code} className={styles.containerContent}>
              <section>
                <span>{sample.code}</span>
                <span>{sample.type}</span>
                <MdBloodtype
                  size={20}
                  color={sample.valid ? "#00FF00" : "#FF0000"}
                />
                <button onClick={() => handleDelete(sample.code)}>
                  <FiTrash size={20} color="#FF3636" />
                </button>
              </section>
            </div>
          ))
        ) : (
          <div className={styles.containerContent}>
            <h1>Não possui nenhuma amostra cadastrada!</h1>
          </div>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  try {
    let responseGetToken = await api.post("/api/user/auth", {
      email: "testuser@gmail.com",
      password: 123456,
    });
    let { accessToken } = responseGetToken.data;
    let { data } = await api.get("api/test", {
      headers: {
        authorization: accessToken,
      },
    });
    return {
      props: {
        data: data.samples,
        accessToken,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
};
