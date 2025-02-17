import { useRef } from "react";
import Dropdown from "./DropDown";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import TextArea from "./TextArea";

const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const formObj = Object.fromEntries(data.entries());
    const formattedMessage = `
    Data received:
    ---------------------------
    Name: ${formObj.firstname} ${formObj.lastname}
    Age: ${formObj.age}, Gender: ${formObj.gender}
    Skills: ${formObj.skills}
    Contact: ${formObj.email}, ${formObj.phone}
    Address: ${formObj.address}`;
    alert(formattedMessage);
  };

  return (
    <div className="container mt-4 w-50">
      <h1 className="text-center">User Details</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="card p-3">
        {/* First name */}
        <InputField
          type="text"
          name="firstname"
          id="firstname"
          labelText="First Name"
        />
        {/* Last name */}
        <InputField
          type="text"
          name="lastname"
          id="lastname"
          labelText="Last Name"
        />
        {/* Age */}
        <InputField type="number" name="age" id="age" labelText="Age" />

        {/* Gender */}
        <RadioButtons
          options={["Male", "Female", "Other"]}
          name="gender"
          labelText="Gender"
        />
        {/* Skills */}
        <Dropdown
          options={["Frontend", "Backend", "Fullstack"]}
          name="skills"
          id="skills"
          labelText="Skills"
        />

        {/* Email */}
        <InputField type="email" name="email" id="email" labelText="Email" />

        {/* Phone number */}
        <InputField
          type="number"
          name="phone"
          id="phone"
          labelText="Phone"
          placeholder="Enter phone number"
        />

        {/* Address */}
        <TextArea name="address" labelText="Address" id="address" />

        <hr />

        <button type="submit" className="btn btn-primary btn-md  w-50 mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
