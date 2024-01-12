import styles from './FeedModal.module.css';
import useFetch from '../../../../utils/hooks/useFetch';
import { useEffect } from 'react';
import { FIND_PHOTO } from '../../../../services/api';
import ErrorMessage from '../../../../components/helper/ErrorMessage';
import Loader from '../../../../components/helper/Loader';
import PhotoContent from '../../../photo/photo-content/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = FIND_PHOTO(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <ErrorMessage error={error} />}

      {isLoading && <Loader />}

      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
