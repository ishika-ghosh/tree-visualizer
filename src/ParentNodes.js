import { useEffect, useState } from "react";
import { data } from "./realData";
import ChildNode from "./ChildNode";

function ParentNodes() {
  const [treeData, setTreeData] = useState([]);
  const [realData, setRealData] = useState(data);
  const handleAddNode = (parent, newData, newChild) => {
    let dataNew = { ...realData };
    dataNew[parent] = newData;
    let len = Object.keys(realData).length;
    newChild.forEach((element, i) => {
      dataNew[len + i + 1] = element;
    });
    setRealData(dataNew);
  };
  useEffect(() => {
    const parents = getUltimateParents(realData);
    setTreeData(parents);
  }, [realData]);
  return (
    <div className="tree-container">
      {treeData.map((node, i) => (
        <ChildNode
          node={node}
          data={realData}
          key={node}
          isUltimateParent={true}
          addNode={handleAddNode}
        />
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
