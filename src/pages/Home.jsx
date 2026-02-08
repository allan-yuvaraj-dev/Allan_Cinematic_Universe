// src/Pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";

import Header from "@/components/Hero/Header";
import RestrictedAlert from "@/components/RestrictedAlert";
import ProtectedSection from "@/components/ProtectedSection";

import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/About/AboutSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import EducationSection from "@/components/Education/EducationSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

const Home = ({ scrollTo }) => {
  const { user } = useUser();
  const [canNavigate, setCanNavigate] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Section refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  const sectionMap = {
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    education: eduRef,
    experience: expRef,
    contact: contactRef,
  };

  useEffect(() => {
    const stored = localStorage.getItem("hasViewedProfile");
    if (stored === "true") {
      setCanNavigate(true);
      setScrollEnabled(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollEnabled]);

  // Scroll to section on URL access
  useEffect(() => {
    if (scrollEnabled && scrollTo && sectionMap[scrollTo]) {
      sectionMap[scrollTo].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollEnabled, scrollTo]);

  const triggerAlertSequence = (messages, delays) => {
    if (!messages.length) return;
    setAlertMessage(messages[0]);
    setShowAlert(true);

    let index = 1;
    const sequence = () => {
      if (index < messages.length) {
        setTimeout(
          () => {
            setAlertMessage(messages[index]);
            index++;
            sequence();
          },
          delays[index - 1],
        );
      }
    };
    sequence();
  };

  const handleViewProfile = () => {
    if (!user) {
      triggerAlertSequence(
        ["Access Denied", "Please Sign In to Continue"],
        [2000],
      );
    } else {
      localStorage.setItem("hasViewedProfile", "true");
      setCanNavigate(true);
      setScrollEnabled(true);
      setTimeout(() => {
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleRestrictedClick = () => {
    if (!canNavigate) {
      triggerAlertSequence(["Access Denied", "Click View Profile"], [1000]);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header
          canNavigate={canNavigate}
          onRestrictedClick={handleRestrictedClick}
          sectionRefs={{
            heroRef,
            aboutRef,
            projectsRef,
            eduRef,
            expRef,
            contactRef,
          }}
        />
      </div>

      {/* Alerts */}
      <RestrictedAlert
        show={showAlert}
        message={alertMessage}
        onClose={() => setShowAlert(false)}
      />

      {/* Main Content */}
      <div className={scrollEnabled ? "pb-24" : "h-screen overflow-hidden"}>
        <div ref={heroRef}>
          <Hero onViewProfile={handleViewProfile} />
        </div>

        {scrollEnabled && (
          <>
            <ProtectedSection
              canNavigate={canNavigate}
              onRestrictedClick={handleRestrictedClick}
            >
              <div ref={aboutRef}>
                <AboutSection />
              </div>
            </ProtectedSection>

            <ProtectedSection
              canNavigate={canNavigate}
              onRestrictedClick={handleRestrictedClick}
            >
              <div ref={projectsRef}>
                <ProjectsSection />
              </div>
            </ProtectedSection>

            <ProtectedSection
              canNavigate={canNavigate}
              onRestrictedClick={handleRestrictedClick}
            >
              <div ref={eduRef}>
                <EducationSection />
              </div>
            </ProtectedSection>

            <ProtectedSection
              canNavigate={canNavigate}
              onRestrictedClick={handleRestrictedClick}
            >
              <div ref={expRef}>
                <ExperienceSection />
              </div>
            </ProtectedSection>

            <ProtectedSection
              canNavigate={canNavigate}
              onRestrictedClick={handleRestrictedClick}
            >
              <div ref={contactRef}>
                <Contact />
              </div>
            </ProtectedSection>

            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
