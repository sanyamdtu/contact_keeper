import React, { useState } from "react";
import Contact_Context from "../../Context/contacts/Contact_context";
import { useContext } from "react";
import { useEffect } from "react";
function Form() {
  var contact_context = useContext(Contact_Context);
  var { add_contact, current, edit_contact } = contact_context;
  const [contact, set_contact] = useState({
    name: "",
    email: "",
    type: "",
    number: "",
  });
  useEffect(() => {
    if (current !== null) set_contact(current);
    else {
      set_contact({
        name: "",
        email: "",
        type: "",
        number: "",
      });
    }
  }, [contact_context, current]);

  var onchange = (e) => {
    set_contact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  var onSubmit = (e) => {
    e.preventDefault();
    if (current) edit_contact(contact);
    else add_contact(contact);
  };
  var clear_forn = () => {
    set_contact({ name: "", email: "", type: "", number: "" });
  };
  return (
    <div classname="col-lg-6">
      <form onSubmit={onSubmit} className="form-group">
        <input
          onChange={onchange}
          type="text"
          name="name"
          className="form-control"
          placeholder="name"
          value={contact.name}
        ></input>
        <input
          onChange={onchange}
          type="text"
          name="email"
          className="form-control"
          placeholder="email"
          value={contact.email}
        ></input>
        <input
          onChange={onchange}
          type="text"
          name="number"
          className="form-control"
          placeholder="number"
          value={contact.number}
        ></input>
        <input
          onChange={onchange}
          type="text"
          name="type"
          className="form-control"
          placeholder="type"
          value={contact.type}
        ></input>
        <input type="submit" className="btn btn-lg btn-success"></input>
        {current && (
          <button className=" btn btn-block btn-danger" onClick={clear_forn}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
