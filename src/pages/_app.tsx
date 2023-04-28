import React from "react";
import "../styles/global.css";
import { AppProps } from "next/dist/pages/_app";
import Script from "next/script";
import "../styles/global.css";
import "../styles/Header.css";
import "../styles/Hamburger.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-STPTMG80V9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
    
          gtag('config', 'G-STPTMG80V9');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
