import Head from "next/head";
import styles from "../styles/styles.module.scss";
import Chart from "react-google-charts";
import api from "../services/api";

export default function Home({ data }) {
  const { consolidated, samples } = data;
  const validSamples = samples.filter((r) => r.valid !== false);
  const expiredSamples = samples.filter((r) => r.valid !== true);

  const dataChart = [
    ["Sample", "Register samples"],
    ["Dentro do Prazo", validSamples.length],
    ["Vencidas", expiredSamples.length],
    ["Emprestadas", 0],
    ["Descartada", 0],
  ];
  const optionsChart = {
    title: "Amostras",
  };
  return (
    <>
      <Head>
        <title>Gerenciamento de amostras</title>
      </Head>
      <main className={styles.container}>
        <Chart
          chartType="PieChart"
          data={dataChart}
          options={optionsChart}
          width={"50rem"}
          height={"25rem"}
        />
        <div className={styles.total}>
          <p>total: {consolidated}</p>
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
    let { data } = await api.get("api/test", {
      headers: {
        authorization: accessToken,
      },
    });
    return {
      props: {
        data: data,
        accessToken,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: {
          samples: [],
        },
      },
    };
  }
};
