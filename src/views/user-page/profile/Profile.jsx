import { useParams } from "react-router-dom";
import Feed from "../feed/Feed";
import styles from "./Profile.module.css";

const Profile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default Profile;
