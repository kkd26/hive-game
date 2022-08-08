import Head from "next/head";
import HexGrid from "../components/HexGrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hive game</title>
      </Head>
      <main>
        <h1>Welcome to the Hive game.</h1>
        <HexGrid width={800} height={500} />
      </main>
    </div>
  );
}
