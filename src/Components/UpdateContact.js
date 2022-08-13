import React from "react";
// importing useParams for getting the id
import { useParams } from "react-router-dom";

// update componets contains a form for updating the contact
const UpdateContact = ({
  updateName,
  updatePhone,
  updateEmail,
  updateCity,
  updateCompany,
  setUpdateName,
  setUpdatePhone,
  setUpdateEmail,
  setUpdateCity,
  setUpdateCompany,
  setUpdateId,
  handleUpdateSubmit,
}) => {
  const { id } = useParams();
  setUpdateId(`${id}`);
  //

  return (
    <div>
      <h1>Update contact</h1>
      <form className="contact-form" onSubmit={handleUpdateSubmit}>
        <label htmlFor="name" style={{ display: "visible" }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={updateName}
          placeholder="Name"
          onChange={(e) => setUpdateName(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          value={updatePhone}
          placeholder="Phone"
          onChange={(e) => setUpdatePhone(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={updateEmail}
          placeholder="Email"
          onChange={(e) => setUpdateEmail(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={updateCity}
          placeholder="City"
          onChange={(e) => setUpdateCity(e.target.value)}
        />
        <label htmlFor="company">Company</label>
        <input
          id="phone"
          type="text"
          value={updateCompany}
          placeholder="Comapany"
          onChange={(e) => setUpdateCompany(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateContact;
