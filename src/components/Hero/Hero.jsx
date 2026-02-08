// // components/Hero.jsx
// import { useEffect, useState, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, useInView } from "framer-motion";
// import { Mail, MessageCircle, FileText, Linkedin, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { downloadPublicFolderAsZip } from "../../utils/util";
// import RestrictedAlert from "@/components/RestrictedAlert";
// import HeroImg from "/assets/AllenYuvaraj.png";
// import { heroTranslations } from "../../constants/i18nConstants/heroTranslations";

// const Hero = ({ onViewProfile }) => {
//   const { i18n } = useTranslation();
//   const lang = i18n.language || "en";

//   const data = heroTranslations[lang] || heroTranslations.en;

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const [hasViewedProfile, setHasViewedProfile] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: "" });

//   useEffect(() => {
//     const stored = localStorage.getItem("hasViewedProfile");
//     setHasViewedProfile(stored === "true");
//   }, []);

//   const handleViewProfile = () => {
//     localStorage.setItem("hasViewedProfile", "true");
//     setHasViewedProfile(true);
//     onViewProfile();
//   };

//   const showAlert = (message) => {
//     setAlert({ show: true, message });
//   };

//   const socialLinks = [
//     {
//       icon: Mail,
//       label: "Email",
//       href: `mailto:${data.contact.email}`,
//       message: data.alerts.email,
//     },
//     {
//       icon: MessageCircle,
//       label: "WhatsApp",
//       href: data.contact.whatsappLink,
//       message: data.alerts.whatsapp,
//     },
//     {
//       icon: FileText,
//       label: "Resume",
//       onClick: downloadPublicFolderAsZip,
//       message: data.alerts.resume,
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: data.contact.linkedin,
//       message: data.alerts.linkedin,
//     },
//     {
//       icon: Github,
//       label: "GitHub",
//       href: data.contact.github,
//       message: data.alerts.github,
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen flex flex-col pt-24 pb-12 px-0 lg:px-6"
//     >
//       <div className="w-full px-6 flex-1 flex flex-col justify-start">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* Left Section - Image */}
//           {/* <motion.div
//             key={isInView ? "visible-left" : "hidden-left"}
//             initial={{ x: 100, opacity: 0 }}
//             animate={isInView ? { x: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex md:justify-center pl-0 lg:pl-48 bg-transparent"
//           >
//             <div
//               className="w-[320px] md:w-[480px] sm:w-[220px] max-w-full
//                h-[500px] md:h-[600px] sm:h-[400px]
//                rounded-2xl overflow-hidden relative
//                shadow-[60_60_60px_10px_rgba(56,189,248,0.6),0_0_70px_20px_rgba(236,72,153,0.5)]
//                hover:shadow-[0_0_80px_20px_rgba(56,189,248,0.8),0_0_100px_30px_rgba(236,72,153,0.7)]
//                transition-shadow duration-500"
//             >
//               <img
//                 src={HeroImg}
//                 alt={`${data.name} portrait`}
//                 className="w-full h-full object-cover rounded-2xl filter drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]
//                  transition-transform duration-500"
//                 style={{ background: "transparent" }}
//               />
//             </div>
//           </motion.div> */}

//           {/* Right Section - Content */}
//           <motion.div
//             key={isInView ? "visible-right" : "hidden-right"}
//             initial={{ x: -100, opacity: 0 }}
//             animate={isInView ? { x: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex flex-col self-center space-y-6"
//           >
//             <div className="border-l-4 border-primary pl-6 space-y-6">
//               <h1 className="text-5xl lg:text-7xl font-bold text-glow">
//                 {data.name}
//               </h1>
//               <p className="text-2xl font-semibold text-muted-foreground">
//                 {data.qualifications}
//               </p>
//               <p className="text-xl text-muted-foreground">
//                 {data.designation}
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 const isLink = !!social.href;

//                 const handleHover = () => showAlert(social.message);

//                 return (
//                   <motion.div
//                     key={social.label}
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//                   >
//                     {isLink ? (
//                       <a
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onMouseEnter={handleHover}
//                         className="w-16 h-16 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:glow transition-all group"
//                       >
//                         <Icon className="w-7 h-7 group-hover:text-primary transition-colors" />
//                       </a>
//                     ) : (
//                       <button
//                         onClick={social.onClick}
//                         onMouseEnter={handleHover}
//                         className="w-16 h-16 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:glow transition-all group"
//                       >
//                         <Icon className="w-7 h-7 group-hover:text-primary transition-colors" />
//                       </button>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* View Profile Button - FIRST TIME USERS ONLY */}
//             {!hasViewedProfile && (
//               <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="flex justify-start"
//               >
//                 <Button
//                   onClick={handleViewProfile}
//                   size="lg"
//                   className="glass-strong text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform glow"
//                 >
//                   {data.buttons.viewProfile}
//                 </Button>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>

//       {/* Alert Component */}
//       <RestrictedAlert
//         show={alert.show}
//         message={alert.message}
//         onClose={() => setAlert({ show: false, message: "" })}
//       />
//     </section>
//   );
// };

// export default Hero;

// components/Hero.jsx
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, FileText, Linkedin, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { downloadPublicFolderAsZip } from "../../utils/util";
import RestrictedAlert from "@/components/RestrictedAlert";
import { heroTranslations } from "../../constants/i18nConstants/heroTranslations";

const Hero = ({ onViewProfile }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const data = heroTranslations[lang] || heroTranslations.en;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [hasViewedProfile, setHasViewedProfile] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    const stored = localStorage.getItem("hasViewedProfile");
    setHasViewedProfile(stored === "true");
  }, []);

  const handleViewProfile = () => {
    localStorage.setItem("hasViewedProfile", "true");
    setHasViewedProfile(true);
    onViewProfile();
  };

  const showAlert = (message) => {
    setAlert({ show: true, message });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${data.contact.email}`,
      message: data.alerts.email,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: data.contact.whatsappLink,
      message: data.alerts.whatsapp,
    },
    {
      icon: FileText,
      label: "Resume",
      onClick: downloadPublicFolderAsZip,
      message: data.alerts.resume,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: data.contact.linkedin,
      message: data.alerts.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      href: data.contact.github,
      message: data.alerts.github,
    },
  ];

  const socialContainer = {
    hidden: { x: -120, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const socialItem = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center space-y-8"
      >
        <h1
          key={lang}
          className="font-bold text-glow
            text-4xl sm:text-5xl md:text-6xl lg:text-9xl"
        >
          <TypeAnimation sequence={[data.name]} speed={50} cursor repeat={0} />
        </h1>

        {/* QUALIFICATION – LEFT → CENTER */}
        <motion.p
          key={`qualification-${lang}`}
          initial={{ x: -120, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-semibold text-muted-foreground
            text-xl sm:text-2xl md:text-3xl"
        >
          {data.qualifications}
        </motion.p>

        {/* DESIGNATION – RIGHT → CENTER */}
        <motion.p
          key={`designation-${lang}`}
          initial={{ x: 120, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-muted-foreground
            text-lg sm:text-xl md:text-2xl lg:text-4xl"
        >
          {data.designation}
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          key={`socials-${lang}`}
          variants={socialContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-4 justify-center pt-6"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const isLink = !!social.href;

            return (
              <motion.div
                key={social.label}
                variants={socialItem}
                className="flex"
              >
                {isLink ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => showAlert(social.message)}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center
              hover:bg-primary/20 hover:glow transition-all group"
                  >
                    <Icon className="w-7 h-7 lg:w-9 lg:h-9 group-hover:text-primary transition-colors" />
                  </a>
                ) : (
                  <button
                    onClick={social.onClick}
                    onMouseEnter={() => showAlert(social.message)}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center
              hover:bg-primary/20 hover:glow transition-all group"
                  >
                    <Icon className="w-7 h-7 lg:w-9 lg:h-9 group-hover:text-primary transition-colors" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* VIEW PROFILE BUTTON */}
        {!hasViewedProfile && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="pt-8"
          >
            <Button
              onClick={handleViewProfile}
              size="lg"
              className="glass-strong text-lg px-10 py-6 rounded-full
                hover:scale-105 transition-transform glow"
            >
              {data.buttons.viewProfile}
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* ALERT */}
      <RestrictedAlert
        show={alert.show}
        message={alert.message}
        onClose={() => setAlert({ show: false, message: "" })}
      />
    </section>
  );
};

export default Hero;
