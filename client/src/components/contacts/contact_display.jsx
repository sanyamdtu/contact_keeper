import React, { useContext } from "react";
import Contact_Context from "../../Context/contacts/Contact_context";
import Contact_item from "./conatct_item_single";
import Contact_search from "./contact_search";
function Contact_display() {
  var contactcontext = useContext(Contact_Context);
  var { contacts, filtered } = contactcontext;
  return (
    <div className="col-lg-6">
      <Contact_search />
      {filtered !== null
        ? filtered.map((contact) => <Contact_item contact={contact} />)
        : contacts.map((contact) => <Contact_item contact={contact} />)}
    </div>
  );
}

export default Contact_display;
