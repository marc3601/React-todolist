import "./App.css";
import "./utilities/BtnMain/BtnMain";
import "./utilities/BtnSec/BtnSec";
import TopSection from "./layout/TopSection/TopSection";
import MiddleSection from "./layout/MiddleSection/MiddleSection";
function App() {
  return (
    <div className="main__container">
      <div className="container">
        <TopSection />
        <MiddleSection />
      </div>
    </div>
  );
}

export default App;
