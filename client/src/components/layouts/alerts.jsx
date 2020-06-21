import React, { Fragment } from "react";
import Alert_context from "../../Context/alert/alert_context";
import { useContext } from "react";
import Alert_Single from "./alert_item";
function Alerts() {
  var alert_context = useContext(Alert_context);
  var { alert } = alert_context;
  return (
    <Fragment>
      {alert.length > 0 && alert.map((alert) => <Alert_Single alert={alert} />)}
    </Fragment>
  );
}

export default Alerts;
