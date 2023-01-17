import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  clsMods?: string;
  type: 'primary' | 'danger' | 'danger-reverse' | 'secondary' | 'base';
  children?: ReactNode;
  circle?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, type, circle, ...attr }: IButtonProps) => {
  return (
    <button
      {...attr}
      className={`
        ${attr.className}
        ${style.button}
        ${style[`button_${type}`]} 
        ${circle ? style.button_circle : ''}
      `}
    >
      {children}
    </button>
  )
}

export default Button;