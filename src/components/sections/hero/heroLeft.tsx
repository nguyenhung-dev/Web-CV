import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter'
import TypewriterEffect from '@/components/typewriter/Typewriter';
import { APP_DATA } from '@/data/data';
import SocicalMedia from '@/components/socical';
import CustomButton from '@/components/button';
import { AiFillFire } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import "./style.css"

const HeroLeft = () => {
  const { t } = useTranslation();
  const data = ['Hello world!', 'Welcome to my CV site!', 'Let’s build something amazing.'];

  return (
    <div className="hero-left sm:w-1/2">
      <h2 className='text-2xl sm:text-3xl font-medium mb-2 sm:mb-3'>
        <span className='text-[var(--foreground)]'>
          {t('hero.greeting')} !
        </span>
        <span className="wave ml-2">
          👋🏻
        </span>
      </h2>
      <h2 className='text-[25px] sm:text-[33px] mb-2 sm:mb-4'>
        <span className='font-medium text-[var(--foreground)]'>{t('hero.iAm')}</span>
        <span className='ml-[15px] text-[var(--text-main)] font-bold'>{t('header.author')}</span>
      </h2>
      <div className='text-[22px] text-[var(--text-content)] font-medium'>
        <TypewriterEffect data={data} />
      </div>
      <div className='mt-8 sm:mt-15'>
        <SocicalMedia
          facebook={APP_DATA.FACEBOOK_URL}
          github={APP_DATA.GITHUB_URL}
          gmail={APP_DATA.GMAIL_URL} />
      </div>
      <div className='flex gap-7 mt-10 sm:mt-15'>
        <div className='hidden sm:block'>
          <CustomButton text={t('button.experience')} icon={<AiFillFire color='#ff5959' />} style={{
            color: "var(--text-btn)"
          }} />
        </div>
        <div className='mx-auto sm:mx-0'>
          <CustomButton text={t('button.dowload')} icon={<IoMdDownload color='#fff' />} style={{
            backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
            border: "none"
          }} />
        </div>
      </div>
    </div>
  )
}

export default HeroLeft
