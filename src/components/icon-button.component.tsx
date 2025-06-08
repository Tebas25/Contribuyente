// src/components/icon-button.component.tsx
import React from 'react';
import classNames from 'classnames';

export type IconName = 'edit' | 'delete' | 'home' | 'add' | 'save';

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number; 
  color?: string; 
}

const Icon: React.FC<IconProps> = ({ name, className = '', size = 16, color = 'inherit' }) => {
  return (
    <span
      className={classNames(`icon-${name}`, className, {
        'icon-red': color === 'red', // si quieres manejar por nombre
      })}
      style={{ fontSize: size, color }}
    />
  );
};

export default Icon;
