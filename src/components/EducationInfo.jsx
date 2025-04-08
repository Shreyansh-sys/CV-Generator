import { useState } from "react";
import "../styles/EducationInfo.css";

const Education = () => {
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    major: "",
    gpa: "",
    dateOfGraduation: "",
  });
  const handleChange = (e) => {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
  };
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <div className="education">
      <h2>Education Info</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="schoolName"
            placeholder="School Name (eg. New York University)"
            value={educationInfo.schoolName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="major"
            placeholder="Major (eg. Computer Science)"
            value={educationInfo.major}
            onChange={handleChange}
          />
          <input
            type="number"
            name="gpa"
            placeholder="GPA (eg. 3.8)"
            value={educationInfo.gpa}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfGraduation"
            placeholder=""
            value={educationInfo.dateOfGraduation}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School Name:</strong> {educationInfo.schoolName}
          </p>
          <p>
            <strong>Major:</strong> {educationInfo.major}
          </p>
          <p>
            <strong>GPA:</strong> {educationInfo.gpa}
          </p>
          <p>
            <strong>Graduation Date:</strong> {educationInfo.dateOfGraduation}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
