import "./style.css";

type TProps = {
  text?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  downloadFile?: string;
}

const CustomButton = (props: TProps) => {
  const { text, icon, style, className, onClick, downloadFile } = props;

  const handleDownload = () => {
    if (downloadFile) {
      const link = document.createElement('a');
      link.href = downloadFile;
      link.download = "Le_Nguyen_Hung_CV_Frontend_Intern.pdf";
      link.click();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleDownload} style={style} className={`custom-button ${className}`}>
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  )
}

export default CustomButton
