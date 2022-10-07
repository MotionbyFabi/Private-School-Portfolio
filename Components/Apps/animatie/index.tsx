import React from "react";
import Layout from "../layout";
import { useAppStore } from "../createAppStore";

const Animatie = () => {
  const name = "Animatie"
  const appName = useAppStore((state) => state.appName);
  
  return (
    <Layout title={appName}>
      <div className="w-[854px] rounded-b-lg h-full bg-white">
        <h1>{appName}</h1>
      </div>
    </Layout>
  );
};

export default Animatie;
