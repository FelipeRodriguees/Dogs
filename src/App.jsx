import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './views/footer/Footer';
import Home from './views/home/Home';
import Header from './views/header/Header';
import Login from './views/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
