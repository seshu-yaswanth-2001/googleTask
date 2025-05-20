import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./Form.css";
import addTask from "../../../assets/addTask.svg";
import Form from "../Form/Form";
import { TaskContext } from "../../Context/TaskContext";

const BodyForm = () => {
  const { isFormOpen, setIsFormOpen } = useContext(TaskContext);

  const createTask = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <div className="bigScreensForm">
        <button className="taskButton" onClick={createTask}>
          <FontAwesomeIcon className="icon" icon={faCircleCheck} />
          Add a task
        </button>
        <div className="imageWrapper">
          <img className="taskImg" src={addTask} alt="taskImg" />
          <p className="taskText">Add a task and be productive</p>
        </div>
      </div>
      <div className="smallScreensForm">
        <button className="taskButton">
          <FontAwesomeIcon className="icon" icon={faCircleCheck} />
          Add a Task
        </button>
        <div className="imageWrapper" onClick={createTask}>
          <img className="taskImg" src={addTask} alt="taskImg" />
          <p className="taskText">Add a task and be productive</p>
        </div>
      </div>
    </>
  );
};

export default BodyForm;
