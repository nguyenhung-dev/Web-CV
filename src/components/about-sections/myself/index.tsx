import { useTranslation } from "react-i18next";
import avtImg from "@/assets/images/avatar.jpg";
import "./style.css";

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
          <div className="mb-5">
            {t('about.paragraph4')}
          </div>
          <div>
            {t('about.paragraph4.1')}
          </div>
        </div>
      </div>
      <div className="right mt-7 sm:mt-0 card-main mx-10 sm:mx-0 py-5 flex justify-center items-center bg-[#2cb593] rounded-[10px] px-3 sm:px-10">
        <div className="card-client flex flex-col gap-5 items-center">
          <div className="card-img relative overflow-hidden rounded-[50%]">
            <img src={avtImg} alt="Nguyên Hùng" className="object-cover w-[180px] h-[180px] rounded-[50%]" />
            <div className="card-main-effect"></div>
          </div>
          <div className="card-info text-center border-t px-3 pt-3 text-white">
            <div className="text-[23px] font-[700] uppercase ">Lê Nguyên Hùng</div>
            <div className="text-[21px] font-[600]">Front-end Intern</div>
            <div className="text-[18px] mt-2">07/06/2001</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyselfAbout;