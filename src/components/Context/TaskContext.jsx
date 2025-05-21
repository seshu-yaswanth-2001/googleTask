import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return {
      title: "",
      description: "",
      active: "all",
      tasks: storedTasks,
      countId: storedTasks.length
        ? storedTasks[storedTasks.length - 1].id + 1
        : 1,
      isFormOpen: false,
    };
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  useEffect(() => {
    console.log(state.tasks);
  }, [state.tasks]);

  return (
    <TaskContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
