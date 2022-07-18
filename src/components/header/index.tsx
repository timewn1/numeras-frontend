import { Link } from 'react-router-dom';
import SubHeader from './subHeader';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-main py-0">
        <div className="container">
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="#" className="nav-item nav-link font-18 wei-500 px-3 active ">
                LOG IN
              </Link>
              <Link to="#" className="nav-item nav-link font-18 wei-500 px-3">
                PORTFOLIO
              </Link>
              <Link to="#" className="nav-item nav-link font-18 wei-500 px-3">
                PREFERRED ACCESS
              </Link>
              <Link to="#" className="nav-item nav-link font-18 wei-500 px-4">
                ABOUT
              </Link>
              <Link to="#" className="nav-item nav-link font-18 wei-500 bg-light_dark px-3">
                BECOME AN INSIDER
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <SubHeader />
    </>
  );
}
