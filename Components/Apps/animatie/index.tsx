import React from "react";
import Layout from "../layout";
import { useAppMax, useAppStore } from "../createAppStore";

const Animatie = () => {
  const name = "Animatie";
  const appName = useAppStore((state) => state.appName);
  const max = useAppMax((state) => state.max);

  return (
    <Layout title={appName}>
      <div className={`rounded-b-lg h-full bg-white`}>
        <h1>{appName}</h1>
      </div>
    </Layout>
  );
};

export default Animatie;
