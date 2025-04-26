import { RouteObject } from "react-router-dom"
import { HomePage, AboutPage, ProjectPage, NotFound } from "@/pages"
import MainLayout from "@/layouts/MainLayout"

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'project', element: <ProjectPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
