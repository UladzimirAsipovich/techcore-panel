import React, { createContext, useContext, useState } from 'react';
import Button from '../Button/Button';
import style from './PopUp.module.scss';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as WarningIcon } from './icons/warning.svg';

interface IPopUpContext {
  show: boolean;
  setShow: (show: boolean) => void;
  data: IShowModal;
  showModal: (obj: IShowModal) => void;
}

interface IShowModal {
  cardID: string;
  location: string;
  removeCardFX: (idCard: string) => void;
  addCardFX: () => void;
}


const PopUpContext = createContext<IPopUpContext>({ show: true, setShow: () => { }, data: { cardID: '', location: '', removeCardFX: () => { }, addCardFX: () => { } }, showModal: () => { } });
export const usePopUp = () => useContext(PopUpContext);


const PopUp = () => {

  const { show, setShow, data } = usePopUp();

  return (
    <aside className={`${style.popup} ${show ? style.popup_show : null}`} >
      <div className={style["popup-container"]}>
        <header className={style["popup__header"]}>
          <h4 className={style["popup__header__title"]}>Delete Location</h4>
          <Button type='base' className={style["popup__header__close-btn"]} onClick={() => setShow(false)}>
            <CloseIcon />
          </Button>
        </header>

        <main className={style["popup-content"]}>
          <h5 className={style["popup-content__title"]}>{`Are you sure want to delete “${data.location}” Location?`}</h5>
          <div className={style["popup-content__attention"]}>
            <WarningIcon />
            <span>Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).</span>
          </div>
          <footer className={style["popup-content__footer"]}>
            <Button
              type='danger-reverse'
              className='popup-content__button-delete'
              onClick={() => {
                data.removeCardFX(data.cardID);
                setShow(false)
              }}
              data-location_id={data.cardID}
            >
              Yes, Delete
            </Button>
          </footer>
        </main>
      </div>
    </aside>
  )
}


export const PopUpProvider: React.ElementType = ({ children }) => {

  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<IShowModal>({ cardID: '', location: '', removeCardFX: () => { }, addCardFX: () => { } });

  const showModal = (data: IShowModal): void => {
    setData(data);
    setShow(true);
  }

  return (
    <PopUpContext.Provider value={{
      show, setShow, data, showModal
    }}>
      {children}
    </PopUpContext.Provider>
  )
}

export default PopUp;