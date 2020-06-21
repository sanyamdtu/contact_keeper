import React from "react";

function Alert_item(props) {
  var { alert } = props;
  return (
    <div className={"alert alert-" + `${alert.type}`} role="alert">
      {alert.msg}
    </div>
  );
}

export default Alert_item;
