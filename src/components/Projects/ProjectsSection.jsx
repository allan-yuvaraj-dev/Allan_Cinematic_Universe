import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { myProjects } from "../../constants/i18nConstants/projectTranslations.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader";
import DemoComputer from "../../components/DemoComputer";

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="products">
      <h2 className="text-5xl md:text-6xl font-bold text-glow text-center">
        {lang === "kn" ? "ನನ್ನ ಕೆಲಸಗಳು" : "My Works"}
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Side - Project Details */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.content[lang].title}
            </p>

            <p className="animatedText">{currentProject.content[lang].desc}</p>
            <p className="animatedText">
              {currentProject.content[lang].subdesc}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="tech-logo w-12 h-12 p-1 flex items-center justify-center"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white-800 transition-all duration-300"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>{lang === "kn" ? "ಲೈವ್ ಸೈಟ್ ಪರಿಶೀಲಿಸಿ" : "Check Live Site"}</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a> */}
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Canvas */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full glass ">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
