import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header-container">
      <div className="header-nav-button">
        <FontAwesomeIcon icon={faAlignLeft} />
      </div>
      <div className="header-nav-menu">
        <div className="header-nav-menu-name">AppName</div>

        <div className="header-nav-menu-contacts-container">
          <div className="header-nav-menu-contacts">
            <span>+7 (495) 276-00-00</span>
            <span>c 10:00 до 20:00</span>
          </div>
        </div>
        <div className="header-nav-menu-button">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="header-nav-menu-button">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="header-nav-menu-button">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
}

export default Header;
