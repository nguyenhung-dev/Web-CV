import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import playSoccerAnimation from "@/animations/lottie/playSoccer.lottie";
import { FaCheck } from "react-icons/fa";

const HobbiesAbout = () => {
  const { t } = useTranslation();

  const hobbiesData: string[] = ["Football", "Badminton", "Volleyball", "Jogging", "Game mobile"]

  return (
    <div className="py-8 my-8 flex flex-col md:flex-row gap-10">
      <div className="left w-full md:w-1/2 text-left md:text-right px-6 md:px-0">
        <div className="text-[22px] font-[500] text-[#fc5bab] mb-8">
          {t('about.paragraph5')}
        </div>
        <div>
          <ul className="list-none">
            {
              hobbiesData.map((hobby, index) => {
                return (
                  <li key={index} className="flex items-center mb-3 text-[21px] gap-4 justify-end flex-row-reverse md:flex-row">
                    {hobby}
                    <FaCheck size={13} color="#fff" className="bg-[#00ab69] w-[26px] h-[26px] rounded-[50%]" />
                  </li>
                )
              }
              )}
          </ul>
        </div>

      </div>
      <div className="right w-full md:w-1/2">
        <DotLottieReact src={playSoccerAnimation}
          loop
          autoplay />
      </div>
    </div>
  )
}

export default HobbiesAbout;