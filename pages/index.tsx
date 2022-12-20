import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout';


const Home: NextPage = () => {
  return (
    <>
      <Layout title="Main">
       <p>Welcome!</p>
      </Layout>
    </>
  )
}

export default Home;
