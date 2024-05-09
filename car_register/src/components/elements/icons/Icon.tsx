// 1. Import
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  color: string;
  icon: IconType;
  size: string;
};

// 2. Use the `as` prop
function IconComponent({ icon, color, size }: Props) {
  return React.createElement(icon, { size, color });
}

export default IconComponent;
