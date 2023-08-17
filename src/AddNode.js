import React, { useState } from "react";

function Addnode({ data, parent, addNode }) {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState({
    single: false,
    condition: false,
  });
  const [inputValue, setInputValue] = useState({
    value1: "",
    value2: "",
  });
  const handleChange = (e) => {
    if (Number(e.target.value) === 0) {
      setOptions({ ...options, single: true });
    } else {
      setOptions({ ...options, condition: true });
    }
  };
  const handleAdd = () => {
    const len = Object.keys(data).length;
    let newChild = [];
    let newData = data[parent];
    newData.child = [...newData.child, String(len + 1)];
    const child = {
      id: len + 1,
      name: inputValue.value1,
      child: [],
      parentActionId: parent,
      actionId: len + 1,
    };
    newChild.push(child);
    if (options.condition) {
      newData.child = [...newData.child, String(len + 2)];
      const secondChild = {
        id: len + 2,
        name: inputValue.value2,
        child: [],
        parentActionId: parent,
        actionId: len + 2,
      };
      newChild.push(secondChild);
    }
    addNode(parent, newData, newChild);
    setInputValue({
      value1: "",
      value2: "",
    });
    handlCancel();
  };
  const handlCancel = () => {
    setOptions({
      single: false,
      condition: false,
    });
    setShow(false);
  };
  return !options.single && !options.condition ? (
    <div className="addnode">
      <button onClick={() => setShow(!show)} className="btn">
        Add
      </button>
      {show ? (
        <form>
          <input
            type="radio"
            id="age1"
            name="options"
            value={0}
            onChange={handleChange}
          />
          <label htmlFor="age1">Add List</label>
          <input
            type="radio"
            id="age2"
            name="options"
            value={1}
            onChange={handleChange}
          />
          <label htmlFor="age2">Add Condition</label>
        </form>
      ) : null}
    </div>
  ) : (
    <>
      <ul className="parent">
        <li className="child">
          <input
            className="node-title"
            value={inputValue.value1}
            onChange={(e) =>
              setInputValue({ ...inputValue, value1: e.target.value })
            }
          />
        </li>
        {options.condition && (
          <li className="child">
            <input
              className="node-title"
              value={inputValue.value2}
              onChange={(e) =>
                setInputValue({ ...inputValue, value2: e.target.value })
              }
            />
          </li>
        )}
      </ul>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
      <button className="btn" onClick={handlCancel}>
        Cancel
      </button>
    </>
  );
}

export default Addnode;
