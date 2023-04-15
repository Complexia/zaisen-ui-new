import Head from 'next/head'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { useEffect, useState } from 'react'

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>Zaisan</title>
        <meta name="description" content="Zaisan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-row h-full'>
        <div className='bg-blue-100 w-1/6'>
          <Sidebar />
        </div>

        <div className='bg-white flex-1 flex flex-col'>
          <div className='flex justify-end ml-4'>
            <Navbar />
          </div>
          <div className='bg-white bg-opacity-30 flex-1 px-4 sm:px-6 lg:px-8 rounded-lg pr-10 min-h-screen'>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;