import HeroLeft from "@/components/sections/hero/heroLeft";
import HeroRight from "@/components/sections/hero/heroRight";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-8">
      <section className="hero sm:flex py-15">
        <HeroLeft />
        <HeroRight />
      </section>
    </div>
  )
}

export default HomePage
