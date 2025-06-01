import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

import { TaskContext } from "../Context/TaskContext";
import "./allTasks.css";

const Tasks = () => {
  const { state, setState } = useContext(TaskContext);

  const lastIndex = state.currentPage * state.taskPerPage;
  const firstIndex = lastIndex - state.taskPerPage;
  const currentTasks = state.tasks.slice(firstIndex, lastIndex);
  const currentTasksStar = state.starTasks.slice(firstIndex, lastIndex);

  const handleDelete = (id) => {
    const updateTasks = state.tasks.filter((task) => task.id !== id);
    const starTasks = state.starTasks.filter((task) => task.id !== id);
    setState((prev) => ({
      ...prev,
      tasks: updateTasks,
      starTasks: starTasks,
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

  return (
    <div className="showTasks">
      {(state.active === "all" ? currentTasks : currentTasksStar).map(
        (task) => (
          <div key={task.id} className="task">
            <div className="taskTools">
              <span className="date">{task.dateCreated}</span>
              <div className="tools">
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
              <h4 className="taskTitle">{task.title}</h4>
              <p className="taskDescription">{task.description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Tasks;
