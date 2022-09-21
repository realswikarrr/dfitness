import "../styles/globals.css";
import "../components/main.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/main";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
