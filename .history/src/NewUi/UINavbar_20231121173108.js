import React from "react";
import "./UiNavbar.css";

export default function UINavbar() {
  return (
    <div>
      <nav className="Ui-nav">
        <div>UiNavbar</div>
        <div></div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
