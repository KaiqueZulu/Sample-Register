import Head from "next/head";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.scss";
import api from "../../services/api";
export default function Register({ accessToken }) {
  async function handleSubmit(event) {
    event.preventDefault();
    let code = event.target.code.value;
    let type = event.target.types.value;
    let shelfLife = event.target.shelfLife.value;
    try {
      api.defaults.headers.common["Authorization"] = accessToken;
      await api.post("/api/sample/create", {
        code,
        type,
        shelfLife,
      });
      event.target.code.value = "";
      event.target.types.value = "urina";
      event.target.shelfLife.value = "";
      console.log("criado!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Cadastrar amostras</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerContent}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="code" placeholder="Código da amostra" />
            <select name="types" id="types">
              <option value="urina">Urina</option>
              <option value="sangue">Sangue</option>
            </select>
            <input
              type="text"
              name="shelfLife"
              placeholder="Vencimento em dias"
            />
            <button type="submit">
              <FaPlus color="#000" size={14} />
            </button>
          </form>
        </div>
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
    return {
      props: {
        accessToken,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
