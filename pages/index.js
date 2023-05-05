import { Inter } from 'next/font/google'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import Script from 'next/script'
import Header from '../components/Header'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  let { title, cats } = attributes
  return (
    <>
      <Head>
        <title>Awesome Kitties</title>
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <main
        className={`flex min-h-screen flex-col items-center justify-start ${inter.className}`}
      >
        <div className="w-screen mx-auto bg-orange-500">
          <h1 className="font-bold m-16 text-center text-white">{title}</h1>
          <div className="text-center text-white pb-8"><HomeContent /></div>
        </div>        
        <article>          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">            
            {cats.map((cat, k) => (              
              <div className="p-4 border border-indigo-600 rounded-lg shadow-lg" key={k}>
                <h2 className="font-bold">{cat.name}</h2>                
                <Image src={cat.thumbnail} alt="thumbnail" width={100} height={100}/>
                <p>{cat.description}</p>
              </div>       
              
            ))}            
          </div>          
        </article>        
      </main>
    </>

  )
}
