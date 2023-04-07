import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { trpc } from "../utils/trpc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
          const hello = trpc.getName.useQuery({ text: "x" });
  // const hello = trpc.hello.useQuery({ text: "xx" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>





    </div>
  );

}
