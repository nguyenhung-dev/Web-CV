import { TExpCard } from "@/types/type";
import { useTranslation } from "react-i18next";
import "./style.css";

const CustomExpCard = (props: TExpCard) => {
  const { time, title, platform, desc, ...rest } = props;
  const { t } = useTranslation();
  let platformText = "";
  if (platform && platform.length > 0) {
    platformText = platform.length > 1 ? platform.join(", ") : platform[0];
  }

  return (
    <div className="exp-card relative border py-5 px-10 rounded-[15px] text-[var(--foreground)]" {...rest}>
      <div className="text-center mb-3 flex flex-col">
        <span className="text-xl font-[500] text-pink-600">{title}</span>
        <span className="text-[16px]">{time}</span>
      </div>
      <div className="gap-5 items-center">
        <div className="mb-1">
          <span className="text-[#fa9348] font-[500]">{t('exp.platforms')}</span>
          <span className="ml-2">{platformText}</span>
        </div>
        <div>
          <span className="text-[#fa9348] font-[500]">{t('exp.desc')}</span>
          <span className="ml-2">{desc}</span>
        </div>
      </div>
    </div>
  );
}

export default CustomExpCard;