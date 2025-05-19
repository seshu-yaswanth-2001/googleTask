import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Form = ({ handleSubmit }) => {
  const { inputTask, setInputTask } = useContext(TaskContext);
  return (
    <>
      <input
        className="titleInput"
        type="text"
        placeholder="title"
        value={inputTask.title}
        onChange={(e) => setInputTask({ ...inputTask, title: e.target.value })}
      />
      <textarea
        className="description"
        rows="2"
        placeholder="description"
        value={inputTask.description}
        onChange={(e) =>
          setInputTask({ ...inputTask, description: e.target.value })
        }
      ></textarea>
      <button className="addTask" onClick={handleSubmit}>
        Add Task
      </button>
    </>
  );
};

export default Form;
