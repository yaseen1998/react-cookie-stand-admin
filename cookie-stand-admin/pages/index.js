import Head from 'next/head'
import React, { useState } from 'react';
import Header from './cookies/header';
import CreateForm from './cookies/CreateForm';
import Footer from './cookies/footer';
export default function Home() {
 
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>
      <main className="relative h-screen">
          <CreateForm/>
      </main>
    <Footer/>
    </div>
  )
}
