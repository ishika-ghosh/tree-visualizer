import "./App.css";
import ParentNodes from "./ParentNodes";

function App() {
  return (
    <div className="tree">
      <h1 className="header"> Tree visualization</h1>
      <ParentNodes />
    </div>
  );
}

export default App;
