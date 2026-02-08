import { useState, useRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import RestrictedAlert from "../RestrictedAlert.jsx";
import Arrow from "/assets/arrow-up.png";

import { contactTranslations } from "../../constants/i18nConstants/contactTranslations.js";

const Contact = forwardRef((props, ref) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const labels = contactTranslations[lang] || contactTranslations.en;

  const FormRef = useRef();
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
    setAlertMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_FOLLOWUP_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Er.Allan Yuvaraj",
          to_email: "yuvarajallan@gmail.com",
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setLoading(false);
      showAlert(labels.success);

      setTimeout(() => {
        hideAlert();
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error("Email sending error:", error);
      showAlert(labels.error);
    }
  };

  return (
    <section className="c-space my-20" id="contact" ref={ref}>
      {alertVisible && (
        <RestrictedAlert
          show={alertVisible}
          message={alertMessage}
          onClose={hideAlert}
        />
      )}

      <div className="relative py-20 flex items-center justify-center flex-col min-h-screen px-4 sm:px-6 -mt-20 lg:mt-0">
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 shadow-[0_0_60px_-10px_rgba(56,189,248,0.6)]">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-3 flex items-center gap-2 border-b border-gray-600/50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Content */}
          <div className="p-6 bg-gray-900/95 backdrop-blur-sm">
            <h3 className="head-text mt-2 text-white text-3xl sm:text-4xl font-bold text-center">
              {labels.title}
            </h3>

            <p className="text-base sm:text-lg text-white-600 mt-3 text-center">
              {labels.description}
            </p>

            <form
              ref={FormRef}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">{labels.fullName}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder={labels.namePlaceholder}
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">{labels.email}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder={labels.emailPlaceholder}
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">{labels.message}</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder={labels.messagePlaceholder}
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? labels.sending : labels.send}
                <img
                  src={Arrow}
                  alt="arrow-up"
                  className="field-btn_arrow w-4 h-4 object-contain brightness-100"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
