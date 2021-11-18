import React from "react"

const Form = (props) => {
 
    return (
        <>
        <form className="w-100 d-flex flex-column align-items-center justify-content-center">
        <div className="w-75">
        <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ></input>
        <label htmlFor="floatingInput">Email address</label>
        </div>

<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
  <label htmlFor="floatingPassword">Password</label>
</div>
      </div>
      </form>
      </>
    )
}

export default Form
