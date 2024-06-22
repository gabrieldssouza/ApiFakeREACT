import './style.css';

function Header(){
    return(
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand col-md-3 mt-2" href="#"><p>Blog Notícias</p></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-md-6"></div>
            <div className="collapse navbar-collapse col-md-3 fs-5 mt-2" style={{marginLeft: '6%'}} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><p>Home</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><p>Sobre</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><p>Contato</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header;