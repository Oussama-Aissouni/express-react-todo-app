import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="header__icon" src="./icons/main.png" alt="" />
      <h1 className="header__title">Todo App</h1>
    </header>
  );
}
