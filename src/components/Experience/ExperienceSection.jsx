import { forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@/Components/ui/card";
import { experienceTranslations } from "../../constants/i18nConstants/experienceTranslations.js";

const ExperienceSection = forwardRef((props, ref) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const experienceData =
    experienceTranslations[lang] || experienceTranslations.en;

  const { professionalExperience } = experienceData;

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const renderExperienceCards = (data) => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 hidden md:block"></div>

      <div className="space-y-12">
        {data.map((exp, index) => {
          const isEven = index % 2 === 0;
          const aosDirection = isEven ? "fade-right" : "fade-left";

          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                isEven ? "md:justify-end" : "md:justify-start"
              }`}
              data-aos={aosDirection}
            >
              <Card
                className={`
                  w-full md:w-[45%] p-6 
                  bg-card/80 backdrop-blur-sm
                  border-2 border-sky-500/30
                  shadow-xl shadow-sky-500/10
                  hover:shadow-2xl hover:shadow-sky-500/20
                  hover:border-sky-500/50
                  transition-all duration-300
                  hover:-translate-y-1
                  ${isEven ? "md:mr-[5%]" : "md:ml-[5%]"}
                `}
              >
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-sky-500/20">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden  ">
                    <img
                      src={exp.companyId}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-2 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.position}
                  </h3>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-semibold text-sky-500">
                    {exp.duration}
                  </p>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                  <p className="text-lg text-muted-foreground">
                    {exp.location}
                  </p>
                  <p className="text-base text-muted-foreground mt-2">
                    {exp.summary}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow">
            {lang === "kn" ? "ವೃತ್ತಿಪರ ಅನುಭವ" : "Professional Experience"}
          </h2>
        </div>

        <div>{renderExperienceCards(professionalExperience)}</div>
      </div>
    </section>
  );
});

export default ExperienceSection;
