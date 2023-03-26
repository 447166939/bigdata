import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import React from "react";
import Head from "next/head";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import theme from "@/theme/index";
import createEmotionCache from "@/utils/createEmotionCache";
import "./global.scss";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
function MyApp(props: MyAppProps) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { Component, ...rest } = props;
  const { store } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
export default MyApp;
