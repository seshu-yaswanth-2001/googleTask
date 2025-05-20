import { useState } from "react";

import Sidebar from "./Sidebar";
import Menu from "./Menu";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="profile" aria-label="Profile initials">
          <span>SK</span>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default Nav;
