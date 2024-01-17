import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import PhotoComments from "./photo-comments/PhotoComments";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import PhotoDelete from "./photo-delete/PhotoDelete";
import ImageLoader from "../../../components/helper/image-loader/ImageLoader";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.singlePhoto : ""}`}>
      <div className={styles.img}>
        <ImageLoader alt={photo.title} src={photo.src} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username == photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} Anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
