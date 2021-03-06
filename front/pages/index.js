import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css"
        />
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
