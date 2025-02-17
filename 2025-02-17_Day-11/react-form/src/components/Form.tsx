import Dropdown from "./DropDown";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";
import TextArea from "./TextArea";

const Form = () => {
  return (
    <div className="container mt-4 w-75">
      <h1 className="text-center">User Details</h1>
      <form className="card p-3">
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

        <button
          type="submit"
          className="btn btn-primary btn-md  w-50 mx-auto"
          onClick={(e) => {
            e.preventDefault();
            console.log("Data submitted");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
