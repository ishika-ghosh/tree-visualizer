import React from "react";

function ChildNode({ node, data, isUltimateParent }) {
  const nodeData = data[node];

  return (
    <>
      <li className={isUltimateParent ? "child directChild" : "child"}>
        <p className="node-title">
          <span>{nodeData.name}</span>
        </p>

        {nodeData.child_ID && nodeData.child_ID.length ? (
          <ul className="parent">
            {nodeData.child_ID.map((child) => (
              <ChildNode
                key={child}
                node={child}
                data={data}
                isUltimateParent={false}
              />
            ))}
          </ul>
        ) : null}
      </li>
    </>
  );
}

export default ChildNode;
