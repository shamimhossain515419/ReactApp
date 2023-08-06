import './NavBar.css'
import image from '../../Assets/Images/logo.png'

import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="sticky-top bg-light navbar shadow navbar-expand-lg  m-0 p-0 col-12" id="nav___bar">
            <div className="d-flex px-2 p-0 col-12 justify-content-between align-items-center align-items-lg-start">
                <Link className="navbar-brand" to="/">
                     <img src={image} height={'60px'} width={'60px'}
                     ></img>
                </Link>


                <h6 className="semi-brand py-2 fw-bold text-center d-lg-none " >
                    MORSHED ALAM & SALAH TECHNICAL SERVICE
                </h6>


                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>


                  <div className="offcanvas-lg offcanvas-end off___lg" tabindex="-1" id="offcanvasResponsive">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Close</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav  justify-content-end flex-grow-1 pe-3 gap-2">
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#about">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="ms-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#diadem">
                                    <i className="fa-solid fa-braille"></i>
                                    <span className="ms-2">PORTFOLIO</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#our_service">
                                    <i className="fa-solid fa-bookmark"></i>
                                    <span className="ms-2">Our Service</span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#contact">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span className="ms-2">CONTACT</span>
                                </a>
                            </li>

                            <li className="">
                                <a className="nav-link text-black" href="">
                                    <Link to="/admin"><span className="ms-2">ADMIN</span></Link>
                                </a>
                            </li>


                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;