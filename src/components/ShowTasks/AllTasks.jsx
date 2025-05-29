import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const Tasks = () => {
  const { state, setState } = useContext(TaskContext);

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
      {(state.active === "all" ? state.tasks : state.starTasks).map((task) => (
        <div key={task.id} className="task">
          <div className="taskTools">
            <span>{task.dateCreated}</span>
            <span
              onClick={() => handleDelete(task.id)}
              className="deleteButton"
            >
              Delete
            </span>
            <span onClick={() => handleStar(task.id)}>Star</span>
          </div>
          <hr />
          <div className="taskData">
            <h4 className="taskTitle">{task.title}</h4>
            <p className="taskDescription">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
