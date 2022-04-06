import Layout from "./common/Layout";

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps}/>
  </Layout>
  )
}

export default MyApp
