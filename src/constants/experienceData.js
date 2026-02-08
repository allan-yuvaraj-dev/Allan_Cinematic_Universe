// lib/experienceData.js

import HCL from "/assets/HCL.png";
import LTIM from "/assets/LTIM.png";
import XEROX from "/assets/XEROX.png";
import BAXTER from "/assets/BAXTER.png";


export const professionalExperience = [
  {
    companyId: "hcl",
    logoPath: HCL,
    company: "HCL Technologies Limited",
    position: "Software Engineer – Development & Testing",
    duration: "Jan 2024 – Present",
    location: "Chennai, India",
    summary:
      "Working as a Software Engineer in embedded systems development and testing, contributing to enterprise and regulated domain projects.",
    techStack: ["C++", "Linux", "Bash", "Git", "Embedded Systems"],
  },

  {
    companyId: "ltim",
    logoPath: LTIM,
    company: "LTIMindtree",
    position: "Intern",
    duration: "Feb 2023 – Mar 2023",
    location: "Remote",
    summary:
      "Completed Ignite 2023 internship program focused on frontend fundamentals and problem-solving skills.",
    techStack: ["HTML", "CSS", "JavaScript", "Problem Solving"],
  },
];


// lib/hclProjects.js
export const hclProjectExperience = [
  {
    companyId: "hcl",
    logoPath: XEROX,
    projectName: "Xerox – Multi-Function Printers (MFP)",
    domain: "Embedded Systems",
    duration: "Jan 2024 – Present",
    location: "Chennai, India",
    responsibilities: [
      "Developed and enhanced embedded software modules in C++ under Linux environments for MFP devices.",
      "Developed and deployed patches using Shell (Bash) scripting with audit-ready traceability.",
      "Implemented and tested fax communication using T.30 protocol over VoIP and FOIP lines.",
      "Validated large fax jobs and performed failure analysis.",
      "Analyzed logs from Fax Controller, Copy Controller, Network Controller, and other subsystems.",
      "Tested and validated EJS services including Print, Scan, Copy, and Fax jobs.",
      "Performed Smoke, Unit, Regression, SVT, and ODIO testing.",
      "Used Git for version control and code reviews.",
    ],
    techStack: [
      "C++",
      "Linux",
      "Bash",
      "Git",
      "Embedded Systems",
      "System Testing",
    ],
  },

  {
    companyId: "hcl",
    logoPath: BAXTER,
    projectName: "Baxter – Medical Devices (Infusion Pump Systems)",
    domain: "Medical Devices | Automation Testing",
    duration: "Project Based",
    location: "Chennai, India",
    responsibilities: [
      "Converted 100+ manual test cases into Python automation scripts, reducing manual effort by 60%.",
      "Created reusable automation frameworks and custom keywords.",
      "Developed Python-based robotic automation scripts.",
      "Conducted dry runs and formal validation testing with hardware–software integration.",
      "Executed robotic arm-based test automation.",
      "Worked in compliance with regulated medical device standards and validation documentation.",
    ],
    techStack: [
      "Python",
      "Automation Testing",
      "Robotic Arm Testing",
      "Medical Devices",
      "Hardware–Software Integration",
    ],
  },
];
