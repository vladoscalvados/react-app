import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom";

import {LOGOUT, USER_PROFILE_REQUEST} from "../../actions";
import './Menu.scss';

export const Menu = ({closeMenu, isAuth}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add('noScroll')
    return () => {
      document.body.classList.remove('noScroll')
    };
  });

  const logout = () => {
    dispatch(LOGOUT());
    dispatch(USER_PROFILE_REQUEST());
    closeMenu();
  }

  const scrollTo = (block) => {
    if (block === 'PRIZE_BLOCK') {
      // eslint-disable-next-line no-undef
      gtag('event', 'clickprize', { 'method': ' click_button' });
    }
    if (block === 'FAQ_BLOCK') {
      // eslint-disable-next-line no-undef
      gtag('event', 'clickpfaq', { 'method': ' click_button' });
    }
    setTimeout(() => {
      closeMenu();
      const elementBlock = document.getElementById(block);
      if(elementBlock) {
        elementBlock.firstElementChild.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 300)
  }

  const content = (
      <div className="menu">
        <div className="menu__wrapper">
          <div className="menu__inner">
            <nav className="menu-list">
              <li className="menu-list__item">
                <Link to="/" onClick={() => scrollTo('FIRST_BLOCK')}>о проекте</Link>
              </li>
              <li className="menu-list__item prize">
                <Link to="/" onClick={() => scrollTo('PRIZE_BLOCK')}>Призы</Link>
              </li>
              <li className="menu-list__item ">
                <Link to="/" onClick={() => scrollTo('HOW_WIN_BLOCK')}>Как принять участие</Link>
              </li>
              <li className="menu-list__item arrow">
                <Link to="/" onClick={() => scrollTo('CONNECTION_Z')}>Связь Z
                  <img className='arrow' src="/static/media/arrow.80580a17.svg" alt=""/></Link>
              </li>
              <li className="menu-list__item arrow">
                <Link to="/reboot" onClick={() => closeMenu()}>Перезагруз</Link>
              </li>
              <ul className="menu-link">
                {/*<li className="menu-link__item">*/}
                {/*  <a onClick={() => scrollTo('FAQ_BLOCK')}>контакты </a>*/}
                {/*</li>*/}
                <li className="menu-link__item">
                  <Link to="/" onClick={() => scrollTo('FAQ_BLOCK')}>faq</Link>
                </li>
                <li className="menu-link__item">
                  <Link to="/" onClick={() => scrollTo('QUESTION_BLOCK')}>задать вопрос</Link>
                </li>
              </ul>
              {
                isAuth &&
                <li className="menu-list__item">
                  <Link to="/" onClick={logout}>Выход</Link>
                </li>
              }
            </nav>
          </div>
        </div>
      </div>
  )

  return content

}




