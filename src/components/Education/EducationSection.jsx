import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import EducationDetailCard from "./EducationDetailCard";
import EducationModal from "./EducationModal";
import { useTranslation } from "react-i18next";
import { educationTranslations } from "../../constants/i18nConstants/educationTranslations.js";

const EducationSection = forwardRef((props, ref) => {
  const { i18n } = useTranslation();
  const [selectedEducation, setSelectedEducation] = useState(null);

  const educationData =
    educationTranslations[i18n.language]?.educationData ||
    educationTranslations.en.educationData;

  const gradients = [
    "bg-gradient-to-br from-pink-600 to-white",
    "bg-gradient-to-br from-blue-600 to-white",
    "bg-gradient-to-br from-green-600 to-white",
  ];

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-glow">
            {educationTranslations[i18n.language]?.title || educationTranslations.en.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EducationDetailCard
                degree={edu.degree}
                gradient={gradients[index % gradients.length]}
                delay={index * 0.1}
                onViewInfo={() => setSelectedEducation(edu)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEducation && (
        <EducationModal
          open={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          data={selectedEducation}
        />
      )}
    </section>
  );
});

export default EducationSection;
