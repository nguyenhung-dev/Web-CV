import { Developer } from "@/types/type";
import "./style.css";

const HeroRight = () => {
  const developerData: Developer = {
    name: "Lê Nguyên Hùng",
    education: "Trường Cao đẳng FPT Polytechnic",
    position: "Front-end Developer",
    skills: ['HTML5', 'CSS3', 'ES6', 'TypeScript', 'ReactJS', 'PHP', 'MySQL'],
    hardWorker: true,
    quickLearner: true,
    availableForWork: true,
  };

  return (
    <div className="hero-right sm:w-1/2 relative">
      <div className="border-top absolute rounded-[50%] h-[3px] w-[98%] top-[20px] z-2 right-[50%] translate-x-[50%]" style={{ backgroundImage: 'var(--border-top-hero-right)' }}></div>
      <div className="code-body border rounded-[8px] border-[var(--border-hero)] z-1 w-full absolute right-0 top-[20px]"
        style={{ backgroundImage: 'var(--background-hero-right)' }}>
        <div className="code-body-control border-b border-[var(--border-hero)] px-7 py-4 flex gap-2" >
          <div className="circle circle-first"></div>
          <div className="circle circle-second"></div>
          <div className="circle circle-third"></div>
        </div>
        <div className="code-body-content font-mono text-[16px] px-7 my-5 font-[400] text-[var(--foreground)]">
          <div>
            <span className="text-pink-600 font-bold">const</span>
            <span className="ml-2 ">developer</span>
            <span className="ml-2 text-pink-600">=</span>
            <span className="ml-2">{`{`}</span>
          </div>

          <div>
            {Object.entries(developerData).map(([key, value], index) => (
              <div className="ml-6" key={index}>
                <span>{key}:</span>
                {Array.isArray(value) ? (
                  <>
                    <span className="text-[#bd21b8] ml-2">[</span>
                    {value.map((item, idx) => (
                      <span key={idx} className="text-[#bd21b8]">
                        '{item}'
                        {idx !== value.length - 1 && <span className="text-[#bd21b8]">, </span>}
                      </span>
                    ))}
                    <span className="text-[#bd21b8]">],</span>
                  </>
                ) : typeof value === 'boolean' ? (
                  <span className="ml-2 text-red-400">{`${value},`}</span>
                ) : (
                  <span className="ml-2 text-yellow-600">'{value}',</span>
                )}
              </div>
            ))}
          </div>

          <div className="ml-6">
            <span className="text-blue-700 mr-2">readyToWork:</span><span>{`() => {`}</span>
            <div className="ml-6">
              <span className="text-red-400">return</span><span>{` (`}</span>
            </div>
            <div className="ml-6">
              <div className="ml-6">
                <span className="text-emerald-500">{`this.`}</span><span>hardWorker</span><span className="text-emerald-500"> && </span>
              </div>
              <div className="ml-6">
                <span className="text-emerald-500">{`this.`}</span><span>quickLearner</span><span className="text-emerald-500"> && </span>
              </div>
              <div className="ml-6">
                <span className="text-emerald-500">{`this.`}</span><span>skills.lenght</span><span className="text-emerald-500">{` >= `}</span> <span className="text-red-400">5</span>
              </div>
            </div>
          </div>

          <div>
            <span className="ml-12">{`);`}</span><br />
            <span className="ml-6">{`};`}</span><br />
            <span>{`};`}</span>
          </div>

        </div>
      </div>
    </div >
  )
}

export default HeroRight;
