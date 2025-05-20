import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Card from "../FormCard/Card";
import { TaskContext } from "../Context/TaskContext";
import "./sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { active, setActive, isFormOpen, setIsFormOpen } =
    useContext(TaskContext);
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
    if (!isFormOpen) {
      setIsFormOpen(true);
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
          <button
            className={`taskButton ${active === "all" ? "active" : ""}`}
            onClick={() => {
              setActive("all");
              closeMenu();
            }}
          >
            All tasks
          </button>
          <button
            className={`taskButton ${active === "starred" ? "active" : ""}`}
            onClick={() => {
              setActive("starred");
              closeMenu();
            }}
          >
            Starred
          </button>
          <button
            className={`taskButton ${active === "delete" ? "active" : ""}`}
            onClick={() => {
              setActive("delete");
              closeMenu();
            }}
          >
            Deleted
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
