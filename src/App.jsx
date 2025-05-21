import { useContext } from "react";
import { TaskContext, TaskProvider } from "./components/Context/TaskContext";

import "./app.css";
import Nav from "./components/Navbar/Nav";
import BodyForm from "./components/FormCard/BodyForm/BodyForm";
import Card from "./components/FormCard/Card";
import ShowTasks from "./components/ShowTasks/ShowTasks.";

const AppContent = () => {
  const { state, setState } = useContext(TaskContext);
  return (
    <>
      <Nav />
      {state.isFormOpen ? (
        <Card />
      ) : state.tasks.length === 0 ? (
        <BodyForm />
      ) : (
        <ShowTasks />
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
