import React, { useContext } from "react";

import "./Header.css";
import Badge from "./Badge";
import CounterContext from "../../counterContext";

interface HeaderElementProps {
  text: string;
  showBadge?: boolean;
}

const HeaderElement: React.FunctionComponent<HeaderElementProps> = ({
  text,
  showBadge,
}) => {
  const { count } = useContext(CounterContext);

  return (
    <div className={"HeaderElement"}>
      <span>{text}</span>
      {showBadge && <Badge value={count} />}
    </div>
  );
};

export default HeaderElement;
