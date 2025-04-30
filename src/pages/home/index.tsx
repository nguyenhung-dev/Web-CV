import HeroLeft from "@/components/sections/hero/heroLeft";
import HeroRight from "@/components/sections/hero/heroRight";
import Intro from "@/components/sections/intro";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skill";
import bgImg from "@/assets/svg/section.svg";
import "./style.css";

const HomePage = () => {

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 overflow-hidden">
      <section className="heroSection sm:flex py-6 sm:py-15" style={{
        backgroundImage: `url(${bgImg})`,
      }}>
        <HeroLeft />
        <HeroRight />
      </section>
      <Intro />
      <Experience />
      <Skills />
    </div>
  )
}

export default HomePage
