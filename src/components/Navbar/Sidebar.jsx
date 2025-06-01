import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { TaskContext } from "../Context/TaskContext";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { state, setState } = useContext(TaskContext);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleShowCard = () => {
    if (!state.isFormOpen) {
      setState((prev) => ({
        ...prev,
        isFormOpen: true,
      }));
    }
    closeMenu();
  };

  return (
    <div className="side-box">
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="createTask" onClick={handleShowCard}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Create</span>
        </button>
        <div className="tasks">
          <Link
            to="/"
            onClick={() => {
              setState((prev) => ({ ...prev, active: "all" }));
              closeMenu();
            }}
          >
            <button
              className={`taskButton ${state.active === "all" ? "active" : ""}`}
            >
              All tasks
            </button>
          </Link>
          <Link
            to="/starred"
            onClick={() => {
              setState((prev) => ({ ...prev, active: "starred" }));
              closeMenu();
            }}
          >
            <button
              className={`taskButton ${
                state.active === "starred" ? "active" : ""
              }`}
            >
              Starred
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
