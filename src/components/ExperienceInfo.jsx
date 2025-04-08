import { useState } from "react";
import "../styles/ExperienceInfo.css";

const ExperienceInfo = () => {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  const handleChange = (e) => {
    setExperienceInfo({ ...experienceInfo, [e.target.name]: e.target.value });
  };
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = () => {
    setIsEditing(false);
  };
  return (
    <div className="experience">
        <h2>Experience Info</h2>
        {isEditing ? (
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={experienceInfo.companyName}
        onChange={handleChange}
        />
        <input
        type="text"
        name="positionTitle"
        placeholder="Position Title"
        value={experienceInfo.positionTitle}
        onChange={handleChange}
        />
        <textarea
        name="responsibilities"
        placeholder="Main Responsibilities"
        value={experienceInfo.responsibilities}
        onChange={handleChange}
        />
        <input
        type="date"
        name="dateFrom"
        value={experienceInfo.dateFrom}
        onChange={handleChange}
        />
        <input
        type="date"
        name="dateUntil"
        value={experienceInfo.dateUntil}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        ) : (
            <div>
          <p>
            <strong>Company Name:</strong> {experienceInfo.companyName}
          </p>
          <p>
            <strong>Position Title:</strong> {experienceInfo.positionTitle}
          </p>
          <p>
            <strong>Main Responsibilities:</strong> {experienceInfo.responsibilities}
          </p>
          <p>
            <strong>From Date:</strong> {experienceInfo.dateFrom}
          </p>
          <p>
            <strong>Until Date:</strong> {experienceInfo.dateUntil}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
        )
    }
    </div>
  );
};

export default ExperienceInfo;
