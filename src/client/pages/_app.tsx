import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import HomeContext from "../context/homeData";

import "../styles.scss";

export default class JapanDashboardApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Japan Population Dashboard</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#00008f" />
        </Head>
        <HomeContext {...pageProps}>
          <Component {...pageProps} />
        </HomeContext>
      </Container>
    );
  }
}
