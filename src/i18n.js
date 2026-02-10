// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import { navbarTranslations } from "./constants/i18nConstants/navbarTranslations";
// import { educationTranslations } from "./constants/i18nConstants/educationTranslations";
// import { experienceTranslations } from "./constants/i18nConstants/experienceTranslations";
// const resources = {
//   en: {
//     translation: {
//       ...navbarTranslations.en,
//       ...educationTranslations.en,
//       ...experienceTranslations.en,
//     },
//   },
//   kn: {
//     translation: {
//       ...navbarTranslations.kn,
//       ...educationTranslations.kn,
//       ...experienceTranslations.kn,
//     },
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: localStorage.getItem("lang") || "kn",
//   fallbackLng: "en",
//   interpolation: { escapeValue: false },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { navbarTranslations } from "./constants/i18nConstants/navbarTranslations_temp.js";
import { educationTranslations } from "./constants/i18nConstants/educationTranslations";
import { experienceTranslations } from "./constants/i18nConstants/experienceTranslations";

// Safe access to localStorage (avoids Vercel / SSR crash)
const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

const resources = {
  en: {
    translation: {
      ...navbarTranslations.en,
      ...educationTranslations.en,
      ...experienceTranslations.en,
    },
  },
  kn: {
    translation: {
      ...navbarTranslations.kn,
      ...educationTranslations.kn,
      ...experienceTranslations.kn,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "kn",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
