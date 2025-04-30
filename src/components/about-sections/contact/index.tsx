import { useTranslation } from "react-i18next";
import SocicalMedia from "@/components/socical";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailAnimation from "@/animations/lottie/emailAnimation.lottie";

export const ContactAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 sm:flex-row items-center pt-15 mt-15 border-t border-[#007afd32]">
      <div className="left w-full sm:w-1/2">
        <h3 className="uppercase text-center sm:text-left text-[35px] font-bold mb-2 sm:mb-10">{t('about.contact')}</h3>
        <div className="flex justify-center sm:justify-start">
          <SocicalMedia />
        </div>
      </div>
      <div className="right w-full sm:w-1/2">
        <a href="mailto:ng.hung01.it@gmail.com" title="ng.hung01.it@gmail.com">
          <DotLottieReact
            src={emailAnimation}
            loop
            autoplay
          />
        </a>
      </div>
    </div>
  )
}

export default ContactAbout;