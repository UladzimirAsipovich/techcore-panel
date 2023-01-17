import React, { ReactNode } from 'react';
import style from './Badge.module.scss';

interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  clsMods?: string;
  type: 'primary' | 'danger' | 'secondary';
  children?: ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({ children, type, ...attr }: IBadgeProps) => {
  return (
    <span
      {...attr}
      className={`
        ${attr.className}
        ${style.badge}
        ${style[`badge_${type}`]} 
      `}
    >
      {children}
    </span>
  )
}

export default Badge;