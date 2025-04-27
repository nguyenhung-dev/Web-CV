import HeroLeft from "@/components/sections/hero/heroLeft";
import HeroRight from "@/components/sections/hero/heroRight";
import Intro from "@/components/sections/intro";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skill";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-8">
      <section className="heroSection sm:flex py-15">
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
