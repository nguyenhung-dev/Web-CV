import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import educationAnimate from "@/animations/lottie/animation1.lottie";
import CustomCard from "@/components/main-card";
import { FaGraduationCap } from "react-icons/fa6";

const EducationAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="my-8 py-8 flex flex-col md:flex-row" >
      <div className="hidden md:block left w-full sm:w-1/2">
        <DotLottieReact
          src={educationAnimate}
          loop
          autoplay
        />
      </div>
      <div className="right w-full md:w-1/2">
        <div className="text-[30px] font-[600] text-center text-[#fc5bab] mb-6 md:mb-10">{t('about.education')}</div>
        <div className="edu-card">
          <CustomCard>
            <div className="time text-center text-[#fc5bab] font-[500] mb-5">2023 - 2025</div>
            <div className="flex gap-4 sm:gap-6 items-center px-1 md:px-3">
              <FaGraduationCap size={60} color="#8b5cf6" />
              <div className="uppercase">
                <div className="font-[600] text-[19px] md:text-[23px]">{t('about.major')}</div>
                <div className="name font-[600] text-[16px] md:text-[20px] mt-[10px]">{t('about.educationName')}</div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  )
}

export default EducationAbout;