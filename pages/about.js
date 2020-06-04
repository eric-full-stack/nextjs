import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Sobre</title>
      </Head>
      <section>
        <p>Sobre nós</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
