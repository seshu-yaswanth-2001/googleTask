import { useContext } from "react";
import { TaskContext, TaskProvider } from "./components/Context/TaskContext";

import "./app.css";
import Nav from "./components/Navbar/Nav";
import BodyForm from "./components/FormCard/BodyForm/BodyForm";
import Card from "./components/FormCard/Card";
import ShowAllTasks from "./components/ShowTasks/ShowAllTasks";
import ShowStarTasks from "./components/ShowTasks/ShowStarTasks";

const AppContent = () => {
  const { state } = useContext(TaskContext);
  return (
    <>
      <Nav />
      {state.isFormOpen ? (
        <Card />
      ) : state.tasks.length === 0 ? (
        <BodyForm />
      ) : state.active === "all" ? (
        <ShowAllTasks />
      ) : (
        <ShowStarTasks />
      )}
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </div>
  );
};

export default App;
