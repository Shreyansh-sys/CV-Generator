// import { useState } from 'react'
// import './App.css'
// import Education from './components/EducationInfo'
// import ExperienceInfo from './components/ExperienceInfo'
// import GeneralInfo from './components/GeneralInfo'

// function App() {

//   return (
//     <div>
//       <h1>CV Generator</h1>
//       <hr />
//       <GeneralInfo/>
//       <Education/>
//       <ExperienceInfo/>
//     </div>
//   )
// }

// export default App

// import "./App.css";
// import InfoSection from "./components/InfoSection";

// function App() {
//   return (
//     <div>
//       <h1>CV Generator</h1>

//       <InfoSection
//         title="General Information"
//         fields={[
//           { name: "name", type: "text", placeholder: "John Doe", label: "Name" },
//           { name: "email", type: "email", placeholder: "doe123@gmail.com", label: "Email" },
//           { name: "phone", type: "tel", placeholder: "1234567890", label: "Phone" },
//         ]}
//       />

//       <InfoSection
//         title="Education"
//         fields={[
//           { name: "school", type: "text", placeholder: "Harvard University", label: "School Name" },
//           { name: "degree", type: "text", placeholder: "BSc Computer Science", label: "Degree" },
//           { name: "date", type: "date", placeholder: "", label: "Graduation Date" },
//         ]}
//       />

//       <InfoSection
//         title="Practical Experience"
//         fields={[
//           { name: "company", type: "text", placeholder: "Google", label: "Company Name" },
//           { name: "position", type: "text", placeholder: "Software Engineer", label: "Position" },
//           { name: "startDate", type: "date", placeholder: "", label: "Start Date" },
//           { name: "endDate", type: "date", placeholder: "", label: "End Date" },
//         ]}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import InfoSection from "./components/InfoSection";
// import CVPreview from "./components/CVPreview";

// function App() {
//   const [generalInfo, setGeneralInfo] = useState({});
//   const [education, setEducation] = useState({});
//   const [experience, setExperience] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   return (
//     <div>
//       <h1>CV Generator</h1>

//       {!isSubmitted ? (
//         <>
//           <InfoSection title="General Information" fields={[
//             { name: "name", type: "text", placeholder: "John Doe", label: "Name" },
//             { name: "email", type: "email", placeholder: "doe123@gmail.com", label: "Email" },
//             { name: "phone", type: "tel", placeholder: "1234567890", label: "Phone" },
//           ]} setData={setGeneralInfo} />

//           <InfoSection title="Education" fields={[
//             { name: "school", type: "text", placeholder: "Harvard University", label: "School Name" },
//             { name: "degree", type: "text", placeholder: "BSc Computer Science", label: "Degree" },
//             { name: "date", type: "date", placeholder: "", label: "Graduation Date" },
//           ]} setData={setEducation} />

//           <InfoSection title="Practical Experience" fields={[
//             { name: "company", type: "text", placeholder: "Google", label: "Company Name" },
//             { name: "position", type: "text", placeholder: "Software Engineer", label: "Position" },
//             { name: "startDate", type: "date", placeholder: "", label: "Start Date" },
//             { name: "endDate", type: "date", placeholder: "", label: "End Date" },
//           ]} setData={setExperience} />

//           <button onClick={() => setIsSubmitted(true)}>Generate CV</button>
//         </>
//       ) : (
//         <>
//           <CVPreview generalInfo={generalInfo} education={education} experience={experience} />
//           <button onClick={() => setIsSubmitted(false)}>Edit</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import InfoSection from "./components/InfoSection";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="app-wrapper">
      <h1>CV Generator</h1>

      {!isSubmitted ? (
        <>
          <InfoSection
            title="General Information"
            fields={[
              { name: "name", type: "text", placeholder: "John Doe", label: "Name" },
              { name: "email", type: "email", placeholder: "doe123@gmail.com", label: "Email" },
              { name: "phone", type: "tel", placeholder: "1234567890", label: "Phone" },
            ]}
            setData={setGeneralInfo} // ✅ Pass state updater function
          />

          <InfoSection
            title="Education"
            fields={[
              { name: "school", type: "text", placeholder: "Harvard University", label: "School Name" },
              { name: "degree", type: "text", placeholder: "BSc Computer Science", label: "Degree" },
              { name: "date", type: "date", placeholder: "", label: "Graduation Date" },
            ]}
            setData={setEducation} // ✅ Pass state updater function
          />

          <InfoSection
            title="Practical Experience"
            fields={[
              { name: "company", type: "text", placeholder: "Google", label: "Company Name" },
              { name: "position", type: "text", placeholder: "Software Engineer", label: "Position" },
              { name: "responsibilities", type: "text", placeholder: "Developed APIs using Java Spring Boot for a client project...", label: "Position" },
              { name: "skills", type: "text", placeholder: "Java, ReactJS, SQL...", label: "Position" },
              { name: "startDate", type: "date", placeholder: "", label: "Start Date" },
              { name: "endDate", type: "date", placeholder: "", label: "End Date" },
            ]}
            setData={setExperience} // ✅ Pass state updater function
          />

          <button onClick={() => setIsSubmitted(true)}>Generate CV</button>
        </>
      ) : (
        <>
          <CVPreview generalInfo={generalInfo} education={education} experience={experience} />
          <button onClick={() => setIsSubmitted(false)}>Edit</button>
          <button onClick={() => window.print()}>Download as PDF / Print</button>
        </>
      )}
    </div>
  );
}

export default App;


