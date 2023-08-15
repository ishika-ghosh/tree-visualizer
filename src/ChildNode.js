import React from "react";

function ChildNode({ node, data, isUltimateParent }) {
  const nodeData = data[node];
  return (
    <>
      <li className={isUltimateParent ? "child directChild" : "child"}>
        <p className="node-title">
          <span>{nodeData.name}</span>
        </p>

        {nodeData.child && nodeData.child.length ? (
          <ul className="parent">
            {nodeData.child.map((child) => (
              <ChildNode
                key={child}
                node={child}
                data={data}
                isUltimateParent={false}
              />
            ))}
          </ul>
        ) : (
          <button>Add</button>
        )}
      </li>
    </>
  );
}

export default ChildNode;
