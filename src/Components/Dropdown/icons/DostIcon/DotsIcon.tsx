import React, { ReactNode } from 'react';
import style from './DotsIcon.module.scss';

interface IDotsIconProps extends React.HTMLAttributes<HTMLDivElement> {
  clsMods?: string;
  direction: 'vertical' | 'horizontal'
}

const DotsIcon: React.FC<IDotsIconProps> = ({ direction, ...attr }: IDotsIconProps) => {
  return (
    <div
      {...attr}
      className={`
        ${attr.className}
        ${style.dots}
      `}
    />
  )
}

export default DotsIcon;