import { useContext } from "react";
import { TaskContext, TaskProvider } from "./components/Context/TaskContext";

import "./app.css";
import Nav from "./components/Navbar/Nav";
import BodyForm from "./components/FormCard/BodyForm/BodyForm";
import Card from "./components/FormCard/Card";

const AppContent = () => {
  const { isFormOpen } = useContext(TaskContext);
  return (
    <>
      <Nav />
      {!isFormOpen && <BodyForm />}
      {isFormOpen && <Card />}
    </>
  );
};

const App = () => {
  return (
    <div>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </div>
  );
};

export default App;
