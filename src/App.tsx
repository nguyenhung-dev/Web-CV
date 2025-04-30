import { useRoutes } from 'react-router-dom'
import { useEffect } from "react";
import routes from './routes/routes'
import AOS from "aos";
import { FaJetFighterUp } from "react-icons/fa6";
import "aos/dist/aos.css";

function App() {
  const element = useRoutes(routes)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div style={{ backgroundImage: "var(--background)" }}>
        {element}
      </div >
      <div
        onClick={handleScrollToTop}
        className='scroll-top fixed z-[9999] bottom-[20px] right-[20px] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'
        style={{
          background: "var(--text-main)",
          color: "var(--dropdown-icon)",
        }}>
        <div className="icon-fly">
          <FaJetFighterUp size={20} />
        </div>
      </div>
    </>
  )
}

export default App
