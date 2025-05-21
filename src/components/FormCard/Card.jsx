import { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import Form from "./Form/Form";

import "./card.css";

const Card = () => {
  const { state, setState } = useContext(TaskContext);

  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === "Enter" && state.title && state.description) {
        handleSubmit();
      }
    };
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [state.title, state.description]);

  const handleSubmit = () => {
    if (state.title && state.description) {
      const newId = state.countId;
      const date = new Date(Date.now());
      const newTask = {
        id: newId,
        dateCreated: `${date.getFullYear()}/${String(
          date.getMonth() + 1
        ).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`,
        title: state.title,
        description: state.description,
      };
      setState((prev) => ({
        ...prev,
        tasks: [...prev.tasks, newTask],
        title: "",
        description: "",
        countId: prev.countId + 1,
        isFormOpen: false,
      }));
    }
  };

  return (
    <div className="form">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};
export default Card;
