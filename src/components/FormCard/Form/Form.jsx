import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Form = ({ handleSubmit }) => {
  const { state, setState } = useContext(TaskContext);
  return (
    <>
      <input
        className="titleInput"
        type="text"
        placeholder="title"
        value={state.title}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />
      <textarea
        className="description"
        rows="2"
        placeholder="description"
        value={state.description}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
      ></textarea>
      <button className="addTask" onClick={handleSubmit}>
        Add Task
      </button>
    </>
  );
};

export default Form;
