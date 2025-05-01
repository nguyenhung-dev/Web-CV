import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import expAnimation from "@/animations/lottie/expAnimation.lottie";
import CustomExpCard from "@/components/exp-card";
import { EXPRIENCE_DATA } from "@/data/data";
import "./style.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience text-[var(--foreground)] my-4 sm:my-20 py-10 sm:py-13 border-t border-[var(--border-top-exp)]">
      <h2 className="text-center font-[600] text-2xl sm:text-3xl mb-5">{t('exp.experiences')}</h2>
      <div className="px-4 md:px-15 sm:text-[20px] text-center text-base/6 mb-4 md:mb-12" data-aos="zoom-in-left">
        <span>{t('exp.exp-title')}</span>
        <span className="text-pink-500 font-[600] italic">{t('exp.exp-programming')}</span>
      </div>
      <div className="flex flex-col md:flex-row min-h-[500px]">
        <div className="exp-left w-full md:w-1/2">
          <div className="w-[100%] mx-auto h-full relative min-h-[230px] sm:min-h-[600px]" data-aos="zoom-in"
            data-aos-delay="800">
            <DotLottieReact
              src={expAnimation}
              loop
              autoplay
              className="exp-icon absolute bottom-[50%] sm:bottom-[55%] translate-y-[45%] left-[50%] translate-x-[-50%] w-[160%] z-2"
            />
            <div className="circle-rotate absolute bottom-[45%] sm:bottom-[50%] translate-y-[100%] md:translate-y-[100%] left-[50%] translate-x-[-50%] flex justify-center z-1 w-[55%] aspect-[1] overflow-hidden m-auto">
              <div className="w-full h-full rounded-full custom-border"></div>
            </div>
          </div>
        </div>
        <div className="exp-right w-full mt-20 sm:mt-4 md:w-1/2">
          <div className="flex flex-col gap-5">
            {EXPRIENCE_DATA.map((item, index) => {
              return (
                <CustomExpCard
                  key={Math.random()}
                  time={item.time}
                  title={item.title}
                  platform={item.platform}
                  desc={item.desc}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;