import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={require('../assets/logo2.jpg').default} alt="logo M2i" width="100" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header