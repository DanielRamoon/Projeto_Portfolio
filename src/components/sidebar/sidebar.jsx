import SocialNetWorks from "../socialNetWorks/SocialNetWorks";
import InformationContainer from "../informaticion/InformationContainer";
import Avatar from "../img/foto.jpeg";

import "../../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="foto" />
      <p className="title">Desenvolvedor Front End</p>
      <SocialNetWorks />
      <InformationContainer />
      <a href="" className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
