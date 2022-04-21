import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [clear, setClear] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!name || !email || !number) {
      return toast.warning("Please fill in all fields");
    }

    if (checkEmail) {
      return toast.error("Given Email is already exists!");
    }

    if (checkNumber) {
      return toast.error("Given Number is already exists!");
    }
  };

  // const handleClear = (e) => {
  //   e.preventDefault();
  //   setClear("");
  // };

  const data = {
    id: contacts[contacts.length - 1].id + 1,
    name,
    email,
    number,
  };

  dispatch({ type: "ADD_CONTACT", payload: data });
  toast.success("Student details added successfully");
  history.push("/");

  return (
    <div className="container">
      <h1 className="display-3 text-center my-5">Add Student Details</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                className="form-control my-3"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="submit"
                value="Add Student Details"
                className="btn btn-dark me-3"
                onClick={handleSubmit}
              />

              {/* <button className="btn btn-danger" onClick={handleClear}>
                Clear All
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
