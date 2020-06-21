// import { SET_ALERT, REMOVE_ALERT } from "../types";
// import AlertContext from "./alert_context";
// import Alert_reducer from "./alert_reducer";
// import React, { useReducer } from "react";

// const Alert_state = (props) => {
//   const initial_state = {
//     alert: [],
//   };

//   const [state, dispatch] = useReducer(Alert_reducer, initial_state);

//   //set_alert

//   var set_alert = (alert) => {
//     dispatch({
//       type: SET_ALERT,
//       payload: alert,
//     });
//     setTimeout((alert) => {
//       dispatch({
//         type: REMOVE_ALERT,
//         payload: alert,
//       });
//     }, 3000);
//   };

//   return (
//     <AlertContext.Provider
//       value={{
//         alert: state.alert,
//         set_alert,
//       }}
//     >
//       {props.children}
//     </AlertContext.Provider>
//   );
// };
// export default Alert_state;
