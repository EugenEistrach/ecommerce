import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
