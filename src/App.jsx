import "./App.css";
import PrintComponent from "./PrintComponent";
import randText from "./data";
function App() {
  return (
    <>
      <PrintComponent>{randText}</PrintComponent>
    </>
  );
}

export default App;
