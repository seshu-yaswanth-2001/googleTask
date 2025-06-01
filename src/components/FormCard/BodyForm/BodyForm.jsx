import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./form.css";
import addTask from "../../../assets/addTask.svg";
import { TaskContext } from "../../Context/TaskContext";

const BodyForm = () => {
  const { setState } = useContext(TaskContext);

  const createTask = () => {
    setState((prev) => ({
      ...prev,
      isFormOpen: true,
    }));
  };

  return (
    <>
      <div className="bigScreensForm">
        <button className="bodyTaskButton" onClick={createTask}>
          <FontAwesomeIcon className="icon" icon={faCircleCheck} />
          Add a task
        </button>
        <div className="imageWrapper">
          <img className="taskImg" src={addTask} alt="taskImg" />
          <p className="taskText">Add a task and be productive</p>
        </div>
      </div>
    </>
  );
};

export default BodyForm;
