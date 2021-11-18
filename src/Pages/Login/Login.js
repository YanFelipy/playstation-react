import React from 'react';
import Form from '../../Components/Form';
import { Link } from "react-router-dom";
import PsLogo from '../../assets/ps-logo.svg';
import Bg from './ps-bg.jpg';
import './Login.css';
import ModalForm from '../../Components/Modal';

const Login = () => {
  return (
    <>
    <div className="bg-box">
      <img className="bg" src={Bg} alt="Playstation "/>
    </div>
     <div className="container log-ct d-flex justify-content-center align-items-center">
       <div className ="box-login"> 
     <div className="svg-box">
      <img className="svg" src={PsLogo} alt="" />
    </div>
             <Form />
    <div className="buttons d-flex flex-column">
    <Link className="btn btn-primary bg-gradient btn-lg text-white" to="/home">
                          Entrar
                    </Link>
                    
    <button className="btn btn-dark b-gradient btn-lg my-4 text-white btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">
                       Inscreva-se
                                  </button>
    </div>
    </div>
                    <ModalForm />
    </div>
    
    </>
  )
}

export default Login

