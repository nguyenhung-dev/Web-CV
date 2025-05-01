import HeroLeft from "@/components/home-sections/hero/heroLeft";
import HeroRight from "@/components/home-sections/hero/heroRight";
import Intro from "@/components/home-sections/intro";
import Experience from "@/components/home-sections/experience";
import Skills from "@/components/home-sections/skill";
import Courses from "@/components/home-sections/courses";
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
      <Courses />
    </div>
  )
}

export default HomePage
