import { TbTargetArrow } from "react-icons/tb";

type TProps = {
  content: string;
}

const TargetABout = (props: TProps) => {
  const { content } = props;
  return (
    <div
      className="relative drop-shadow-xl mt-10 w-full h-[260px] sm:h-[180px] overflow-hidden rounded-xl bg-[#5c5c5cb0]"
    >
      <div
        className="absolute flex items-center justify-center z-[1] opacity-90 rounded-xl inset-0.5 bg-[var(--bg-target)]"
      >
        <span className='px-2 sm:px-8 py-2 sm:py-6 text-[18px] md:text-[20px]'>
          {content}
          <TbTargetArrow size={22} color='rgb(255 152 0)' className='inline' /></span>
      </div>
      <div className="absolute w-full h-[260px] sm:h-[180px] bg-[var(--target-glow-effect)] blur-[50px] -left-1/2 -top-1/2"></div>
    </div>
  )
}

export default TargetABout;