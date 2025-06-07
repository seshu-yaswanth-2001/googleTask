import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faStar,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";

import { TaskContext } from "../Context/TaskContext";
import "./allTasks.css";

const Tasks = () => {
  const { state, setState } = useContext(TaskContext);

  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });

  const lastIndex = state.currentPage * state.taskPerPage;
  const firstIndex = lastIndex - state.taskPerPage;
  const currentTasks = state.tasks.slice(firstIndex, lastIndex);
  const currentTasksStar = state.starTasks.slice(firstIndex, lastIndex);

  const handleDelete = (id) => {
    const updateTasks = state.tasks.filter((task) => task.id !== id);
    const starTasks = state.starTasks.filter((task) => task.id !== id);

    const totalPages = Math.ceil(updateTasks.length / state.taskPerPage);
    const currentPage =
      state.currentPage > totalPages ? totalPages : state.currentPage;

    setState((prev) => ({
      ...prev,
      tasks: updateTasks,
      starTasks: starTasks,
      currentPage: currentPage || 1,
    }));
  };

  const handleStar = (id) => {
    const toStarTask = state.tasks.find((task) => task.id === id);
    const removeStarTask = state.starTasks.some((task) => task.id === id);

    setState((prev) => ({
      ...prev,
      starTasks: removeStarTask
        ? prev.starTasks.filter((task) => task.id !== id)
        : [...prev.starTasks, toStarTask],
    }));
  };

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditForm({ title: task.title, description: task.description });
  };

  const handleSaveEdit = (id) => {
    const updatedTasks = state.tasks.map((task) =>
      task.id === id
        ? { ...task, title: editForm.title, description: editForm.description }
        : task
    );
    const updatedStarTasks = state.starTasks.map((task) =>
      task.id === id
        ? { ...task, title: editForm.title, description: editForm.description }
        : task
    );

    setState((prev) => ({
      ...prev,
      tasks: updatedTasks,
      starTasks: updatedStarTasks,
    }));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditForm({ title: "", description: "" });
  };

  const handleCheck = (id) => {
    const updatedTasks = state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    const updatedStarTasks = state.starTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setState((prev) => ({
      ...prev,
      tasks: updatedTasks,
      starTasks: updatedStarTasks,
    }));
  };

  return (
    <div className="showTasks">
      {(state.active === "all" ? currentTasks : currentTasksStar).map(
        (task) => (
          <div key={task.id} className="task">
            <div className="taskTools">
              <span className="date">{task.dateCreated}</span>
              <div className="tools">
                <span className="pencil" onClick={() => handleEdit(task)}>
                  <FontAwesomeIcon icon={faPenSquare} />
                </span>
                <span
                  onClick={() => handleDelete(task.id)}
                  className="deleteButton"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span
                  className={`star ${
                    state.starTasks.some((t) => t.id === task.id)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleStar(task.id)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
            <hr />
            <div className="taskData">
              {editingTask === task.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                    className="edit-title"
                  />
                  <textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm({ ...editForm, description: e.target.value })
                    }
                    className="edit-description"
                  />
                  <div className="edit-buttons">
                    <button onClick={() => handleSaveEdit(task.id)}>
                      Save
                    </button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={task.completed ? "taskCompleted" : "deactive"}
                    onClick={() => handleCheck(task.id)}
                  >
                    <h4 className="taskTitle">{task.title}</h4>
                    <p className="taskDescription">{task.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Tasks;
