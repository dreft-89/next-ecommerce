import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { GlobalProvider } from "../src/context/GlobalContext";
import StickyFooter from "../components/StickyFooter";
import { IntlProvider } from "react-intl";
import translations from "../components/translations";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [locale, setLocale] = useState('ro');
  const handleChangeLocale = ({ target: { value } }) => setLocale(value);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <IntlProvider locale={locale} messages={translations[locale]}>
            <PrimarySearchAppBar
              locale={locale}
              handleChangeLocale={handleChangeLocale}
            />
            <Component {...pageProps} />
          </IntlProvider>
        </GlobalProvider>
        <StickyFooter />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
