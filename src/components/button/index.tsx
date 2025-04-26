import "./style.css";

type TProps = {
  text?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const CustomButton = (props: TProps) => {
  const { text, icon, style, className, onClick } = props;
  return (
    <button onClick={onClick} style={style} className={`custom-button ${className}`}>
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  )
}

export default CustomButton
