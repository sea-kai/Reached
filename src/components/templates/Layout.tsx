import React from 'react';
import Head from 'next/head';

import Header from 'src/components/organisms/Layout/Header'
import { LayoutType } from 'src/types';

export const Layout = ({children, title = 'Reached'}: LayoutType): React.ReactElement=> {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600'>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className='flex flex-col flex-1 w-screen h-screen'>
      {children}
    </main>
          <footer className='flex justify-center items-start w-full h-12 border-t'>
        <a
          className='flex items-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
            <img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
  </footer>
    </div>
  )
}
