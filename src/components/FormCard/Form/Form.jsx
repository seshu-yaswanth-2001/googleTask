import { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Form = ({ handleSubmit }) => {
  const { state, setState } = useContext(TaskContext);
  const [error, setError] = useState({
    title: "",
    desc: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { title: "", desc: "" };

    if (!state.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    if (!state.description.trim()) {
      newErrors.desc = "Description is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleDescChange = (e) => {
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      handleSubmit();
    }
  };

  return (
    <>
      <input
        className={`titleInput ${error.title ? "error" : ""}`}
        type="text"
        placeholder="title"
        value={state.title}
        onChange={handleTitleChange}
      />
      {error.title && <small className="error-text">{error.title}</small>}

      <textarea
        className={`description ${error.desc ? "error" : ""}`}
        rows="2"
        placeholder="description"
        value={state.description}
        onChange={handleDescChange}
      ></textarea>
      {error.desc && <small className="error-text">{error.desc}</small>}

      <button className="addTask" onClick={handleFormSubmit}>
        Add Task
      </button>
    </>
  );
};

export default Form;
