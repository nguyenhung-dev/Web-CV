import { useTranslation } from "react-i18next";
import expIcon from "@/assets/images/exp-icon.png";
import CustomExpCard from "@/components/exp-card";
import { EXPRIENCE_DATA } from "@/data/data";
import "./style.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience text-[var(--foreground)] my-4 sm:my-20 py-10 sm:py-13 border-t border-[var(--border-top-exp)]">
      <h2 className="text-center font-[600] text-2xl sm:text-3xl mb-6">{t('exp.experiences')}</h2>
      <div className="px-4 md:px-15 sm:text-[20px] text-center text-base/8 mb-2 md:mb-12" data-aos="zoom-in-left">
        <span>{t('exp.exp-title')}</span>
        <span className="text-pink-500 font-[600] italic">{t('exp.exp-programming')}</span>
      </div>
      <div className="flex flex-col md:flex-row min-h-[500px]">
        <div className="exp-left w-full md:w-1/2">
          <div className="w-[60%] mx-auto h-full relative min-h-[230px] sm:min-h-[600px]">
            <img src={expIcon} alt="experience" className="exp-icon absolute bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] w-[90%] md:w-full z-2" />
            <div className="circle-rotate absolute bottom-[45%] translate-y-[100%] md:translate-y-[100%] left-[50%] translate-x-[-40%] flex justify-center z-1 w-[65%] md:w-[70%] aspect-[1] overflow-hidden m-auto">
              <div className="w-full h-full rounded-full custom-border"></div>
            </div>
          </div>
        </div>
        <div className="exp-right w-full mt-12 sm:mt-4 md:w-1/2">
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
                  data-aos-delay={index * 300}
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