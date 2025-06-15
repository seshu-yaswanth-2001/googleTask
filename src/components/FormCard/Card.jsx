import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { TaskContext } from "../Context/TaskContext";
import Form from "./Form/Form";

import "./card.css";

const Card = () => {
  const { state, setState } = useContext(TaskContext);

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
  useEffect(() => {
    const handlePress = (e) => {
      if (
        e.key === "Enter" &&
        state.title.trim().length > 0 &&
        state.description.trim().length > 0
      ) {
        handleSubmit();
      }
    };
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [state.title, state.description]);

  const handleback = () => {
    setState((prev) => ({
      ...prev,
      isFormOpen: false,
    }));
  };

  return (
    <div className="form">
      <span className="back" onClick={handleback}>
        <FontAwesomeIcon icon={faArrowLeft} /> back
      </span>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};
export default Card;
