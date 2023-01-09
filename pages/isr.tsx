
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

type ISRProps = {
  num: number;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { num } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p>This page genereted by ISR</p>
      <p>{num}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const num = Math.random();
  return {
    props: {
      num,
    },
    revalidate: 10,
  };
};

export default ISR;
