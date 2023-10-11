import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/main/mainConyent";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portifolio">
      <h1>Daniel Ramon</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
