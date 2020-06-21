import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_CURRENT,
  SEARCH_CONTACT,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        filtered: null,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        filtered: null,
        contacts: state.contacts.filter(
          (contact) => contact.email !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        filtered: null,
        contacts: state.contacts.map((contact) =>
          contact.email === action.payload.email ? action.payload : contact
        ),
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        filtered: null,
        current: action.payload,
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter(
          (contact) =>
            contact.email.includes(action.payload) ||
            contact.name.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
