import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./views/footer/Footer";
import Home from "./views/home/Home";
import Header from "./views/header/Header";
import Login from "./views/login/Login";
import { UserStorage } from "./UserContext";
import LoginRouterMenager from "./components/helper/LoginRouterMenager";
import UserPage from "./views/user-page/UserPage";
import Photo from "./views/photo/Photo";
import Profile from "./views/user-page/profile/Profile";
import NotFound from "./views/not-found/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="account/*"
                element={
                  <LoginRouterMenager>
                    <UserPage />
                  </LoginRouterMenager>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
