import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/jay-paneliya-50b744222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
        target="_blank"
      />
      <SingleContactSocial
        link="https://github.com/JayPaneliya2207"
        Icon={FiGithub}
        target="_blank"
      />
      <SingleContactSocial
        link="https://www.instagram.com/paneliya__jay?igsh=MW8wM2piMjY0eTE1Mg=="
        Icon={FaInstagram}
        target="_blank"
      />
    </div>
  );
};

export default ContactSocial;