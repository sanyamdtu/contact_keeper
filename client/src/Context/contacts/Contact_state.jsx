import React, { useReducer } from "react";
import Contact_reducer from "./Contact_reducer";
import Contact_context from "./Contact_context";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_CURRENT,
  SEARCH_CONTACT,
} from "../types";
const Contact_state = (props) => {
  const initial_state = {
    contacts: [
      {
        name: "sanyam",
        number: "8178359690",
        email: "sanyamsri2001@gmail.com",
        type: "personal",
      },
      {
        name: "sarthak",
        number: "100",
        email: "sarthaksri2001@gmail.com",
        type: "professional",
      },
      {
        name: "mom",
        number: "9268049616",
        email: "mummy@gmail.com",
        type: "professional",
      },
      {
        name: "papa",
        number: "9899225914",
        email: "papa@gmail.com",
        type: "personal",
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(Contact_reducer, initial_state);

  //add contact
  var add_contact = (contact) => {
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  //delete contact
  var delete_contact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };
  //edit contact
  var edit_contact = (contact) => {
    dispatch({
      type: EDIT_CONTACT,
      payload: contact,
    });
  };
  //set_current
  var set_current = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };
  //search contacts from conatcts
  var search_contact = (text) => {
    dispatch({
      type: SEARCH_CONTACT,
      payload: text,
    });
  };
  return (
    <Contact_context.Provider
      value={{
        contacts: state.contacts,
        add_contact,
        delete_contact,
        edit_contact,
        current: state.current,
        set_current,
        search_contact,
        filtered: state.filtered,
      }}
    >
      {props.children}
    </Contact_context.Provider>
  );
};

export default Contact_state;
