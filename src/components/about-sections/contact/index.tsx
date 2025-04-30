import { useTranslation } from "react-i18next";
import SocicalMedia from "@/components/socical";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailAnimation from "@/animations/lottie/emailAnimation.lottie";

export const ContactAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center pt-15 mt-15 border-t border-[#007afd32]">
      <div className="left w-full sm:w-1/2">
        <h3 className="uppercase text-[35px] font-bold mb-10">{t('about.contact')}</h3>
        <SocicalMedia />
      </div>
      <div className="right w-full sm:w-1/2">
        <div>
          <DotLottieReact
            src={emailAnimation}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  )
}

export default ContactAbout;