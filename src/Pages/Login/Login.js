import React from 'react';
import Form from '../../Components/Form';
import { Link } from "react-router-dom";
import PsLogo from '../../assets/ps-logo.svg';
import Bg from './ps-bg.jpg';
import { Button, Modal } from 'react-bootstrap';
import './Login.css';


const Login = () => {
  return (
    <>
      <div className="bg-box">
        <img className="bg" src={Bg} alt="Playstation " />
      </div>
      <div className="container log-ct d-flex justify-content-center align-items-center">
        <div className="box-login">
          <div className="svg-box">
            <img className="svg" src={PsLogo} alt="" />
          </div>
          <Form />
          <div className="buttons d-flex flex-column">
            <Link className="btn btn-primary bg-gradient btn-lg text-white" to="/home">
              Entrar
            </Link>

            <Button className="btn btn-dark b-gradient btn-lg my-4 text-white btn btn-primary" data-bs-toggle="modal" id="btToggle" data-bs-target="#exampleModal" data-bs-whatever="">
              Inscreva-se
            </Button>
          </div>
        </div>

      </div>
      <div>
        <Modal show={true} className="modal fade my-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <Modal.Header>
                <h5 className="modal-title" id="exampleModalLabel">Inscreva-se na Playstation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </Modal.Header>

              <Modal.Body>
                <form>
                 
                  <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingName" placeholder="Name" />
  <label htmlFor="floatingPassword">Nome</label>
</div>
<div className="form-floating mb-3 ">
  <input  value="" type="text" className="form-control" id="floatingSecondName" placeholder="Name" />
  <label htmlFor="floatingPassword">Sobrenome</label>
</div>
                 
                  <div className="mb-3">
                  <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" />
                <label htmlFor="floatingInputValue">Email:</label>
                  </div>
                  </div>

 
<div className="mb-3 d-flex ">
                  <div className="form-floating mb-3 col-6">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label htmlFor="floatingPassword">Senha</label>
</div>
<div className="form-floating mb-3 col-6">
  <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Password" />
  <label htmlFor="floatingConfirmPassword">Confirme a senha</label>
</div>
</div>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
              </Modal.Footer>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Login

