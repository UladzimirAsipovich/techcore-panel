import React, { useState } from 'react';
import style from './NavMenu.module.scss';
import { ReactComponent as MainIcon } from './icons/main.svg';
import { ReactComponent as CalendarIcon } from './icons/calendar.svg';
import { ReactComponent as DashboardIcon } from './icons/dashboard.svg';
import { ReactComponent as GearIcon } from './icons/gear.svg';
import { ReactComponent as PLIcon } from './icons/pl.svg';
import { ReactComponent as UsersIcon } from './icons/users.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as SettingsIcon } from './icons/settings.svg';
import Button from '../Button/Button';
import Arrow from './icons/Arrow/Arrow';

const NavMenu = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [clickedFirstLevelItemID, setClickedFirstLevelItemID] = useState<null | string>(null);
  // const [clickedSecondLevelItemID, setClickedSecondLevelItemID] = useState<null | string>(null);


  const clickToMainMenuTrigger: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    if (menuOpen) {
      setClickedFirstLevelItemID(null);
      setMenuOpen(false);
      return;
    }
    setMenuOpen(true);
  }


  const clickToMainLevelItem: React.MouseEventHandler<HTMLAnchorElement> = (e): void => {
    if (clickedFirstLevelItemID !== null) {

      if (clickedFirstLevelItemID === e.currentTarget.hash) {
        setClickedFirstLevelItemID(null);
        setMenuOpen(false);
        return;
      }

      setClickedFirstLevelItemID(e.currentTarget.hash);

    } else {
      setClickedFirstLevelItemID(e.currentTarget.hash);
      setMenuOpen(true);
    }
  }

  const clickedSecondLevelItem: React.MouseEventHandler<HTMLLIElement> = (e): void => {
    console.log('dgf')
  }


  return (
    <div className={`${style['nav-container']} ${menuOpen ? style['nav-container_open'] : null}`}>
      <nav className={`${style['nav-menu']}`}>
        <div className="nav-menu__start">
          <ul className={`${style['nav-menu__list']}`}>
            <li className={`${style['nav-menu__item']} ${style['nav-menu__item_logo']}`}>
              <a href="#Home" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <MainIcon title='Home' />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${style['nav-menu__body']}`}>
          <ul className={`${style['nav-menu__list']}`}>
            <li className={`${style['nav-menu__item']} ${clickedFirstLevelItemID === '#Dashboard' ? style['nav-menu__item_active'] : null}`}>
              <a href="#Dashboard" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <DashboardIcon title='Dashboard' /><span>Dashboard</span>
              </a>
              <nav className={`${style['nav-menu__item__menu']}`}>
                <header className={`${style['nav-menu__item__menu__header']}`}>
                  <h4 className={`${style['nav-menu__item__menu__header__text']}`}>Dashboard</h4>
                </header>
                <section className={`${style['nav-menu__item__menu__props']}`}>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <SettingsIcon /><span>General</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                    </ul>
                  </nav>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <CalendarIcon /><span>Vacation Manager</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                      <li>
                        <a href="#1">Leave Types</a>
                      </li>
                      <li>
                        <a href="#1">Locations</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </nav>
            </li>
            <li className={`${style['nav-menu__item']} ${clickedFirstLevelItemID === '#Users' ? style['nav-menu__item_active'] : null}`}>
              <a href="#Users" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <UsersIcon title='Users' /><span>Users</span>
              </a>
              <nav className={`${style['nav-menu__item__menu']}`}>
                <header className={`${style['nav-menu__item__menu__header']}`}>
                  <h4 className={`${style['nav-menu__item__menu__header__text']}`}>Users</h4>
                </header>
                <section className={`${style['nav-menu__item__menu__props']}`}>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <SettingsIcon /><span>General</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                    </ul>
                  </nav>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <CalendarIcon /><span>Vacation Manager</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                      <li>
                        <a href="#1">Leave Types</a>
                      </li>
                      <li>
                        <a href="#1">Locations</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </nav>
            </li>
            <li className={`${style['nav-menu__item']} ${clickedFirstLevelItemID === '#Settings' ? style['nav-menu__item_active'] : null}`}>
              <a href="#Settings" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <GearIcon title='Settings' /><span>Settings</span>
              </a>
              <nav className={`${style['nav-menu__item__menu']}`}>
                <header className={`${style['nav-menu__item__menu__header']}`}>
                  <h4 className={`${style['nav-menu__item__menu__header__text']}`}>Settings</h4>
                </header>
                <section className={`${style['nav-menu__item__menu__props']}`}>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <SettingsIcon /><span>General</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                    </ul>
                  </nav>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']} ${style['nav-menu__list__label_active']}`}>
                      <CalendarIcon /><span>Vacation Manager</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                      <li>
                        <a href="#1">Leave Types</a>
                      </li>
                      <li className={`${style['nav-menu__item__menu__props_active_item']}`} onClick={(e) => clickedSecondLevelItem(e)}>
                        <a href="#1">Locations</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </nav>
            </li>
            <li className={`${style['nav-menu__item']} ${clickedFirstLevelItemID === '#PandL' ? style['nav-menu__item_active'] : null}`}>
              <a href="#PandL" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <PLIcon title='P&L' /><span>P&L</span>
              </a>
              <nav className={`${style['nav-menu__item__menu']}`}>
                <header className={`${style['nav-menu__item__menu__header']}`}>
                  <h4 className={`${style['nav-menu__item__menu__header__text']}`}>P&L</h4>
                </header>
                <section className={`${style['nav-menu__item__menu__props']}`}>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <SettingsIcon /><span>General</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                    </ul>
                  </nav>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <CalendarIcon /><span>Vacation Manager</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                      <li>
                        <a href="#1">Leave Types</a>
                      </li>
                      <li>
                        <a href="#1">Locations</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </nav>
            </li>
            <li className={`${style['nav-menu__item']} ${clickedFirstLevelItemID === '#Vacation_Manager' ? style['nav-menu__item_active'] : null}`}>
              <a href="#Vacation_Manager" className={`${style['nav-menu__link']}`} onClick={(e) => clickToMainLevelItem(e)}>
                <CalendarIcon title='Vacation Manager' /><span>Vacation Manager</span>
              </a>
              <nav className={`${style['nav-menu__item__menu']}`}>
                <header className={`${style['nav-menu__item__menu__header']}`}>
                  <h4 className={`${style['nav-menu__item__menu__header__text']}`}>Vacation Manager</h4>
                </header>
                <section className={`${style['nav-menu__item__menu__props']}`}>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <SettingsIcon /><span>General</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                    </ul>
                  </nav>
                  <nav className={`${style['nav-menu__list']}`}>
                    <a href="#1" className={`${style['nav-menu__list__label']}`}>
                      <CalendarIcon /><span>Vacation Manager</span>
                    </a>
                    <ul className={`${style['nav-menu__list']}`}>
                      <li>
                        <a href="#1">Leave Types</a>
                      </li>
                      <li>
                        <a href="#1">Locations</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </nav>
            </li>
          </ul>
        </div>
        <div className={`${style['nav-menu__end']}`}>
          <Button type='secondary' className={style['nav-menu__trigger']} circle onClick={(e) => clickToMainMenuTrigger(e)}>
            <Arrow direction='right' />
          </Button>
          <div className={`${style['nav-menu__end__users-data']}`}>
            <ul className={`${style['nav-menu__list']}`}>
              <li className={`${style['nav-menu__item']}`}>
                <a href="#1" className={`${style['nav-menu__link']} ${style['nav-menu__end__users-data__notice']} ${style['nav-menu__end__users-data__notice_active']}`}>
                  <BellIcon title='Bell' />
                </a>
              </li>
              <li className={`${style['nav-menu__item']} `}>
                <a href="#1" className={`${style['nav-menu__link']} ${style['nav-menu__end__users-data__image']}`}>
                  JS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu;