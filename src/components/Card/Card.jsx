import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const Card = ({ onClose }) => {
  const { inputTask, setInputTask } = useContext(TaskContext);
  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="title"
        value={inputTask.title}
        onChange={(e) => setInputTask({ ...inputTask, title: e.target.value })}
      />
      <textarea
        rows="2"
        placeholder="description"
        value={inputTask.description}
        onChange={(e) =>
          setInputTask({ ...inputTask, description: e.target.value })
        }
      ></textarea>
    </div>
  );
};
export default Card;
