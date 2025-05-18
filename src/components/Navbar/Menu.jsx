import logo from "../../assets/logo.svg";

const Menu = ({ isOpen, setIsOpen }) => {
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className="menuLogo">
      <div
        className="menu"
        onClick={openMenu}
        role="button"
        aria-label="Open sidebar"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <img className="logoImg" src={logo} alt="logo" />
        <span className="logoText">Tasks</span>
      </div>
      <div className="mobileLogo">
        <img className="mobileLogoImg" src={logo} alt="logo" />
        <span className="mobileLogoText">Tasks</span>
      </div>
    </div>
  );
};

export default Menu;
