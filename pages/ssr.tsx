import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

type SSRProps = {
  num: number
}

const SSR: NextPage<SSRProps> = (props) => {
  const { num } = props;
  return (
    <>
      <p>This page genereted by SSR</p>
      <p>{num}</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const num = Math.random();
  return {
    props: {
      num
    }
  }
}

export default SSR;
