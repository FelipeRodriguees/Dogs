import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './views/footer/Footer';
import Home from './views/home/Home';
import Header from './views/header/Header';
import Login from './views/login/Login';
import { UserStorage } from './UserContext';
import LoginRouterMenager from './components/helper/LoginRouterMenager';
import UserPage from './views/user-page/UserPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
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
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
