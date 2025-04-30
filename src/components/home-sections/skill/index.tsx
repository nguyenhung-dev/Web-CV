import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import SkillCard from "@/components/skill-card";
import { SKILLS_DATA } from "@/data/data";
import { skillsImage } from "@/lib/skillsImage";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills mt-10 sm:mt-0 text-[var(--foreground)]">
      <h2 className="text-2xl sm:text-4xl font-[600] text-center mb-5 sm:mb-12">{t('skill.title')}</h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
        className="h-[150px] sm:h-[190px] cursor-pointer" >
        {SKILLS_DATA.map((skill, index) => (
          <div className="skill-item mx-2 sm:mx-4" key={index}>
            <SkillCard name={skill} logo={skillsImage(skill)} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default Skills;