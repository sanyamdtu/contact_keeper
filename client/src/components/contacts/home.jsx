import React from "react";
import Contacts from "./contact_display";
import Form from "../layouts/conrtact_form";
import AuthContext from "../../Context/auth/auth_context";
import { useContext } from "react";
import { useEffect } from "react";

function Home() {
  var auth_context = useContext(AuthContext);
  var { load_user } = auth_context;
  useEffect(() => {
    load_user();
  }, []);
  return (
    <div className="row">
      <Contacts />
      <Form />
    </div>
  );
}

export default Home;
