import { useTranslation } from "react-i18next";
import { FcReading } from "react-icons/fc";
import Tilt from 'react-parallax-tilt';
import avatar from "@/assets/images/avatar.jpg";

const Intro = () => {

  const { t } = useTranslation();

  return (
    <section className="introSection gap-10 md:gap-15 flex py-12 text-[var(--foreground)]">
      <div className="intro-left text-[19px]" data-aos="fade-up">
        <div className="main-title text-center sm:text-left text-2xl sm:text-3xl font-[600]">
          <div className="uppercase">
            <span className="text-[#ff2d96] mr-3">{t('introduce.about')}</span>
            <span>{t('introduce.myself')}</span>
          </div>
        </div>
        <div className="mt-7">
          <span>{t('introduce.heading1')}<FcReading size={22} className="inline ml-1" /></span>
        </div>
        <div className="mt-4">
          <span>{t('introduce.header3.1')}</span>
          <a href="https://www.javascripttutorial.net/" target="_blank" className="text-[#ff2d96] font-[500] italic"> JavaScript </a>
          <span>{t('introduce.header3.2')}</span>
          <a href="https://react.dev/" target="_blank" className="text-[#ff2d96] font-[500] italic"> ReactJS </a>
          <span>{t('introduce.header3.3')}</span>
          <span className="text-[#ff2d96] font-[500] italic"> {t('introduce.passion')} </span>
          <span>{t('introduce.header3.4')}</span>
        </div>
        <div className="mt-4">
          <span className="text-[#ff2d96] font-[500] italic">{t('introduce.heading4.1')}</span>
          <span>{t('introduce.heading4.2')}</span>
        </div>
      </div>
      <div className="intro-right my-auto relative hidden sm:block" data-aos="fade-left">
        <Tilt>
          <div className="intro-avt md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-[50%] mr-18 md:mr-24 border border-[#5c6aff] overflow-hidden">
            <img src={avatar} alt="Nguyên Hùng" />
          </div>
        </Tilt>
        <div className="absolute z-2 right-[-25px] md:right-0 top-[50%] translate-y-[-50%] rotate-90 ">
          <div className="relative">
            <span className="uppercase bg-[var(--bg-intro-right)] py-2 px-3 rounded-[5px] font-[500] text-[19px] tracking-[1px]">{t('header.about')}</span>
            <div className="absolute z-1 top-[50%] w-[50%] h-[7px] bg-[var(--bg-intro-right)] right-full translate-y-[-50%] "></div>
            <div className="absolute z-1 top-[50%] w-[50%] h-[7px] bg-[var(--bg-intro-right)] left-full translate-y-[-50%] "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;