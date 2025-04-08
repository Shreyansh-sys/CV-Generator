import { useState } from "react";
import "../styles/InfoSection.css";

const InfoSection = ({ title, fields, setData }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setData(updatedData); // ✅ Update parent state in App.jsx
  };

  return (
    <div className="info-section">
      <h2>{title}</h2>
      {isEditing ? (
        fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))
      ) : (
        <div>
          {fields.map((field) => (
            <p key={field.name}>
              <strong>{field.label}:</strong> {formData[field.name]}
            </p>
          ))}
        </div>
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
};

export default InfoSection;
