import { useEffect, useState } from "react";
import { data } from "./realData";
import ChildNode from "./ChildNode";

function ParentNodes() {
  const [treeData, setTreeData] = useState([]);
  useEffect(() => {
    const parents = getUltimateParents(data);
    setTreeData(parents);
  }, []);

  return (
    <div className="tree-container">
      {treeData.map((node, i) => (
        <ChildNode node={node} data={data} key={node} isUltimateParent={true} />
      ))}
    </div>
  );
}

export default ParentNodes;
const getUltimateParents = (data) => {
  let newArray = [];
  for (const key in data) {
    if (data[key].parentActionId === null) {
      newArray.push(key);
    }
  }
  return newArray;
};
