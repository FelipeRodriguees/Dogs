import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import { FIND_PHOTO } from "../../services/api";
import ErrorMessage from "../../components/helper/ErrorMessage";
import Loader from "../../components/helper/loader/Loader";
import PhotoContent from "./photo-content/PhotoContent";
import Head from "../../components/helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, isLoading, error, request } = useFetch();

  useEffect(() => {
    function getPhoto() {
      const { url, options } = FIND_PHOTO(id);
      request(url, options);
    }
    getPhoto();
  }, [request, id]);

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description="" />
        <PhotoContent single={true} data={data} />
      </section>
    );

  return null;
};

export default Photo;
