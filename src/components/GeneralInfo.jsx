import { useState } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Switch to display mode
  };
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => {
    setIsEditing(true)
  }
  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={generalInfo.name}
            onChange={handleChange}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={generalInfo.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={generalInfo.phoneNumber}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {generalInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {generalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {generalInfo.phoneNumber}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
