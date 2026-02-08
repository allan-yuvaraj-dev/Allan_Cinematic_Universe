import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineFolder,
  HiOutlineTranslate,
} from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { navbarTranslations, navItems } from "../../constants/i18nConstants/navbarTranslations.js";

const Header = ({ canNavigate, onRestrictedClick, sectionRefs }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { i18n } = useTranslation();
  const [lang, setLang] = useState("kn"); 

  const navLabels =
    navbarTranslations[lang]?.sections || navbarTranslations.en.sections;

  // navLinks using  navItems and labels
  const navLinks = [
    { name: navLabels.about, path: navItems.about },
    { name: navLabels.education, path: navItems.education },
    { name: navLabels.experience, path: navItems.experience },
    { name: navLabels.projects, path: navItems.projects },
    { name: navLabels.contact, path: navItems.contact },
  ];

  // Scroll behavior
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!canNavigate) {
      onRestrictedClick();
      return;
    }

 


    const scrollMap = {
      [navItems.about]: sectionRefs.aboutRef,
      [navItems.education]: sectionRefs.eduRef,
      [navItems.experience]: sectionRefs.expRef,
      [navItems.projects]: sectionRefs.projectsRef,
      [navItems.contact]: sectionRefs.contactRef,
    };

    const targetRef = scrollMap[path];
    if (targetRef?.current)
      targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle language
  const toggleLanguage = () => {
    const newLang = lang === "kn" ? "en" : "kn";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  // Scroll hide header
  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY <= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchParams.get("sign-in")) setShowSignIn(true);
  }, [searchParams]);

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      showSignIn || mobileMenuOpen,
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [showSignIn, mobileMenuOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearchParams({});
    }
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-3 left-0 right-0 z-50 px-6 py-4"
          >
            <div className="w-full flex items-center justify-between">
              <Link to="/Er.Allen_Yuvaraj/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow text-primary">
                  <span className="text-xl font-bold">AY</span>
                </div>
              </Link>

              <SignedIn>
                <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-md">
                  <ul className="flex gap-6 items-center">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={(e) => handleNavClick(e, link.path)}
                          className="text-lg font-medium text-white hover:text-sky-400 transition flex items-center gap-1"
                        >
                          {link.name}{" "}
                          {/* {link.name === navLabels.projects && (
                            // <HiOutlineFolder />
                          )} */}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={toggleLanguage}
                        className="text-white hover:text-sky-400 transition flex items-center gap-1"
                        title="Toggle Language"
                      >
                        <HiOutlineTranslate size={20} />
                        {lang.toUpperCase()}
                      </button>
                    </li>
                    <li>
                      <UserButton
                        afterSignOutUrl="/Er.Allen_Yuvaraj/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8 border border-white",
                          },
                        }}
                      />
                    </li>
                  </ul>
                </nav>

                <button
                  className="md:hidden bg-white/10 backdrop-blur-md p-2 rounded-full text-white shadow-md"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <HiOutlineMenuAlt3 size={24} />
                </button>
              </SignedIn>

              <SignedOut>
                <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4 shadow-md">
                  <button
                    onClick={() => navigate("/Er.Allen_Yuvaraj/?sign-in=true")}
                    className="text-sm font-semibold text-white hover:text-sky-400 transition"
                  >
                    Please Sign In to Continue
                  </button>
                </div>
              </SignedOut>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6"
            onClick={(e) =>
              e.target === e.currentTarget && setMobileMenuOpen(false)
            }
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiOutlineX size={28} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-xl font-semibold text-white hover:text-sky-400 transition flex items-center gap-1"
              >
                {link.name}{" "}
                {link.name === navLabels.projects && <HiOutlineFolder />}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-sky-400 transition flex items-center gap-1"
            >
              <HiOutlineTranslate size={20} /> {lang.toUpperCase()}
            </button>
            <UserButton
              afterSignOutUrl="/Er.Allen_Yuvaraj/"
              appearance={{
                elements: { avatarBox: "w-10 h-10 border border-white" },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <SignIn fallbackRedirectUrl="/Er.Allen_Yuvaraj/" signUpUrl={null} />
        </div>
      )}
    </>
  );
};

export default Header;
