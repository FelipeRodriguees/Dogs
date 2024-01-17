import React, { useContext } from "react";
import UserHeader from "./user-header/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "./feed/Feed";
import CreateNewPost from "./create-new-post/CreateNewPost";
import UserAnalytics from "./user-analytics/UserAnalytics";
import { UserContext } from "../../UserContext";

const UserPage = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="new-post" element={<CreateNewPost />} />
        <Route path="analytics" element={<UserAnalytics />} />
      </Routes>
    </section>
  );
};

export default UserPage;
