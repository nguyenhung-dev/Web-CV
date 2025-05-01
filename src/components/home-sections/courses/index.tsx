import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t } = useTranslation();

  return (
    <section className="text-[var(--foreground)] my-4 sm:my-24 py-15 border-t border-[var(--border-top-exp)]">
      <div className="text-center">
        <h2 className="text-2xl mb-4 sm:text-3xl font-[600]">{t('courses.title')}</h2>
        <div className="sm:text-[20px] max-w-[800px] text-base/6 m-auto">
          {t('courses.subtitle')}
        </div>
      </div>
    </section>
  )
}

export default Courses;