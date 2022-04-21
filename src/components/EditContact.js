import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1 className="display-3 text-center my-5">Edit Student Details {id}</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control my-3"
                placeholder="Email"
              />
              <input
                type="number"
                className="form-control my-3"
                placeholder="Phone number"
              />
              <input
                type="submit"
                value="Update Details"
                className="btn btn-block btn-dark me-3"
              />
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
