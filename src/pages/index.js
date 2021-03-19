import React from "react";
import { Helmet } from "react-helmet";
import {
  Layout,
  Toggle,
  Intro,
  Background,
  Projects,
  Footer,
} from "@components";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Finn Buick</title>
        <link rel="canonical" href="https://finnbuick.com/" />
      </Helmet>
      <Toggle />
      <Intro />
      <Background />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default Index;
