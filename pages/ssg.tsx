import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  num: number
};

// データ取得を行わないページ
const SSG: NextPage<SSGProps> = (props) => {
  const { num } = props;
  return (
    <>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This Page made from SSG</p>
        <span>{num}</span>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const num = Math.random();
  const message = '${num}を取得';
  console.log(message);
  return {
    props: {
      num
    }
  }
}

export default SSG;
