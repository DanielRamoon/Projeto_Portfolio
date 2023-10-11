import AboutContent from "../About/AboutContent";
import TecnoligiesContent from "../Tecnologies/TecnoligiesContent";
import ProjectsContent from "../Projects/ProjectsContent";

import "../../styles/components/mainContent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContent />
      <TecnoligiesContent />
      <ProjectsContent />
    </main>
  );
};

export default MainContent;
