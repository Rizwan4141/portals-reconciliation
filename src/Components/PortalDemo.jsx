import React from "react";
import  ReactDOM  from "react";

const PortalDemo = () => {
  return ReactDOM.createPortal(
  <h1>PortalDemo</h1>,
  document.getElementById('portal-root')
  );
};

export default PortalDemo;