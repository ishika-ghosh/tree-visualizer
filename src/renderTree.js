export const renderTree = (data, root, visited) => {
  let rootData = data[root];
  console.log(rootData);
  console.log(visited[rootData.id]);
  visited[root] = true;
  return (
    <>
      <p className="node">{rootData.name}</p>
      {rootData.child_ID && rootData.child_ID.length ? (
        <ul>
          {rootData.child_ID.map(
            (child) =>
              !visited[child] && (
                <li key={child}>{renderTree(data, child, visited)}</li>
              )
          )}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
