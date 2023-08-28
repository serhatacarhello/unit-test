import React, { useState } from "react";

export default function Todo() {
  const defaultItems = [
    {
      name: "Travel Poland",
      completed: false,
    },
    {
      name: "Learn Typescript",
      completed: false,
    },
    {
      name: "Learn React-Redux",
      completed: true,
    },

    {
      name: "Learn Phyton",
      completed: false,
    },
  ];

  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    if (text.trim() !== "") {
      setItems((prevItems) => [...prevItems, { name: text, completed: false }]);
      setText("");
    }
  };

  return (
    <div>
      <h1>Todos List</h1>
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item.completed ? <s>{item.name}</s> : item.name}</li>
          ))}
        </ul>
      </div>
      <div className="add-todo">
        <label htmlFor="todo">Enter a new todo</label>
        <input
          id="todo"
          name="todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Learn unit-test..."
        />
        <button id="add-button" className="addBtn" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}
