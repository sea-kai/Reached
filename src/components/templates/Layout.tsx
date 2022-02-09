import React from 'react';
import Head from 'next/head';

import Header from 'src/components/organisms/Layout/Header'
import { LayoutType } from 'src/types';

export const Layout = ({children}: LayoutType): React.ReactElement=> {
  return (
    <div className = 'flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600 bg-white'>
      <Head>
        <title>Reached~教員になりたい人を応援するサイト~</title>
      </Head>
      <Header />
      <main className='flex flex-col flex-1 mx-32 mt-16 '>
        {children}
      </main>
      <footer className='flex justify-center items-start w-full h-12 border-t'>
      </footer>
    </div>
  )
}
