import type { NextPage } from "next";
import Layout from "../Components/layout";
import ActiveApp from "../Components/Apps/activeApp";

const Home: NextPage = () => {

 
  return (
    <Layout title="Fabio Di Nota Portfolio">
      <ActiveApp />
    </Layout>
  );
};

export default Home;
