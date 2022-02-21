import React, { useState } from "react";
import menu from "../img/menu.svg";
import close from "../img/close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div>Здесь будет Лого</div>
          <div className="menu-info">Здесь будет Меню</div>
          <div className="burger" onClick={showMenu}>
            {isOpen ? <img src={close} alt="" /> : <img src={menu} alt="" />}
            {isOpen ? (
              <div className="burger-menu">Здесь будет Меню для мобилки</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
