import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Categorias</title>
      </Head>
      <h1>Categorias</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
