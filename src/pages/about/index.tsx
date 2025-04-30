import { useTranslation } from 'react-i18next';
import TargetABout from '@/components/about-sections/target';
import MyselfAbout from '@/components/about-sections/myself';
import HobbiesAbout from '@/components/about-sections/hobbies';
import EducationAbout from '@/components/about-sections/education';
import ContactAbout from '@/components/about-sections/contact';
import "./style.css";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 text-[var(--foreground)]">
      <TargetABout content={`"${t('about.target')}"`} />
      <MyselfAbout />
      <EducationAbout />
      <HobbiesAbout />
      <ContactAbout />
    </div>
  )
}

export default AboutPage
