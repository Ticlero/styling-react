import "./App.css";
import CSSModule from "./CSSModule/CSSModule";
import SassComponent from "./SassComponent/SassComponent";
import StyledComponent from "./StyledComponent/StyledComponent";

function App() {
  return (
    <div className="App">
      <SassComponent />
      <CSSModule />
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
