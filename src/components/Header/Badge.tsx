import React from "react";

import './Header.css';

interface BadgeProps {
  value?: string | number;
}

const Badge: React.FunctionComponent<BadgeProps> = ({ value = '3' }) => (
  <div className={"Badge"}>{value}</div>
);

export default Badge;
