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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
