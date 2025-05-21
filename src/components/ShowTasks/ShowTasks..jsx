import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

import "./showTask.css";

const ShowTasks = () => {
  const { state, setState } = useContext(TaskContext);
  return (
    <div className="showTasks">
      <div className="task">
        <div className="taskTools">
          <span>16/09/2024</span>
          <span>Delete</span>
        </div>
        <div className="taskData">
          <h4 className="taskTitle">title</h4>
          <p className="taskDescription">
            When you clear your cache and cookies, your browser might sign you
            out of your Google Account. To make sure you can sign back in,
            update your recovery phone number and email address.
          </p>
        </div>
      </div>
      <div className="task">
        <div className="taskTools">
          <span>16/09/2024</span>
          <span>Delete</span>
        </div>
        <div className="taskData">
          <h4 className="taskTitle">title</h4>
          <p className="taskDescription">
            When you clear your cache and cookies, your browser might sign you
            out of your Google Account. To make sure you can sign back in,
            update your recovery phone number and email address.
          </p>
        </div>
      </div>
      <div className="task">
        <div className="taskTools">
          <span>16/09/2024</span>
          <span>Delete</span>
        </div>
        <div className="taskData">
          <h4 className="taskTitle">title</h4>
          <p className="taskDescription">
            When you clear your cache and cookies, your browser might sign you
            out of your Google Account. To make sure you can sign back in,
            update your recovery phone number and email address.
          </p>
        </div>
      </div>
      <div className="task">
        <div className="taskTools">
          <span>16/09/2024</span>
          <span>Delete</span>
        </div>
        <div className="taskData">
          <h4 className="taskTitle">title</h4>
          <p className="taskDescription">
            When you clear your cache and cookies, your browser might sign you
            out of your Google Account. To make sure you can sign back in,
            update your recovery phone number and email address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
