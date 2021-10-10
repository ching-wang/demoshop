import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../frontend/components/layout"

export default function Products() {
    return (
        <Layout>
            <Head>
                <title> Products page </title>
            </Head>
            <h1> Products page </h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}