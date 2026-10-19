import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const { t } = useTranslation();
  const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing scroll-mt-24">
      <h2 className="text-heading">{t("about.title")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">{t("about.grid1Name")}</p>
            <p className="subtext">{t("about.grid1Desc")}</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              {t("about.grid2Text")}
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "20%" }} text="Design Patterns" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "30%", left: "0%" }} text="Design Principles" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t("about.grid3Title")}</p>
            <p className="subtext">{t("about.grid3Desc")}</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">{t("about.grid4CTA")}</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t("about.grid5Title")}</p>
            <p className="subtext">{t("about.grid5Desc")}</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 6 — TiraFactos */}
        <a
          href="https://tirafactos.co"
          target="_blank"
          rel="noopener noreferrer"
          className="grid-6 group bg-gradient-to-br from-[#4a1010] via-[#230a0a] to-[#0d0303] rounded-2xl"
        >
          <img
            src="assets/tirafactos/sello.png"
            alt="Sello de TiraFactos"
            className="absolute -right-6 -top-6 w-28 md:w-52 opacity-90 rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105 pointer-events-none"
          />
          <div className="z-10 w-[62%] md:w-[70%]">
            <p className="headtext">{t("about.grid6Title")}</p>
            <p className="subtext">{t("about.grid6Desc")}</p>
            <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#f5e6c8] hover-animation">
              tirafactos.co
              <img src="assets/arrow-up.svg" className="size-4" alt="" />
            </span>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-[#7a1616]/60" />
        </a>

      </div>
    </section>
  );
};

export default About;
