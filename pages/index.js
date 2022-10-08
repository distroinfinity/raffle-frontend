import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Decentralised Lottery</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Hello
    </div>
  );
}
