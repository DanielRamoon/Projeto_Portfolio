import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../../styles/components/SocialNetWorks.sass";

const socialNetwork = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "gitHub", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetWorks = () => {
  return (
    <section id="social-network">
      {socialNetwork.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetWorks;
