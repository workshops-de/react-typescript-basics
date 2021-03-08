import React from "react";

import './Header.css';
import HeaderElement from "./HeaderElement";

interface HeaderProps {
  count?: number;
}

export const Header: React.FC<HeaderProps> = ({ count }) => (
  <div className={"Header"}>
    <HeaderElement text={"Book"}></HeaderElement>
    <HeaderElement text={"Counter"} badgeValue={count}></HeaderElement>
  </div>
);

export default Header;