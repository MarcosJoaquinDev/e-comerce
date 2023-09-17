import { Header } from "src/components/Header";
import { Footer } from "../Footer";
import Head from "next/head";
export function Layout({ children, title }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/shop-icon.png" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
