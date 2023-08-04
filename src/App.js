import "./App.css";
import { data } from "./data";
import { renderTree } from "./renderTree";

function App() {
  var visited = Array(Object.keys(data).length + 1).fill(false);
  return (
    <div className="tree">
      <ul>
        {Object.keys(data).map((key) =>
          !visited[key] ? (
            <li key={key}>{renderTree(data, key, visited)}</li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default App;
