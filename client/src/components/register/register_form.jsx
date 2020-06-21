import React from "react";
import Auth_context from "../../Context/auth/auth_context";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
function Register_Form({ history }) {
  var auth_context = useContext(Auth_context);
  var { register_user, isAuthenticated } = auth_context;
  const [user, set_user] = useState({
    email: "",
    password: "",
    name: "",
    password2: "",
  });
  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [isAuthenticated, history]);
  var { email, password, password2, name } = user;
  var onchange = (e) => {
    set_user({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  var onsubmit = (e) => {
    e.preventDefault();
    register_user({ name, email, password });
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="name"
            value={name}
            onChange={onchange}
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={onchange}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={onchange}
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password2"
            value={password2}
            onChange={onchange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register_Form;
