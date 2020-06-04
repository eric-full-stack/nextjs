import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function Categories() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Categorias</title>
      </Head>
      <section>
        <p>Categorias</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
