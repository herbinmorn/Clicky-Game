import React from "react";
import "./style.css";

function Nav(props) {
  return <ul className="navbar">{props.children}</ul>;
}

export default Nav;
