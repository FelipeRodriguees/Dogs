import Image from "../../../../components/helper/image-loader/ImageLoader";
import styles from "./FeedItem.module.css";

const FeedItem = ({ photo, setModalPhoto }) => {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.viewsIcon}>{photo.acessos}</span>
    </li>
  );
};

export default FeedItem;
