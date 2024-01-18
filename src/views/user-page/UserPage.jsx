import React, { useContext } from "react";
import UserHeader from "./user-header/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "./feed/Feed";
import CreateNewPost from "./create-new-post/CreateNewPost";
import UserAnalytics from "./user-analytics/UserAnalytics";
import { UserContext } from "../../UserContext";
import NotFound from "../not-found/NotFound";
import Head from "../../components/helper/Head";

const UserPage = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Head
        title="Minhas Fotos"
        description="Fotos do usuário logado do site Dogs."
      />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="new-post" element={<CreateNewPost />} />
        <Route path="analytics" element={<UserAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default UserPage;
