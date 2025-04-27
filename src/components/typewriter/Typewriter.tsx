import { useState, useEffect } from "react";

type TProps = {
  data: string[];
}

const TypewriterEffect = (props: TProps) => {
  const { data } = props;

  const [textIndex, setTextIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const typingSpeed: number = 200;
  const deletingSpeed: number = 50;
  const pauseTime: number = 1000;
  const [fixedHeight, setFixedHeight] = useState<number | null>(null);

  useEffect(() => {
    if (fixedHeight === null) {
      setFixedHeight(document.getElementById("text-container")?.clientHeight || 0);
    }

    const currentString: string = data[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < currentString.length) {
        timer = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <div id="text-container" style={{ minHeight: fixedHeight || "auto" }}>
      <h1>{currentText} <span className="cursor">|</span></h1>
      <style>
        {`
          .cursor {
            animation: blink 0.7s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default TypewriterEffect;