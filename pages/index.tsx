import type { NextPage } from "next";
import Layout from "../Components/layout";
import Animatie from "../Components/Apps/animatie";
import BeeldGeluid from "./apps/beeldengeluid";
import Grafische from "./apps/grafischevormgeving";
import InternetTech from "./apps/internettechnieken";
import Script from "./apps/scripten";
import Vrij from "./apps/vrijwerk";

const Home: NextPage = () => {
  return (
    <Layout title="Fabio Di Nota Portfolio">
      <Animatie />
      <BeeldGeluid />
      <Grafische />
      <InternetTech />
      <Script />
      <Vrij />
    </Layout>
  );
};

export default Home;
