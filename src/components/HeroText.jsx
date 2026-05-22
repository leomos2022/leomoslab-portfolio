import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const HeroText = () => {
    const { t, i18n } = useTranslation();
        const words=[t("hero.secure"), t("hero.modern"), t("hero.scalable")];
        const variants = {
                hidden: { opacity:0, x: -50 },
                visible: { opacity: 1, x: 0},
        };
    return (
    <div className="z-10 mt-20
    text-center md:mt-40 md:text-left
    rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
            >
                {t("hero.title")}
            </motion.h1>
            {/* Subtítulo: español mejorado, inglés original en dos líneas */}
            {i18n.language === 'es' ? (
                <motion.p className="text-2xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                >
                    {t("hero.subtitle1")}
                </motion.p>
            ) : (
                <motion.p className="text-2xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                >
                    {t("hero.subtitle1")}<br />{t("hero.subtitle2")}
                </motion.p>
            )}
            <div className="flex flex-col items-start">
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}
                >
                    <FlipWords 
                        words={words} 
                        className="font-black text-white text-8xl" />
                </motion.div>
                {i18n.language === 'es' ? (
                  <motion.p className="text-4xl font-medium text-neutral-300"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.8 }}
                  >
                      Soluciones web<br />seguras y eficientes
                  </motion.p>
                ) : (
                  <motion.p className="text-4xl font-medium text-neutral-300"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1.8 }}
                  >
                      {t("hero.websolutions")}
                  </motion.p>
                )}
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex- flex-col space-y-6 md:hidden">
            <motion.p className="text-4xl font-medium">{t("hero.title")}</motion.p>
            <div>
                <motion.p className="text-5xl font-black text-neutral-300">{t("hero.mobile1")}</motion.p>
                <motion.div>
                <FlipWords
                 words={words} 
                className="font-bold text-white text-7xl"
                />
                </motion.div>
                <motion.p className="text-4xl font-black text-neutral-300 ">Web Applications</motion.p>
            </div>

        </div>
    </div>
  );
};

export default HeroText
