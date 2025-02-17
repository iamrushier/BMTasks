import React from "react";

const Form = () => {
  return (
    <div className="container mt-4 w-75">
      <h1 className="text-center">User Details</h1>
      <form className="card p-3">
        {/* First name*/}
        <div className="form-group row m-2">
          <label htmlFor="firstname" className="col-sm-3 col-form-label">
            First Name
          </label>
          <input
            type="text"
            className="col-sm-9"
            placeholder="Enter first name"
            name="firstname"
          />
        </div>
        {/* Last name*/}
        <div className="form-group row m-2">
          <label htmlFor="lastname" className="col-sm-3 col-form-label">
            Last Name
          </label>
          <input
            type="text"
            className="col-sm-9"
            placeholder="Enter last name"
            name="lastname"
          />
        </div>
        {/* Age */}
        <div className="form-group row m-2">
          <label htmlFor="age" className="col-sm-3 col-form-label">
            Age
          </label>
          <input
            type="number"
            className="col-sm-9"
            placeholder="Enter age"
            name="age"
          />
        </div>
        {/* Gender */}
        <div className="form-group row m-2">
          <label htmlFor="gender" className="col-sm-3 col-form-label">
            Gender
          </label>
          <div className="options col-sm-9 m-auto d-flex">
            <span className="me-5">
              <input type="radio" name="gender" /> Male
            </span>
            <span className="me-5">
              <input type="radio" name="gender" /> Female
            </span>
            <span className="me-5">
              <input type="radio" name="gender" /> Other
            </span>
          </div>
        </div>
        {/* Skills */}
        <div className="form-group row m-2">
          <label htmlFor="skills" className="col-sm-3 col-form-label">
            Skills
          </label>
          <select name="skills" id="skills" className="col-sm-9">
            <option value="frontend">Front-end</option>
            <option value="backend">Back-end</option>
            <option value="fullstack">Full-stack</option>
          </select>
        </div>
        {/* Email */}
        <div className="form-group row m-2">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="col-sm-9"
          />
        </div>
        {/* Phone number */}
        <div className="form-group row m-2">
          <label htmlFor="phone" className="col-sm-3 col-form-label">
            Phone
          </label>
          <input
            type="number"
            placeholder="Enter phone number"
            name="phone"
            className="col-sm-9"
          />
        </div>
        {/* Address */}
        <div className="form-group row m-2">
          <label htmlFor="address" className="col-sm-3 col-form-label">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            placeholder="Enter address"
            cols={30}
            rows={5}
            className="col-sm-9"
          ></textarea>
        </div>
        <hr />
        <button type="submit" className="btn btn-primary btn-md  w-50 mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
