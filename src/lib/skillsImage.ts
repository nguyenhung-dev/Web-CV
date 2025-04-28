import html5 from "@/assets/svg/skills/html5.svg";
import css3 from "@/assets/svg/skills/css3.svg";
import javascript from "@/assets/svg/skills/javascript.svg";
import react from "@/assets/svg/skills/react.svg";
import typescript from "@/assets/svg/skills/typescript.svg";
import tailwind from "@/assets/svg/skills/tailwindcss.svg";
import git from "@/assets/svg/skills/git.svg";
import github from "@/assets/svg/skills/github.svg";
import bootstrap from "@/assets/svg/skills/bootstrap.svg";
import laravel from "@/assets/svg/skills/laravel.svg";
import php from "@/assets/svg/skills/php.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import vite from "@/assets/svg/skills/vite.svg";
import vue from "@/assets/svg/skills/vuedotjs.svg";

export const skillsImage = (skill:string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html5': return html5;
    case 'css3': return css3;
    case 'javascript': return javascript;
    case 'react': return react;
    case 'typescript': return typescript;
    case 'tailwind': return tailwind;
    case 'git': return git;
    case 'github': return github;
    case 'bootstrap': return bootstrap;
    case 'laravel': return laravel;
    case 'php': return php;
    case 'mysql': return mysql;
    case 'vite': return vite;
    case 'vue': return vue;
  }
}