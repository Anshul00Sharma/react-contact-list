import React from "react";
// useParams for getting the id from the url
import { useParams, Link } from "react-router-dom";

// contact details have all the details of a contact
const ContactDetails = ({ contacts, handleDelete }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id.toString() === id);
  return (
    <div>
      <h2>Name : {contact.name}</h2>
      <h2>Phone Number : {contact.phone}</h2>
      <h2>Email : {contact.email}</h2>
      <h2>City : {contact.address.city}</h2>
      <h2>Company : {contact.company.name}</h2>
      <div className="delete-up">
        <button className="button" onClick={() => handleDelete(contact.id)}>
          Delete
        </button>
        <Link to={"update"}>
          <button className="button">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
