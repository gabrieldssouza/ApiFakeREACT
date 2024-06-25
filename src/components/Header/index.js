import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand col-md-3 mt-2" to={'/'}><p>Blog Notícias</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-md-6"></div>
            <div className="collapse navbar-collapse col-md-3 fs-5 mt-2" style={{marginLeft: '6%'}} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}><p>Home</p></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}><p>Sobre</p></Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to={'/'}><p>Contato</p></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header;