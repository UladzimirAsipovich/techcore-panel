import React, { useState } from 'react';
import Button from './Components/Button/Button';
import CreateLocation from './Components/CreateLocation/CreateLocation';
import DashContentCards from './Components/DashContentCards/DashContentCards';
import NavMenu from './Components/NavMenu/NavMenu';
import PopUp, { PopUpProvider } from './Components/PopUp/PopUp';

function App() {

  const [visible, setVisible] = useState(false);
  const [newcard, setNewCard] = useState<null | { [keys: string]: string }>(null)

  const onCreate = (values: any) => {
    // console.log('Received values of form: ', values);
    setNewCard(values);
    setVisible(false);
  };

  return (
    <div className="App">
      <div className="App-container">
        <PopUpProvider>
          <main className="dashboard">
            <NavMenu />

            <div className="dash-container">
              <div className="dash-content">
                <nav className="dash-content__nav breadcrumbs">
                  <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                      <a href="#1" className="breadcrumbs__link breadcrumbs__link_iconic">
                        <img src="./gear.svg" alt="Иллюстрация шестерёнка" />Settings
                      </a>
                    </li>
                    <li className="breadcrumbs__item">
                      <a href="#2" className="breadcrumbs__link">Vacation Manager</a>
                    </li>
                  </ul>
                </nav>

                <header className='dash-content__header'>
                  <div className="dash-content__header__text">
                    <h2 className="dash-content__header__title">Locations</h2>
                    <p className="dash-content__header__description">Create new users or update the existng users. You can then set their permissons here too.</p>
                  </div>
                  <div className="dash-content__header__actions">
                    <Button type='primary' className='dash-content__header__button' onClick={() => {
                      setVisible(true);
                    }}>Create Location</Button>
                  </div>
                </header>

                <article className="dash-content__data-container">
                  <DashContentCards newCard={newcard} />
                </article>

              </div>
            </div>


            <PopUp />
            <CreateLocation visible={visible} onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }} />
          </main>
        </PopUpProvider>
      </div>
    </div>
  );
}

export default App;
