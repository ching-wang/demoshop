import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

const apiHost = process.env.API_HOST;
const apiPort = process.env.API_PORT;

const Home: NextPage = () => {
  console.log({apiHost, apiPort})

  const [apiRootRes, setApiRootRes] = useState<Record<string, string>>({})
  
  useEffect(() => {
    fetch(`http://${apiHost}:${apiPort}/`)
        .then(res => res.json())
        .then(json => setApiRootRes(json))
        .catch(err => console.error(err))
  }, [])

    const [productLists, setProductLists] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "https://api.tvmaze.com/shows";
            const res = await fetch(url);
            const allProducts = await res.json();
            console.log("product.ts.tsx", allProducts)
            setProductLists(allProducts.slice(0, 4));
        }
        getPosts();

    }, []);

    console.log(productLists)

  return (
      <div className={styles.container}>
        <Head>
          <title> Demo shop </title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
              rel="stylesheet"
              href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
          />
        </Head>
        <main className={styles.main}>
          <h3 className={styles.title}>
            Welcome to <Link href="/"> Sweet Home!</Link>
          </h3>
          <p className={styles.description}> Demo shop 😎</p>
          <div className={styles.grid}>
            {productLists.length > 0
                ? productLists.map(({description, id, name}) => {
                  return (
                     <Link href="/products" key={id}>
                         <div className={styles.card}>
                             <Image
                                 src="/images/homewareExample.png"
                                 alt={`Preview of ${name}`}
                                 height={100}
                                 width={100}
                             />
                             <h3>{name}</h3>
                             <p>{description}</p>
                             <p>£200</p>
                         </div>
                     </Link>
                  );
                })
                : "Loading..."}
          </div>
        </main>
        <footer className={styles.footer}>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>

      </div>
  );
}

export default Home
