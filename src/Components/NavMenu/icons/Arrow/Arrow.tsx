import React from 'react';
import style from './Arrow.module.scss';

interface IArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  clsMods?: string;
  direction?: 'left' | 'top' | 'right' | 'bottom';
}

const Arrow: React.FC<IArrowProps> = ({ direction, ...attr }: IArrowProps) => {
  return (
    <div
      {...attr}
      className={`
        ${attr.className || ''}
        ${style['arrow-icon']} ${style[`arrow-icon_${direction || 'left'}`]}
      `}
    />
  )
}

export default Arrow;