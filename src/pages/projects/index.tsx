import { useTranslation } from "react-i18next";
import { PROJECT_DATA } from "@/data/data.ts";
import ProjectCard from "@/components/project-card";
import { ToastContainer } from 'react-toastify';

const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-8 overflow-hidden text-[var(--foreground)]">
      <section className="mt-15">
        <div className="text-center">
          <h1 className="text-3xl text-[var(--logo)] font-[600] mb-3">{t('projectPage.title')}</h1>
          <span className="inline-block w-[750px] text-[19px] opacity-75 font-[400]">{t('projectPage.subtitle')}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 pb-10">
          {
            PROJECT_DATA.map((item, index) => (
              <ProjectCard
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                tech={item.tech}
                desc={item.desc}
                githubUrl={item.githubUrl}
                demoUrl={item.demoUrl}
              />
            ))
          }
        </div>
      </section>
      <ToastContainer autoClose={5000} pauseOnHover={false} />
    </div>
  )
}

export default ProjectPage
