import { useEffect, useState } from "react";
import { data } from "./data";
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
  const childKeys = new Set();
  for (const key in data) {
    const children = data[key].child_ID;
    children.forEach((element) => {
      childKeys.add(element);
    });
  }
  const newArray = [];
  for (const key in data) {
    if (!childKeys.has(Number(key))) {
      newArray.push(Number(key));
    }
  }
  return newArray;
};
