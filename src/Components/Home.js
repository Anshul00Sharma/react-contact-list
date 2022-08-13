import React from "react";
import Feed from "./Feed";
//  react Link will links all the components
import { Link } from "react-router-dom";

// home contains the main data of the app
const Home = ({ contacts }) => {
  return (
    <main className="Home">
      <Link to="contact/new">
        <button className="button addContact">Add New Contact</button>
      </Link>

      {contacts.length ? (
        <ul>
          <Feed contacts={contacts} />
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>No Contacts to display.</p>
      )}
    </main>
  );
};

export default Home;
