import { Inter } from 'next/font/google'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md'
import Script from 'next/script'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  let { title, cats } = attributes
  return (
    <>
    <Head>
        <title>Awesome Kitties</title>          
    </Head>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" /> 
    <Header/> 
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
    </main>
    </>
      
  )
}
