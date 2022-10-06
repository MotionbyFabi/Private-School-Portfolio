import React from "react";
import Layout, { useAppStore } from "../layout";

const Animatie = () => {
  const name = "Animatie";
  useAppStore.setState({ appName: name });

  return (
    <Layout title={name}>
      <h1>Hello</h1>
    </Layout>
  );
};

export default Animatie;
