import React, { useContext } from "react";
import Contact_Context from "../../Context/contacts/Contact_context";
function Conatct_item_single(props) {
  const { contact } = props;
  var contact_context = useContext(Contact_Context);
  var { delete_contact, set_current } = contact_context;

  const { name, email, number, type } = contact;
  var delete_c = () => {
    console.log(email);
    delete_contact(email);
  };
  var edit_c = () => {
    set_current(contact);
  };
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
          <h6>email:{email}</h6>
          <h6>number:{number}</h6>
          <h6>type:{type}</h6>
          <button className="btn btn-md btn-danger" onClick={delete_c}>
            Delete
          </button>
          <button className="btn btn-md btn-warning" onClick={edit_c}>
            Edit
          </button>
        </p>
      </div>
    </div>
  );
}

export default Conatct_item_single;
