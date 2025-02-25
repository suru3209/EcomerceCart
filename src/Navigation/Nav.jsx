import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <CiHeart className="nave-icons" />
        </a>
        <a href="#">
          <FaShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nave-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
