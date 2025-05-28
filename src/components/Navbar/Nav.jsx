import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "./Sidebar";
import Menu from "./Menu";
import "./nav.css";
import { TaskContext } from "../Context/TaskContext";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, setState } = useContext(TaskContext);

  const handleShowCard = () => {
    if (!state.isFormOpen) {
      setState((prev) => ({
        ...prev,
        isFormOpen: true,
      }));
    }
  };

  return (
    <>
      <nav className="navbar">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

        {state.tasks.length > 0 && (
          <button className="createTask" onClick={handleShowCard}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Create</span>
          </button>
        )}
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default Nav;
