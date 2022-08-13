import React from "react";
import Contact from "./Contact";

// feed will maps all the contacts
const Feed = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Feed;
