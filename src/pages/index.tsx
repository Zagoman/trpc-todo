import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { trpc } from "@/utils/trpc";
import { MouseEvent, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: tasks } = trpc.getAll.useQuery();
  return (
    <>
      <Head>
        <title>tRPC Todo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form>
          <label htmlFor="title">
            Title
            <input type="text" id="title" name="title" />
          </label>
          <label htmlFor="content">
            Content
            <input type="text" id="content" name="content" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {tasks && tasks.map((task) => <li key={task.id}>{task.title}</li>)}
        </ul>
      </main>
    </>
  );
}
