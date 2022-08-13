import React from "react";
// importing link for linking differnet components
import { Link } from "react-router-dom";

// contact list item
const Contact = ({ contact }) => {
  return (
    <Link
      to={`contact/${contact.id}`}
      style={{ textDecoration: "none", color: "#034f84" }}
    >
      <li className="contact-item">
        <div className="left">
          <h2>{contact.name}</h2>
          <span className="phone">{contact.phone}</span>
        </div>
        <span>{contact.company.name}</span>
      </li>
    </Link>
  );
};

export default Contact;
