import Form from '../../Components/Form';
import { Link } from "react-router-dom";
import PsLogo from '../../assets/ps-logo.svg';
import Bg from './ps-bg.jpg';
import { Button, Modal } from 'react-bootstrap';
import './Login.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";


const Login = () => {

  const schema = Yup.object().shape({
    name: Yup.string().required("Campo de nome é obrigatório!"),
    lastName: Yup.string().required("Campo de sobrenome é obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail valido!")
      .required("Campo de email é obrigatório!"),
    password: Yup.string()
      .required("Campo de senha é obrigatório!")
      .min(6, "A senha deve conter pelo menos 6 digitos."),
    confirmPassword: Yup.string()
      .required("Campo de senha é obrigatório!")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais."),
  });


  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });



  function onSubmit(data) {


    console.log(data);

  }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

            <Button className="btn btn-dark b-gradient btn-lg my-4 text-white btn btn-primary"
              data-bs-toggle="modal" id="btToggle" data-bs-target="#exampleModal" data-bs-whatever="" onClick={handleShow}>
              Inscreva-se
            </Button>
          </div>
        </div>

      </div>
      <div>

        <Modal show={show} className="modal fade my-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <Modal.Header>
                <h5 className="modal-title" id="exampleModalLabel">Inscreva-se na Playstation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClose} aria-label="Close"></button>
              </Modal.Header>

              <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" 
                      {...register("name")} />
                    <label htmlFor="floatingName"><span className="text-danger px-1">*</span>Nome</label>
                  </div>
                  <p> {errors.name?.message} </p>
                  <div className="form-floating mb-3">
                  <input type ="text" className="form-control" id="floatingLastName" placeholder="Last Name" 
                   {...register("lastName")} />
                  <label htmlFor="floatingLastName"><span className="text-danger px-1">*</span>Sobrenome</label>
                  </div>
                  <p> {errors.lastName?.message} </p>
                  <div className="mb-3">
                  <div className="form-floating mb-3">
                  <input type ="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" 
                   {...register("email")} />
                  <label htmlFor="floatingInputValue"><span className="text-danger px-1">*</span>Email: </label>
                  </div>
                  <p> {errors.email?.message} </p>
                  </div>


                  <div className="mb-3 d-flex ">
                  <div className="form-floating mb-3 col-6">
                  <input type ="password" className="form-control" id="floatingPassword" placeholder="Password"
                  {...register("password")}/>
                  <label htmlFor="floatingPassword"><span className="text-danger px-1">*</span>Senha</label>
                  <p> {errors.password?.message} </p>
                  </div>

                  <div className="form-floating mb-3 col-6">
                  <input type ="password" className="form-control" id="floatingConfirmPassword" placeholder="Password"
                  {...register("confirmPassword")}  passwordConfirm={true}  />
                  <label htmlFor="floatingConfirmPassword"><span  className="text-danger px-1">*</span>Confirme a senha</label>
                  <p> {errors.confirmPassword?.message} </p>
                  </div>

                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                <Button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit} >Enviar dados</Button>
                </div>
                </form>
              </Modal.Body>

              <Modal.Footer className="d-flex align-items-center justify-content-center">
                <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Fechar</Button>

              </Modal.Footer>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Login

