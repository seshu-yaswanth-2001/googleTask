import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { TaskContext, TaskProvider } from "./components/Context/TaskContext";

import "./app.css";
import Nav from "./components/Navbar/Nav";
import Card from "./components/FormCard/Card";
import Pagination from "./components/Pagination/Pagination";
import BodyForm from "./components/FormCard/BodyForm/BodyForm";

const AppContent = () => {
  const { state } = useContext(TaskContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      !state.isFormOpen &&
      state.tasks.length > 0 &&
      location.pathname === "/unknown"
    ) {
      navigate("/");
    }
  }, [state.tasks.length, state.isFormOpen, location.pathname, navigate]);

  return (
    <>
      {/* <Nav /> */}
      {/* {state.isFormOpen ? (
        <Card />
      ) : state.tasks.length === 0 ? (
        <BodyForm />
      ) : state.active === "all" ? (
        <>
          <ShowAllTasks />
          {state.active === "all" && state.tasks.length > 0 && <Pagination />}
        </>
      ) : state.starTasks.length === 0 ? (
        <p className="noStarTasks">No Starred Tasks</p>
      ) : (
        <>
          <ShowStarTasks />
          {state.active === "starred" && state.starTasks.length > 0 && (
            <Pagination />
          )}
        </>
      )} */}
      <Nav />
      {state.isFormOpen && <Card />}
      {!state.isFormOpen &&
        (location.pathname === "/" && state.tasks.length === 0 ? (
          <BodyForm />
        ) : (
          <Outlet />
        ))}
      {!state.isFormOpen &&
        (state.active === "all" || state.active === "starred") &&
        (state.tasks.length > 0 || state.starTasks.length > 0) && (
          <Pagination />
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
