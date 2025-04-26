import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

type TProps = {
  facebook?: string;
  github?: string;
  gmail?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  cvUrl?: string;
}

const SocicalMedia = (props: TProps) => {
  const { facebook, github, gmail } = props;
  return (
    <div className="my-4 flex items-center gap-7">
      <a href={facebook} target="_blank" title="Facebook Nguyên Hùng">
        <FaFacebook size={35} color="var(--icon)" />
      </a>
      <a href={github} target="_blank" title="Github Nguyên Hùng">
        <FaGithub size={35} color="var(--icon)" />
      </a>
      <a href={gmail} target="_blank" title="ng.hung01.it@gmail.com">
        <MdOutgoingMail size={35} color="var(--icon)" />
      </a>
    </div>
  )
}

export default SocicalMedia
