type appProps = {
  Component?: any;
  pageProps?: any;
};

function MyApp({ Component, pageProps }: appProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
