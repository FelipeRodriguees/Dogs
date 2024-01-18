import { useEffect } from "react";
import Head from "../../../components/helper/Head";
import useFetch from "../../../utils/hooks/useFetch";
import { FIND_STATS } from "../../../services/api";
import Loader from "../../../components/helper/loader/Loader";
import ErrorMessage from "../../../components/helper/ErrorMessage";
import UserGraphics from "./user-graphs/UserGraphics";

const UserAnalytics = () => {
  const { data, error, isLoading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = FIND_STATS();

      const { response, json } = await request(url, options);
    }

    getData();
  }, [request]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage error={error} />;

  if (data) {
    return (
      <div>
        <Head
          title="Minhas Estátisticas"
          description="Estátisticas do usuário logado do site Dogs."
        />
        <UserGraphics data={data} />
      </div>
    );
  }

  return null;
};

export default UserAnalytics;
