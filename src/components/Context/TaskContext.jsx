import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [inputTask, setInputTask] = useState({
    title: "",
    description: "",
  });
  const [active, setActive] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [countId, setCountId] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        inputTask,
        setInputTask,
        active,
        setActive,
        tasks,
        setTasks,
        countId,
        setCountId,
        isFormOpen,
        setIsFormOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
