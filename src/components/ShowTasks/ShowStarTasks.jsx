import { useContext } from "react";
import Tasks from "./AllTasks";
import { TaskContext } from "../Context/TaskContext";

const ShowStarTasks = () => {
  const { state } = useContext(TaskContext);

  return (
    <>
      {state.starTasks.length === 0 ? (
        <p className="noStarTasks">No Starred Tasks</p>
      ) : (
        <Tasks />
      )}
    </>
  );
};

export default ShowStarTasks;
