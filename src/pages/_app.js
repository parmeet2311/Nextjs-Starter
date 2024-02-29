// "use client"
import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";

function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>{"Maviex "}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
