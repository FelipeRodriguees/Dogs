import React, { useEffect } from "react";
import FeedItem from "../feed-item/FeedItem";
import useFetch from "../../../../utils/hooks/useFetch";
import { FIND_POSTS } from "../../../../services/api.jsx";
import ErrorMessage from "../../../../components/helper/ErrorMessage.jsx";
import Loader from "../../../../components/helper/loader/Loader.jsx";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ user, page, setModalPhoto, setIsInfinite }) => {
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    async function getPhotos() {
      const { url, options } = FIND_POSTS({
        page: page,
        totalItems: 6,
        user: user,
      });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < 6) setIsInfinite(false);
    }

    getPhotos();
  }, [request, user, page, setIsInfinite]);

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((item) => (
          <FeedItem key={item.id} photo={item} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  }

  return null;
};

export default FeedPhotos;
