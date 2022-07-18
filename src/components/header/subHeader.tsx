import { Link } from 'react-router-dom';

export default function SubHeader() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light p-main py-3 pb-1 x-box-shadow">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/logo/logo.png" height="28" alt="CoolBrand" />
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link to="#" className="nav-item nav-link text-black font-15 wei-600 px-3 pb-0 ">
              CREATE&nbsp;SYNDICATE
            </Link>
            <Link to="#" className="nav-item nav-link text-black font-15 wei-600 px-3 pb-0 ">
              JOIN&nbsp;SYNDICATE
            </Link>
            <Link to="#" className="nav-item nav-link text-black font-15 wei-600 px-3 pb-0 ">
              DISCOVER
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <div className="input-group mb-3 text-black  font-15 wei-600 px-0 pb-0 mt-3 border-bottom">
              <input type="text" className="form-control font-15 wei-600 x-search" placeholder="SEARCH" />
              <button className="btn x-btn-search" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="bi bi-search x-search-i"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
