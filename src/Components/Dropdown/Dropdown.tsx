import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import style from './Dropdown.module.scss';
import DotsIcon from './icons/DostIcon/DotsIcon';
import { ReactComponent as PenIcon } from './icons/pen.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';
import { ReactComponent as TrashIcon } from './icons/trash.svg';
import { usePopUp } from '../PopUp/PopUp';

interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  clsMods?: string;
  children?: ReactNode;
  cardID: string;
  location: string;
  removeCardFX: (idCard: string) => void;
  addCardFX: (data?: any) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ children, cardID, removeCardFX, addCardFX, location, ...attr }: IDropdownProps) => {

  const [Active, setActive] = useState(false);
  const dropdown__data: any = useRef(null);

  const clickListener = (e: any) => {
    if (!dropdown__data.current.contains(e.target)) {
      setActive(false);
    }
  }

  useEffect(() => {

    if (Active) {
      document.addEventListener('click', clickListener);
    }

    return () => {
      document.removeEventListener('click', clickListener);
    }

  }, [Active]);

  const { showModal } = usePopUp();

  return (
    <div
      {...attr}
      className={`
        ${attr.className}
        ${style.dropdown}
      `}
      ref={dropdown__data}
    >
      <div className={`${style['dropdown-container']}`}>
        <header className={style.dropdown__header}>
          <span className={style.dropdown__label}>
            <Button type='base' className={`${style.dropdown__trigger} ${Active ? style.dropdown__trigger_active : null}`} onClick={(e) => {
              setActive(!Active);
            }}>
              <DotsIcon direction='vertical' className={style.dropdown__trigger__icon} />
            </Button>
          </span>
        </header>
        <nav className={`${style.dropdown__data} ${Active ? style.dropdown__data_active : null}`}>
          <ul className={style.dropdown__list}>
            <li className={style.dropdown__item}>
              <a href="#1" className={`${style.dropdown__link} ${style.dropdown__link_iconical}`}>
                <PenIcon /> Edit
              </a>
            </li>
            <li className={style.dropdown__item}>
              <a href="#1" className={`${style.dropdown__link} ${style.dropdown__link_iconical}`}>
                <StarIcon /> Set as default
              </a>
            </li>
            <li className={style.dropdown__item} onClick={() => showModal({
              cardID, location, removeCardFX, addCardFX
            })}>
              <a href="#1" className={`${style.dropdown__link} ${style.dropdown__link_iconical}`}>
                <TrashIcon /> Delete
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Dropdown;