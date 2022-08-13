// importing layout for basic structure of app
import Layout from "./Layout/Layout";
// importing home component for main content
import Home from "./Home";
// importing react routes
import { Route, Routes, useNavigate } from "react-router-dom";
// usestate and use effect for state management and feting apis
import { useState, useEffect } from "react";
// importing api information
import api from "../api/Contacts";
// importing components
import ContactDetails from "./ContactDetails";
import AddContact from "./AddContact";
import UpdateContact from "./UpdateContact";

// app components contains the full application
function App() {
  // state initializations
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateCompany, setUpdateCompany] = useState("");
  const [updateId, setUpdateId] = useState("");
  const navigate = useNavigate();

  // useEffect for fetching the api data at the launch of app
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get("/");
        setContacts(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchContacts();
  }, []);
  // handle delete delets the contacts
  const handleDelete = (id) => {
    const contactList = contacts.filter((contact) => contact.id !== id);
    setContacts(contactList);
    api.delete(`/${id}`);
    navigate("/");
  };

  // add new contacts
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;

    const freshContact = {
      id,
      name: newName,
      phone: newPhone,
      email: newEmail,
      address: { city: newCity },
      company: { name: newCompany },
    };
    api
      .post("/", JSON.stringify(freshContact))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    try {
      const allContact = [...contacts, freshContact];
      setContacts(allContact);
      setNewName("");
      setNewPhone("");
      setNewEmail("");
      setNewCity("");
      setNewCompany("");

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  // Update contacts
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    const contact = contacts.find(
      (contact) => contact.id.toString() === updateId
    );
    const freshContact = {
      id: updateId,
      name: updateName ? updateName : contact.name,
      phone: updatePhone ? updatePhone : contact.phone,
      email: updateEmail ? updateEmail : contact.email,
      address: { city: updateCity ? updateCity : contact.address.city },
      company: { name: updateCompany ? updateCompany : contact.company.name },
    };
    const contactList = contacts.filter((contac) => contac.id != updateId);
    console.log(contactList);

    console.log("this is filter", updateId, contactList);
    const updatedContacts = [...contactList, freshContact];
    setContacts(updatedContacts);
    // await api
    //   .patch(JSON.stringify(freshContact))
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    setUpdateName("");
    setUpdatePhone("");
    setUpdateEmail("");
    setUpdateCity("");
    setUpdateCompany("");
    navigate("/");
  };
  return (
    // routing of the whole application
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home contacts={contacts} />} />
        <Route path="contact">
          <Route
            path="new"
            element={
              <AddContact
                newName={newName}
                newPhone={newPhone}
                newEmail={newEmail}
                newCity={newCity}
                newCompany={newCompany}
                setNewName={setNewName}
                setNewPhone={setNewPhone}
                setNewEmail={setNewEmail}
                setNewCity={setNewCity}
                setNewCompany={setNewCompany}
                handleSubmit={handleSubmit}
              />
            }
          />

          <Route path=":id">
            <Route
              index
              element={
                <ContactDetails
                  contacts={contacts}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="update"
              element={
                <UpdateContact
                  updateName={updateName}
                  updatePhone={updatePhone}
                  updateEmail={updateEmail}
                  updateCity={updateCity}
                  updateCompany={updateCompany}
                  setUpdateName={setUpdateName}
                  setUpdatePhone={setUpdatePhone}
                  setUpdateEmail={setUpdateEmail}
                  setUpdateCity={setUpdateCity}
                  setUpdateCompany={setUpdateCompany}
                  handleUpdateSubmit={handleUpdateSubmit}
                  setUpdateId={setUpdateId}
                />
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
