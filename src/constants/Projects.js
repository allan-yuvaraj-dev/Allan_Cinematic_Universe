export const myProjects = [
  {
    title: "Xerox – ಮಲ್ಟಿ ಫಂಕ್ಷನ್ ಪ್ರಿಂಟರ್ಸ್ (MFP)",
    desc: "Developed embedded software modules for MFP devices using C++ in a Linux environment. Implemented VoIP/FOIP T.30 fax protocols, performed extensive testing, and ensured reliability for print, scan, copy, and fax services.",
    subdesc:
      "Responsibilities included Bash scripting for patch management, root-cause analysis through subsystem logs, version control with Git, and executing Smoke, Regression, SVT, and ODIO tests. Focused on robust, traceable, and scalable embedded systems development.",
    href: "#", // add project link if any
    texture: "/textures/project/hclXerox.mp4", // optional 3D texture or video
    logo: "/assets/HCL.png",
    logoStyle: {
      backgroundColor: "#0A4D8C",
      border: "0.2px solid #0A4D8C",
      boxShadow: "0px 0px 50px 0px rgba(10,77,140,0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "C++", path: "/assets/tech/C++.png" },
      { id: 2, name: "Linux", path: "/assets/tech/linux.png" },
      { id: 3, name: "Bash", path: "/assets/tech/bash.png" },
      { id: 4, name: "Git", path: "/assets/tech/git.png" },
      { id: 5, name: "Embedded Systems", path: "/assets/tech/embedded.png" },
      { id: 6, name: "System Testing", path: "/assets/tech/testing.png" },
    ],
  },
  {
    title: "Another HCL Project – Project Name Here",
    desc: "Short description of the project, what it does, and its core purpose.",
    subdesc:
      "Detailed responsibilities, technical contributions, tools used, and any testing or deployment highlights.",
    href: "#", // project link if any
    texture: "/textures/project/hclProject2.mp4",
    logo: "/assets/HCL.png",
    logoStyle: {
      backgroundColor: "#0A4D8C",
      border: "0.2px solid #0A4D8C",
      boxShadow: "0px 0px 50px 0px rgba(10,77,140,0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Tech1", path: "/assets/tech1.png" },
      { id: 2, name: "Tech2", path: "/assets/tech2.png" },
      { id: 3, name: "Tech3", path: "/assets/tech3.png" },
    ],
  },
];
