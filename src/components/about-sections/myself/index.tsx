import { useTranslation } from "react-i18next";
import avtImg from "@/assets/images/avatar.jpg";

const MyselfAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="my-8 py-8 flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-15">
      <div className="left flex-1">
        <h2 className="text-3xl text-center font-[500] text-[var(--about-heading)]">{t('about.heading1')}</h2>
        <div className="mt-5 sm:mt-10 text-base/7 ">
          <div className="mb-5">
            <span>{t('about.paragraph1')}</span>
            <span className="text-[#fc5bab] font-[500] ">{t('header.author')}</span>
            <span>{t('about.paragraph2')}</span>
          </div>
          <div className="mb-5">
            <span>{t('about.paragraph3')}</span>
            <span className="text-[#fc5bab] font-[500] italic">{t('about.major')}.</span>
          </div>
          <div className="">
            {t('about.paragraph4')}
          </div>
        </div>
      </div>
      <div className="right py-5 flex justify-center items-center">
        <div className="card-client">
          <div className="card-img flex justify-center">
            <img src={avtImg} alt="Nguyên Hùng" className="object-cover w-[250px] h-[250px] rounded-[50%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyselfAbout;