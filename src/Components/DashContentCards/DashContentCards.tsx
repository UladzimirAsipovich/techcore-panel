import React, { useEffect, useState } from 'react';
import Badge from '../Badge/Badge';
import Dropdown from '../Dropdown/Dropdown';
import style from './DashContentCards.module.scss';

interface IAvatar {
  img: false | string;
  color: string;
}

interface IFollower {
  avatar: IAvatar;
  name: string;
  surname: string;
  id: string;
}

interface ICardData {
  id: string;
  location: string;
  followers: IFollower[];
  defaultCard: boolean;
  moreFollowers: number;
}

interface IaddCard {
  id: string;
  location: string;
  [otherKeys: string]: any;
}

const data: ICardData[] = [
  {
    id: 'dsdfgd8345f', location: 'Australia', followers: [
      { id: 'f6665', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Vasya', surname: 'Petrov' },
      { id: 'f63665', avatar: { img: false, color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f66665', avatar: { img: 'people_2.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f46665', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f66g65', avatar: { img: 'people_3.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f6g6e65', avatar: { img: false, color: '#434EAA' }, name: 'Hillary', surname: 'Milligan' },
      { id: 'f666w5', avatar: { img: 'people_2.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
    ], defaultCard: true, moreFollowers: 6
  },
  {
    id: 'dsd565fgd8345f', location: 'Belarus', followers: [
      { id: 'f6hj665', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Vasya', surname: 'Petrov' },
      { id: 'f66s65', avatar: { img: false, color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f66fs65', avatar: { img: 'people_2.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f6hd665', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f666h5', avatar: { img: false, color: '#434EAA' }, name: 'Hillary', surname: 'Milligan' },
    ], defaultCard: false, moreFollowers: 0
  },
  {
    id: 'dsdfgd834567yjf', location: 'USA', followers: [
      { id: 'f666jw5', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Vasya', surname: 'Petrov' },
      { id: 'fw6w665', avatar: { img: false, color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'fw6665', avatar: { img: 'people_2.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'fg6y665', avatar: { img: 'people_1.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f6hy665', avatar: { img: 'people_3.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f6t665', avatar: { img: false, color: '#434EAA' }, name: 'Hillary', surname: 'Milligan' },
    ], defaultCard: false, moreFollowers: 76
  },
  {
    id: 'dsdfgd8jkiu5345f', location: 'Canada', followers: [
      { id: 'f6wq6u65', avatar: { img: false, color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      { id: 'f66h65wq', avatar: { img: 'people_3.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
    ], defaultCard: false, moreFollowers: 0
  },
]

const DashContentCards: React.FC<{ newCard: { [keys: string]: string } | null }> = (props) => {

  const [CardData, setCardData]: [ICardData[], Function] = useState(data);

  const removeCard = (idCard: string) => {
    setCardData((prevState: ICardData[]) => {
      return prevState.filter(el => el.id !== idCard)
    })
  }

  const addCard = (data: IaddCard) => {

    const _default: ICardData = {
      id: 'dsdfgd8jkiu5345f', location: 'Canada', followers: [
        { id: 'f6wq6u65', avatar: { img: false, color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
        { id: 'f66h65wq', avatar: { img: 'people_3.png', color: '#00A0EC' }, name: 'Boris', surname: 'Sabot' },
      ], defaultCard: false, moreFollowers: 0
    }

    const currentCard: ICardData = { ..._default, id: data.id, location: data.location };
    currentCard.followers = data.Add_User.map((el: string, ind: number) => {
      return { id: ind + '_f6wq6u65_' + data.id, avatar: { img: false, color: '#00A0EC' }, name: el.split(' ')[0], surname: el.split(' ')[1] ?? '' };
    })


    setCardData((prevState: ICardData[]) => {
      return [...prevState, currentCard];
    })
  }

  useEffect(() => {

    if (!props.newCard) return;

    addCard(props.newCard as IaddCard)

  }, [props.newCard])

  return (
    <section className={`${style['dash-content__cards']}`}>
      {
        CardData ? CardData.map((Card) => (
          <div className={`${style['dash-content__card-wrapper']}`} key={Card.id}>
            <article className={`${style['dash-content__card']}`}>
              <header className={`${style['dash-content__card__header']}`}>
                <h4 className={`${style['dash-content__card__title']}`}> <a href="#1">{Card.location}</a>
                  {Card.defaultCard ? <Badge type='primary'>default</Badge> : null}
                </h4>
                <Dropdown cardID={Card.id} location={Card.location} addCardFX={addCard} removeCardFX={removeCard} />
              </header>

              <div className={`${style['dash-content__card__content']}`}>
                <div className={`${style['tbl']}`}>
                  <div className={`${style['tbl__col']}`}>
                    <div className={`${style['tbl__th']}`}>Holidays</div>
                    <div className={`${style['tbl__th']}`}>Leave Policies</div>
                  </div>
                  <div className={`${style['tbl__col']}`}>
                    <div className={`${style['tbl__td']}`}><a href="#1" title='View Holidays'>View Holidays</a></div>
                    <div className={`${style['tbl__td']}`}><a href="#1" title='View Policies'>View Leave Policies</a></div>
                  </div>
                </div>
              </div>
              <ul className={`${style['dash-content__card__users-list']}`}>
                {
                  Card.followers.map((Follower) => (
                    <li className={`${style['dash-content__card__users-list__item']}`} key={Follower.id} style={{ "background": `${Follower.avatar.img ? '#fff' : `${Follower.avatar.color}`} url(./${Follower.avatar.img}) 100% 100% no-repeat` }}>
                      <a href="#1" className={`${style['dash-content__card__users-list__link']}`}>
                        {
                          Follower.avatar.img ? false : <span>{`${Follower.name[0]}${Follower.surname[0] || ''}`}</span>
                        }
                      </a>
                    </li>
                  ))
                }
                {
                  Card.moreFollowers ? (
                    <li className={`${style['dash-content__card__users-list__item']} ${style['dash-content__card__users-list__item_more']}`}>
                      <a href="#1" className={`${style['dash-content__card__users-list__link']}`} title='View other followers'>+{Card.moreFollowers}</a>
                    </li>
                  ) : null
                }
              </ul>
            </article>
          </div>
        )) : null
      }
    </section>
  )
}

export default DashContentCards;