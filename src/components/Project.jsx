
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
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview && setPreview(image)}
        onMouseLeave={() => setPreview && setPreview(null)}
      >
        <div>
          <p className={`text-heading ${titleColor}`}>{title}</p>
          {subtitle && (
            <p className={`text-heading ${subtitleColor} mt-1`}>{subtitle}</p>
          )}
          <div className="flex gap-5 mt-2 text-white">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          {t("projects.readMore")}
          <img src="assets/arrow-right.svg" className="w-5" />
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
