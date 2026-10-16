import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("contact.errorNameRequired");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errorEmailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errorEmailInvalid");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("contact.errorMessageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.errorMessageMin");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      showAlertMessage("success", t("contact.success"));
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", t("contact.error"));
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing scroll-mt-24">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">{t("contact.title")}</h2>
          <p className="font-normal text-neutral-400">{t("contact.desc")}</p>
        </div>
        <form className="w-full" onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              {t("contact.name")} *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`field-input field-input-focus ${errors.name ? "border-red-500 focus-visible:ring-red-500/20" : ""}`}
              placeholder={t("contact.placeholderName")}
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              {t("contact.email")} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`field-input field-input-focus ${errors.email ? "border-red-500 focus-visible:ring-red-500/20" : ""}`}
              placeholder={t("contact.placeholderEmail")}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          {/* Mensaje */}
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              {t("contact.message")} *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`field-input field-input-focus ${errors.message ? "border-red-500 focus-visible:ring-red-500/20" : ""}`}
              placeholder={t("contact.placeholderMessage")}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          {/* Botón */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal hover-animation ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
