import { APP_DATA } from "@/data/data";
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocicalMedia = () => {
  return (
    <div className="my-4 flex items-center gap-5">
      <a href={APP_DATA.FACEBOOK_URL} target="_blank" title="Facebook Nguyên Hùng">
        <FaFacebook size={35} color="var(--icon)" />
      </a>
      <a href={APP_DATA.GITHUB_URL} target="_blank" title="Github Nguyên Hùng">
        <FaGithub size={35} color="var(--icon)" />
      </a>
      <a href={APP_DATA.GMAIL_URL} target="_blank" title="ng.hung01.it@gmail.com">
        <MdOutgoingMail size={35} color="var(--icon)" />
      </a>
      <a href={APP_DATA.INSTAGRAM_URL} target="_blank" title="ng.hung01.it@gmail.com">
        <FaInstagram size={35} color="var(--icon)" />
      </a>
    </div>
  )
}

export default SocicalMedia
