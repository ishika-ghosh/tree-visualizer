import React from "react";
import AddNode from "./AddNode";

function ChildNode({ node, data, isUltimateParent, addNode }) {
  const nodeData = data[node];
  return (
    <>
      <li className={isUltimateParent ? "child directChild" : "child"}>
        <p className="node-title">
          <span>{nodeData?.name}</span>
        </p>

        {nodeData?.child && nodeData?.child.length ? (
          <ul className="parent">
            {nodeData?.child.map((child) => (
              <ChildNode
                key={child}
                node={child}
                data={data}
                isUltimateParent={false}
                addNode={addNode}
              />
            ))}
          </ul>
        ) : (
          <AddNode data={data} parent={node} addNode={addNode} />
        )}
      </li>
    </>
  );
}

export default ChildNode;
