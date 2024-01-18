import { useParams } from "react-router-dom";
import Feed from "../feed/Feed";
import Head from "../../../components/helper/Head";

const Profile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head
        title="Photos"
        description="Home do site Dogs com o feed de fotos."
      />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default Profile;
