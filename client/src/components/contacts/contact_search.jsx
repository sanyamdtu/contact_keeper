import React, { Fragment } from "react";
import { useState } from "react";
import Contact_context from "../../Context/contacts/Contact_context";
import { useContext } from "react";
import Contact_Context from "../../Context/contacts/Contact_context";
import { useEffect } from "react";
function Contact_search() {
  var [search_text, setsearch_text] = useState("");
  var contact_context = useContext(Contact_Context);
  var { search_contact } = contact_context;
  var search_text = (e) => {
    setsearch_text(e.target.value);
    search_contact(e.target.value);
  };
  return (
    <div className="form-group">
      <label className="form-check-label">Search:</label>
      <input
        type="text"
        className="form-control"
        onChange={search_text}
      ></input>
    </div>
  );
}

export default Contact_search;
