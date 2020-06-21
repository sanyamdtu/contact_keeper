import React, { useContext, useState } from "react";
import Auth_context from "../../Context/auth/auth_context";
function Login_Form() {
  var auth_context = useContext(Auth_context);
  var { register_user } = auth_context;
  const [user, set_user] = useState({
    email: "",
    password: "",
  });
  var { email, password } = user;
  var onchange = (e) => {
    set_user({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  var onsubmit = (e) => {
    e.preventDefault();
    // if (email === "" || password === "")
    //   // set_alert({ msg: "Please fill all the fields", type: "danger" });
    // if (password.length <= 6)
    //   // set_alert({
    //   //   msg: "password should be minimum of 6 length",
    //   //   type: "danger",
    //   // });
    //register_user({ name });
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            value={password}
            onChange={onchange}
          ></input>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login_Form;
