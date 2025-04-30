import { TAppData } from "@/types/type";
import w3layout from "@/assets/images/w3layout_clone.png";
import vietnamtravel from "@/assets/images/vietnam_travel.png";
import petshop from "@/assets/images/petshop.png";
import news247 from "@/assets/images/news247.png";
import portfolio from "@/assets/images/portfolio.png";

export const APP_DATA: TAppData = {
  FACEBOOK_URL: "https://www.facebook.com/nguyen.hung.223991",
  GITHUB_URL: "https://github.com/nguyenhung-dev",
  GMAIL_URL: "mailto:ng.hung01.it@gmail.com",
  INSTAGRAM_URL: "https://www.threads.com/@lenguyenhungnakroth"
 }

export const SKILLS_DATA: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind",
  "Git",
  "GitHub",
  "Bootstrap",
  "Laravel",
  "PHP",
  "MySQL",
  "Vite",
  "Vue"
]

export const EXPRIENCE_DATA = [
  {
    time: '10/2023 - 1/2024',
    title: 'Học cơ bản về lập trình',
    platform: ['Youtube', 'Udemy'],
    desc: 'Học các kỹ năng cơ bản về lập trình với C++, C#'
  },
  {
    time: '3/2024 - 5/2024',
    title: 'Học lập trình Web Front-end',
    platform: ['F8-FullStack'],
    desc: 'Phát triển ứng dụng Web bằng HTML5, CSS3 và JavaScript ES6'
  },
  {
    time: '8/2024 - 12/2024',
    title: 'Học lập trình Web Back-end',
    platform: ['Youtube', 'Udemy'],
    desc: 'Phát triển ứng dụng Web bằng VueJS, PHP và MySQL, xây dựng các chức năng động cho website.'
  },
  {
    time: '2/2025 - 4/2025',
    title: 'Học lập trình Web Front-end (ReactJS + TypeScript)',
    platform: ['Youtube', 'F8-FullStack'],
    desc: 'Phát triển ứng dụng Web hiện đại bằng ReactJS, TypeScript và TailwindCSS.'
  }
];

export const PROJECT_DATA = [
  {
    imageUrl: petshop,
    title: "Shop Thú Cưng",
    tech: ["JavaScript", "PHP", "MySQL"],
    desc: "Nền tảng thương mại điện tử xây dựng bằng PHP và MySQL, không sử dụng API bên thứ ba, với các tính năng quản lý sản phẩm, giỏ hàng, đặt hàng, đăng ký/đăng nhập người dùng và quản lý quản trị cơ bản.",
    githubUrl: "https://github.com/nguyenhung-dev/petshop.git",
  },
  {
    imageUrl: vietnamtravel,
    title:"VietNam Travel",
    tech:["VueJS", "PHP", "MySQL"],
    desc:"Một trang web thương mại điện tử với giao diện Vue.js, backend PHP và cơ sở dữ liệu MySQL. Các API PHP tùy chỉnh giúp giao tiếp giữa máy khách và máy chủ. Dự án có thiết kế hiện đại, phản hồi nhanh và hấp dẫn.",
    githubUrl: "https://github.com/nguyenhung-dev/VietNamTravel.git",
    demoUrl: "https://vietnam-travel.pages.dev/"
  },
  {
    imageUrl: w3layout,
    title:"W3layout Clone",
    tech:["HTML5", "CSS3", "JavaScript ES6"],
    desc:"Một website tĩnh được clone lại từ W3Layouts, sử dụng thuần HTML5, CSS3 và JavaScript ES6. Giao diện được thiết kế hoàn toàn responsive, hiển thị tốt trên nhiều thiết bị và kích thước màn hình.",
    githubUrl: "https://github.com/nguyenhung-dev/Clone-W3Layout.git",
    demoUrl: "https://clone-w3layout.pages.dev/"
  },
  {
    imageUrl: news247,
    title:"Trang tin tức",
    tech:["PHP(Laravel)", "MySQL"],
    desc:"Website tin tức được phát triển bằng Laravel Blade và MySQL, hỗ trợ chức năng đăng tải bài viết, phân loại theo chuyên mục, tìm kiếm tin tức, quản lý bài viết qua trang quản trị. Giao diện chuẩn responsive, tối ưu trải nghiệm người dùng.",
    githubUrl: "https://github.com/nguyenhung-dev/news247.git",
  } , 
  {
    imageUrl: portfolio,
    title:"Portfolio",
    tech:["ReactJS", "TypeScript", "TailwindCSS"],
    desc:"Một trang web portfolio cá nhân được xây dựng bằng ReactJS, TypeScript và TailwindCSS, hỗ trợ hai ngôn ngữ Tiếng Việt và Tiếng Anh, giao diện đẹp mắt, có chế độ Dark Mode và tương thích tốt trên mọi thiết bị.",
    // githubUrl: "https://github.com/nguyenhung-dev/Web-CV.git",
    demoUrl: "https://web-cv-7yd.pages.dev/",
  }
]