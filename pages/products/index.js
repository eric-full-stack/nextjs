import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Product from "../../components/product";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

export async function getServerSideProps({ req, query }) {
  const protocol = req
    ? `${req.headers["x-forwarded-proto"]}:`
    : location.protocol;
  const host = req ? req.headers["x-forwarded-host"] : location.host;
  const pageRequest = `${protocol}//${host}/api/products?page=${
    query.page || 1
  }&limit=${query.limit || 9}`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
}

export default function Products({ products, page, pageCount }) {
  const { data, error } = useSWR(
    `/api/products?page=${page}?limit=${pageCount}`,
    null,
    {
      products,
    }
  );
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Produtos</title>
      </Head>
      <section className="flex flex-wrap justify-center">
        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />

        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />

        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />
        <Product data={{}} />
      </section>
    </Layout>
  );
}
