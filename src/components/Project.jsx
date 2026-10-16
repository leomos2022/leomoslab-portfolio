import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  subtitle,
  description,
  subDescription,
  href,
  image,
  tags = [],
  setPreview,
  titleColor = "text-white",
  subtitleColor = "text-sand",
}) => {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        onMouseEnter={() => setPreview && setPreview(image)}
        onMouseLeave={() => setPreview && setPreview(null)}
      >
        <div className="flex-1 min-w-0">
          <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${titleColor} leading-snug`}>
            {title}
          </p>
          {subtitle && (
            <p className={`text-lg sm:text-xl md:text-2xl font-bold ${subtitleColor} mt-1 leading-snug`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag.id} className="text-xs text-neutral-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-sm cursor-pointer hover-animation shrink-0 self-start sm:self-center"
        >
          {t("projects.readMore")}
          <img src="assets/arrow-right.svg" className="w-4" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          subtitle={subtitle}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          titleColor={titleColor}
          subtitleColor={subtitleColor}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
