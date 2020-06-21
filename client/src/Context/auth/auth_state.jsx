import Auth_Context from "./auth_context";
import Auth_reducer from "./auth_reducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import React, { useReducer } from "react";
const Auth_state = (props) => {
  const initial_state = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(Auth_reducer, initial_state);

  // REGISTER_SUCCESS
  var register_user = async (form_data) => {
    try {
      var config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      var res = await axios.post("/api/users", form_data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      if (error.response.data.error) console.log(error.response.data.error.msg);
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.error.msg,
      });
    }
    load_user();
  };
  var clear_error = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  var load_user = async () => {
    try {
      let res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  return (
    <Auth_Context.Provider
      value={{
        token: state.token,
        user: state.user,
        error: state.error,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        register_user,
        load_user,
      }}
    >
      {props.children}
    </Auth_Context.Provider>
  );
};
export default Auth_state;
