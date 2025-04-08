import "../styles/CVPreview.css";

const CVPreview = ({ generalInfo, education, experience }) => {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>

      <section>
        <h3>General Information</h3>
        <p><strong>Name:</strong> {generalInfo.name || "N/A"}</p>
        <p><strong>Email:</strong> {generalInfo.email || "N/A"}</p>
        <p><strong>Phone:</strong> {generalInfo.phone || "N/A"}</p>
      </section>

      <section>
        <h3>Education</h3>
        <p><strong>School:</strong> {education.school || "N/A"}</p>
        <p><strong>Degree:</strong> {education.degree || "N/A"}</p>
        <p><strong>Graduation Date:</strong> {education.date || "N/A"}</p>
      </section>

      <section>
        <h3>Practical Experience</h3>
        <p><strong>Company:</strong> {experience.company || "N/A"}</p>
        <p><strong>Position:</strong> {experience.position || "N/A"}</p>
        <p><strong>Responsibilities:</strong> {experience.responsibilitites || "N/A"}</p>
        <p><strong>Start Date:</strong> {experience.startDate || "N/A"}</p>
        <p><strong>End Date:</strong> {experience.endDate || "N/A"}</p>
      </section>
    </div>
  );
};

export default CVPreview;
