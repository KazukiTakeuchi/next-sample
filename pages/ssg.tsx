import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {};

// データ取得を行わないページ
const SSG: NextPage<SSGProps> = () => {
  return (
    <>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This Page made from SSG</p>
      </main>
    </>
  );
}

export default SSG;
