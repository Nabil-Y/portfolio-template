import "../styles/prism-theme.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider enableSystem attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
