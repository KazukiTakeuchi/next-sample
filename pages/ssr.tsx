import styled from 'styled-components';
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

type SSRProps = {
  num: number
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SSR: NextPage<SSRProps> = (props) => {
  const { num } = props;
  return (
    <>
      <Title>This page genereted by SSR</Title>
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
