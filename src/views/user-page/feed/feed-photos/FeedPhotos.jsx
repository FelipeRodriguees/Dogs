import React, { useEffect } from 'react';
import FeedItem from '../feed-item/FeedItem';
import useFetch from '../../../../utils/hooks/useFetch';
import { FIND_POSTS } from '../../../../services/api.jsx';
import ErrorMessage from '../../../../components/helper/ErrorMessage.jsx';
import Loader from '../../../../components/helper/Loader.jsx';
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    async function getPhotos() {
      const { url, options } = FIND_POSTS({ page: 1, totalItems: 6, user: 0 });
      const { json } = await request(url, options);
    }

    getPhotos();
  }, [request]);

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((item) => (
          <FeedItem key={item.id} photo={item} />
        ))}
      </ul>
    );
  }

  return null;
};

export default FeedPhotos;
