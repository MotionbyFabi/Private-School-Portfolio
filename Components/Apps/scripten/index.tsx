import React from "react";
import Layout from "../../layout";
import { useAppStore } from "../layout";

const index = () => {
  const name = "Scripten";
  useAppStore.setState({ appName: name });

  return (
    <Layout title={name}>
      <h1>Hello</h1>
    </Layout>
  );
};

export default index;
