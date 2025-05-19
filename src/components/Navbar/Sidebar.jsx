import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";
import { TaskContext } from "../Context/TaskContext";
import "./sidebar.css";

const Sidebar = ({
  isOpen,
  setIsOpen,
  showCard,
  setShowCard,
  inputTask,
  setInputTask,
}) => {
  const { active, setActive } = useContext(TaskContext);
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
    setShowCard(!showCard);
    closeMenu();
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="addTask" onClick={handleShowCard}>
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
      {showCard && (
        <Card
          onClose={handleShowCard}
          inputTask={inputTask}
          setInputTask={setInputTask}
        />
      )}
    </>
  );
};

export default Sidebar;
