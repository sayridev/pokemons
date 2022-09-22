import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';
interface Props {
  children: JSX.Element | JSX.Element[],
  title?: string
}
const origin=(typeof window==='undefined')?'':window.location.origin;
export const Layout: FC<Props> = ({ children, title }) => {
 
  return (
    <>
      <Head>
        <title>{title || 'Pokemon Api'}</title>
        <meta name='autor' content='Byron Paguay' />
        <meta name='description' content={`Información sobre el pókemon ${title}`} />
        <meta name='keyword' content={`${title}. pokemon, pokedez`} />
        <meta property="og:title" content={`Informacion Sobre ${title}`}/>
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
