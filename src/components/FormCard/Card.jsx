import { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import Form from "./Form/Form";

import "./card.css";

const Card = () => {
  const {
    inputTask,
    setInputTask,
    tasks,
    setTasks,
    countId,
    setCountId,
    setIsFormOpen,
  } = useContext(TaskContext);

  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === "Enter" && inputTask.title && inputTask.description) {
        handleSubmit();
      }
    };
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [inputTask]);

  const handleSubmit = () => {
    if (inputTask.title && inputTask.description) {
      const date = new Date(Date.now());
      const newTask = {
        id: countId,
        dateCreated: `${date.getFullYear()}/${String(
          date.getMonth() + 1
        ).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`,
        ...inputTask,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputTask({ title: "", description: "" });
      setCountId(countId + 1);
      setIsFormOpen(false);
    }
  };
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="form">
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};
export default Card;
