import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import loadingAnimation from "@/animations/lottie/reactLoading.lottie";

type TLoadingProps = {
  onFinish?: () => void;
}

const Loading = ({ onFinish }: TLoadingProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish?.();
      }, 1000);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-[#0d1224] flex justify-center items-center w-screen h-screen transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <DotLottieReact
        src={loadingAnimation}
        loop
        autoplay
        className='w-[300px]'
      />
    </div>
  );
};

export default Loading;
