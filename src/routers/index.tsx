import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';

const Router = () => {
  return (
    <>
      <div className="margin-out">
        <div className="header-space"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Router;
