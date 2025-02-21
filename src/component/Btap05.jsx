import React, { useState } from "react";
import "./cssChung.css";

function Btap05() {
  const [tasks, setTasks] = useState([`Cong viec 1`, `Cong viec 2`]);
  const [newTask, setNewTask] = useState(``);

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleThem() {
    if (newTask.trim() != ``) {
      setTasks((t) => [...t, newTask]);
      setNewTask(``);
    }
  }
  function RemoveTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>To-do App</h1>
      <input
        placeholder="Nhập công việc"
        type="text"
        name=""
        value={newTask}
        id="input_bai5"
        onChange={handleChange}
      />

      <button onClick={handleThem} id="tinhtoanbtn">
        Thêm
      </button>

      <div>
        <ol>
          {tasks.map((e, i) => (
            <li key={i}>
              <span>{e}</span>
              <button onClick={() => RemoveTask(i)} id="btn_bai5">
                🗑️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Btap05;
