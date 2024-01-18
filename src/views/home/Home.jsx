import Head from "../../components/helper/Head";
import Feed from "../user-page/feed/Feed";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Photos"
        description="Home do site Dogs com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
