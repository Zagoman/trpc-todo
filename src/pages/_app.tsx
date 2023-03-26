import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// wrapping App with trpc
export default trpc.withTRPC(App);
