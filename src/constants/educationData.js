// lib/educationData.js
import VELAMMAL from "/assets/velammal.png";
import JAWAHAR from "/assets/jawahar.png";

const educationData = [
  {
    degree: "B.E.",
    fullForm: "Bachelor of Engineering",
    specialization: "Electrical and Electronics Engineering",
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-100",
    image: VELAMMAL,
    institution: "Velammal Engineering College",
    university: "Anna University",
    location: "Chennai, Tamil Nadu",
    duration: "Aug 2019 – Apr 2023",
    activities: ["Powerlifting"],
    skills: ["Logical Approach", "Communication"],
    grade: null,
    description:
      "Completed Bachelor of Engineering in Electrical and Electronics Engineering with a strong foundation in core engineering principles, problem-solving, and analytical thinking.",
  },
  {
    degree: "HSC",
    fullForm: "Higher Secondary Certificate",
    specialization: "Computer Science",
    gradient: "bg-gradient-to-br from-sky-500 to-sky-100",
    image: JAWAHAR,
    institution: "Jawahar Matriculation Higher Secondary School",
    university: "Tamil Nadu State Board",
    location: "Neyveli, Tamil Nadu",
    duration: "Jun 2018 – Mar 2019",
    activities: [],
    skills: [],
    grade: "76.2%",
    description:
      "Completed higher secondary education with specialization in Computer Science, gaining foundational knowledge in programming concepts and logical reasoning.",
  },
  {
    degree: "SSLC",
    fullForm: "Secondary School Leaving Certificate",
    specialization: "General",
    gradient: "bg-gradient-to-br from-emerald-500 to-emerald-100",
    image: JAWAHAR,
    institution: "Jawahar Higher Secondary School",
    university: "Tamil Nadu State Board",
    location: "Neyveli, Tamil Nadu",
    duration: "Jun 2016 – Mar 2017",
    activities: [],
    skills: [],
    grade: "88%",
    description:
      "Completed secondary school education with a strong academic foundation across general subjects.",
  },
];

export default educationData;
