import styles from './FeedItem.module.css';

const FeedItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.viewsIcon}>{photo.acessos}</span>
    </li>
  );
};

export default FeedItem;
