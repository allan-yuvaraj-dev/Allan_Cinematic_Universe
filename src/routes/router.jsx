// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../Pages/Home";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import NotFound from "../Pages/NotFound";
import ExperienceSection from "@/Components/Experience/ExperienceSection";
import Contact from "@/Components/Contact/Contact";
import AboutSection from "@/components/About/AboutSection";
import EducationSection from "@/components/Education/EducationSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";

const router = createBrowserRouter([
  {
    path: "/Er.Allen_Yuvaraj/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <ProtectedRoutes>
            <AboutSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Education",
        element: (
          <ProtectedRoutes>
            <EducationSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Experience",
        element: (
          <ProtectedRoutes>
            <ExperienceSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Projects",
        element: (
          <ProtectedRoutes>
            <ProjectsSection />
          </ProtectedRoutes>
        ),
      },
      {
        path: "Contact",
        element: (
          <ProtectedRoutes>
            <Contact />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
