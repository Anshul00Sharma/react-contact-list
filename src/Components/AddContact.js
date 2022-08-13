import React from "react";
// add Contact contains form for getting the contact information
const AddContact = ({
  newName,
  newPhone,
  newEmail,
  newCity,
  newCompany,
  setNewName,
  setNewPhone,
  setNewEmail,
  setNewCity,
  setNewCompany,
  handleSubmit,
}) => {
  return (
    <div className="add-contact">
      <span id="adCon">Add new Contact</span>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={newName}
          placeholder="Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          required
          value={newPhone}
          placeholder="Phone"
          onChange={(e) => setNewPhone(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          required
          value={newEmail}
          placeholder="Email"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          required
          value={newCity}
          placeholder="City"
          onChange={(e) => setNewCity(e.target.value)}
        />
        <label htmlFor="company">Company</label>
        <input
          id="phone"
          type="text"
          required
          value={newCompany}
          placeholder="Comapany"
          onChange={(e) => setNewCompany(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
