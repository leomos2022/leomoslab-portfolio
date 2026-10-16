import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const ProjectDetails = ({
  title,
  subtitle,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
  titleColor = "text-white",
  subtitleColor = "text-sand",
}) => {
  const { t } = useTranslation();
  const hasProjectLink = Boolean(href);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 my-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 z-10 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
        />
        <div className="p-4 sm:p-5">
          <h5 className={`mb-1 text-xl sm:text-2xl font-bold ${titleColor}`}>{title}</h5>
          {subtitle && (
            <h6 className={`mb-2 text-lg sm:text-xl font-semibold ${subtitleColor}`}>{subtitle}</h6>
          )}
          <p className="mb-3 text-sm font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-2 text-sm font-normal text-neutral-400" key={index}>
              {subDesc}
            </p>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  title={tag.name}
                  className="flex items-center justify-center size-8 sm:size-10 rounded-lg bg-white/10 p-1.5 hover-animation"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            {hasProjectLink && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation"
              >
                {t("projects.viewProject")}
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
