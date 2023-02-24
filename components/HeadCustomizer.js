import Head from "next/head";

export default function HeadCustomizer({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}