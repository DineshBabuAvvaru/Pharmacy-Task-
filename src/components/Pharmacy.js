import React, { useState } from "react";
import "./Pharmacy.css";
import {v4 as uuidv4} from 'uuid';

const existingPharmacies = [
    {
      id: 1,
      name: "Pharmacy A",
      address: "123 Main St",
      number: "123-456-7890",
      email: "pharmacyA@gmail.com",
    },
    {
      id: 2,
      name: "Pharmacy B",
      address: "456 fgh St",
      number: "987-654-3210",
      email: "pharmacyB@gmail.com",
    },
    {
      id: 3,
      name: "Pharmacy C",
      address: "786 tyu St",
      number: "987-654-3210",
      email: "pharmacyC@gmail.com",
    },
    {
      id: 4,
      name: "Pharmacy D",
      address: "543 sdf St",
      number: "987-654-3210",
      email: "pharmacyD@gmail.com",
    },
    {
      id: 5,
      name: "Pharmacy E",
      address: "678 rwr St",
      number: "987-654-3210",
      email: "pharmacyE@gmail.com",
    },
  ];

const Pharmacy = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(existingPharmacies);

  const handleAddPharmacy = () => {
    if (name && address && number && email) {
      const newPharmacyId = uuidv4(); 

      const newPharmacy = {
        id: newPharmacyId, 
        name,
        address,
        number,
        email,
      };
      setData([...data, newPharmacy])
      setName("");
      setAddress("");
      setNumber("");
      setEmail("");
      alert("Pharmacy Added Successfully!");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleRemovePharmacy = (id) => {
    const updatedPharmacies = data.filter(
      (pharmacy) => pharmacy.id !== id
    );
    setData(updatedPharmacies);
    alert("Pharmacy removed successfully!");
  };

  return (
    <div className="heading">
      <h1 className="side-heading">Pharmacy List</h1>
      {data.length >= 1 ? <ul>
        {data.map((pharmacy,index) => (
          <p key={pharmacy.id}> 
            <strong>{pharmacy.name}</strong>
            <p>{pharmacy.address}</p>
            <p>{pharmacy.contact}</p>
            <p>{pharmacy.email}</p>
            <button onClick={() => handleRemovePharmacy(pharmacy.id)}> 
              Remove
            </button>
          </p>
        ))}
      </ul>: <p> No data </p>} 

      <h2>Add New Pharmacy</h2>
      <form autoComplete="off">
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          className="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          id="address"
          value={address}
          placeholder="Address"
          className="address"
          onChange={(e) => setAddress(e.target.value)}
          required 
        />
        <br />
        <input
          type="number"
          id="number"
          value={number}
          placeholder="Contact"
          className="contact"
          onChange={(e) => setNumber(e.target.value)}
          required="true"
        />
        <br />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
      </form>
      <button type="button" onClick={handleAddPharmacy} className="button">
        Add Pharmacy
      </button>
      {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    </div>
  );
};

export default Pharmacy;
