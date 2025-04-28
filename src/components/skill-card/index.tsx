import "./style.css";

type TProps = {
  logo?: string;
  name: string;
}

const SkillCard = (props: TProps) => {
  const { logo, name } = props;

  return (
    <div className="skill-card flex flex-col justify-center items-center gap-3 h-[100px] w-[120px] sm:h-[130px] sm:w-[150px] rounded-[7px] ">
      <div className="skill-logo">
        <img
          src={logo}
          alt={name}
          className="w-[33px] h-[33px] sm:w-[40px] sm:h-[40px] "
        />
      </div>
      <div className="skill-name font-[500] text-[16px] sm:text-[18px]">{name}</div>
    </div>
  );
}

export default SkillCard;