import React from 'react'
import { Link } from "react-router-dom";
import './Homepage.css';
import Psvideo from '../../Components/Video/ps-video.mp4';
import PsLogo from '../../assets/ps-logo.svg';

const Homepage = () => {
    return (
        <>

            <video className="video-bg" autoPlay loop muted >
                <source src={Psvideo} type="video/mp4" />
            </video>
    <div className="container-homepage">
            <header className="p-3 bg-white text-dark">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        <Link to="/home" className="d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img className="svg-ps-logo" src={PsLogo} alt="" />
                    </Link>
       

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="/" className="nav-link px-2 text-dark">Jogos</a></li>
          <li><a href="/" className="nav-link px-2 text-dark">Hardware</a></li>
          <li><a href="/" className="nav-link px-2 text-dark">Serviços</a></li>
          <li><a href="/" className="nav-link px-2 text-dark">Loja</a></li>
          <li><a href="/" className="nav-link px-2 text-dark">Suporte</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-white" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div className="text-end">
        <Link to="/" className="btn btn-outline-primary me-2">Iniciar Sessão</Link>
                        <Link to="/SignUp" className="btn btn-primary">Inscreva-se</Link>
        </div>
      </div>
  </header>
    </div>

                   
            
                        
        </>
    )
}

export default Homepage
