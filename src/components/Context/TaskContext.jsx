import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const storedStartTasks = JSON.parse(
      localStorage.getItem("starTasks") || "[]"
    );
    return {
      title: "",
      description: "",
      active: "all",
      tasks: storedTasks,
      countId: storedTasks.length
        ? storedTasks[storedTasks.length - 1].id + 1
        : 1,
      isFormOpen: false,
      starTasks: storedStartTasks,
    };
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  useEffect(() => {
    localStorage.setItem("starTasks", JSON.stringify(state.starTasks));
  }, [state.starTasks]);

  useEffect(() => {
    console.log(state.starTasks);
  }, [state.starTasks]);

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
