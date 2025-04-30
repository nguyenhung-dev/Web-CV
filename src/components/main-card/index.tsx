import "./style.css";

type TProps = {
  children: React.ReactNode;
}

const CustomCard = (props: TProps) => {
  const { children } = props;

  return (
    <div className="main-card">
      <div className="bg py-3 px-5 flex flex-col justify-center">{children}</div>
      <div className="blob"></div>
    </div >
  )
}

export default CustomCard;