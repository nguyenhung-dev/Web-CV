import { TProjectCard } from "@/types/type.ts";
import { useTranslation } from "react-i18next";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { toast } from 'react-toastify';
import "./style.css";

const ProjectCard = (props: TProjectCard) => {
  const { imageUrl, title, tech, desc, githubUrl, demoUrl } = props;
  const { t } = useTranslation();
  const notify = () => toast("Demo chưa có sẵn!");

  return (
    <>
      <div className="project-card pb-5 flex flex-col justify-between rounded-[10px] overflow-hidden">
        <div className="card-img mb-3">
          <img src={imageUrl} alt={title} className="w-full h-[220px] object-cover" />
        </div>
        <div className="card-content px-5 flex-1">
          <h3 className="text-2xl font-[500] text-[var(--text-main)]">{title}</h3>
          <div>
            <div className="flex gap-2 text-amber-500 my-2 font-[500]">
              <span>{t('projectPage.tech')}</span>
              <div>
                {tech?.map((item: string, index: number) => {
                  return <span key={index}>{(index + 1 == tech.length ? item : `${item}, `)}</span>
                })}
              </div>
            </div>
            <p className="text-justify text-base/7">{desc}</p>
          </div>
        </div>
        <div className="card-btn flex items-center gap-3 px-5 mt-5">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={20} /> Github
            </a>
          ) : (
            <a onClick={notify} rel="noopener noreferrer">
              <IoLogoGithub size={20} /> Github
            </a>
          )}
          {demoUrl ? (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <CgWebsite size={20} /> Demo
            </a>
          ) : (
            <a onClick={notify} rel="noopener noreferrer">
              <CgWebsite size={20} /> Demo
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectCard;