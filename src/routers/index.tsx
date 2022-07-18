import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Header from '../components/header';

const Router = () => {
  return (
    <>
      <div className="container-lg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Router;
