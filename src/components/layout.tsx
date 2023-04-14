import Head from 'next/head'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { useEffect, useState } from 'react'




const Layout = (props: any) => {
    
    return (
        <>
            <Head>
                <title>Zaisen</title>
                <meta name="description" content="Zaisen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex flex-row h-full'>

            
              <div className='bg-blue-100 w-1/6'>
                <Sidebar />
              </div>

            
            <></>
            

            <div className='bg-white flex-grow'>
                <div className=''>
                    <Navbar />
                </div>

                <div className='bg-white bg-opacity-30 max-w-7xl py-8 px-4 sm:px-6 lg:px-8 rounded-lg pr-10'>
                    {props.children}
                </div>
                
            </div>

            </div> 
        </>
    )
}

export default Layout;