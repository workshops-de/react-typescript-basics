import React from "react";

import "./Header.css";
import Badge from "./Badge";

interface HeaderElementProps {
  text: string;
  badgeValue?: number | string;
}

const HeaderElement: React.FunctionComponent<HeaderElementProps> = ({
  text,
  badgeValue,
}) => (
  <div className={"HeaderElement"}>
    <span>{text}</span>
    {badgeValue && <Badge value={badgeValue} />}
  </div>
);

export default HeaderElement;
