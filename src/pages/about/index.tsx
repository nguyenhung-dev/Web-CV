import { useTranslation } from 'react-i18next';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailAnimation from "@/animations/lottie/emailAnimation.lottie";
import TargetABout from '@/components/about-sections/target';
import MyselfAbout from '@/components/about-sections/myself';
import HobbiesAbout from '@/components/about-sections/hobbies';
import EducationAbout from '@/components/about-sections/education';
import "./style.css";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 text-[var(--foreground)]">
      <TargetABout content={`"${t('about.target')}"`} />
      <MyselfAbout />
      <EducationAbout />
      <HobbiesAbout />

      <div>
        <DotLottieReact
          src={emailAnimation}
          loop
          autoplay
        />
      </div>
    </div>
  )
}

export default AboutPage
