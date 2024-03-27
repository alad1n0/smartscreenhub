import React from 'react';
import './_Footer.scss';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footers">
      <div className="footers__wrapper">
        <div className="footers__about">
          <div className="footers__logo-container">
            {' '}
            <div className="footers__logo"></div>
          </div>
          <p className="footers__description">
            Величезний вибір товарів телевізорів та мультимедійних пристроїв не залишить байдужим гіка, який є у кожному з нас.
          </p>
        </div>

        <div className="footers__menu-container">
          {' '}
          <nav className="footers__menu">
            <h2 className="footers__menu-title">Меню сайту&#58;</h2>
            <ul className="footers__menu-items">
              <li className="footers__menu-item">
                <Link to="/aboutPage" className="footers__menu-item-link">
                  Головна
                </Link>
              </li>
              <li className="footers__menu-item">
                <Link to="/delivery" className="footers__menu-item-link">
                  Доставка і оплата
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="footers__menu">
            <h2 className="footers__menu-title">Категорії&#58;</h2>
            <ul className="footers__menu-items">
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Телевізори
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Аксесуари для телевізорів
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Аудіосистеми
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Ігрові консолі
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Монітори
                </a>
              </li>
              <li className="footers__menu-item">
                <a href="/#" target="_blank" className="footers__menu-item-link">
                  Смарт-пристрої для освітлення
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footers__contacts-container">
          <div className="footers__container">
            <div className="footers__messengers">
            <h2 className="footers__menu-title">Зв'язок в месенджерах&#58;</h2>
              <ul className="footers__messengers-items">
                <li className="footers__messengers-item footers__messengers-item_type_whatsup">
                  <a
                      href="/#"
                      target="_blank"
                      className="footers__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
                <li className="footers__messengers-item footers__messengers-item_type_tlgm">
                  <a
                      href="/#"
                      target="_blank"
                      className="footers__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
                <li className="footers__messengers-item footers__messengers-item_type_viber">
                  <a
                      href="/#"
                      target="_blank"
                      className="footers__messengers-link"
                  >
                    {' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footers__contacts">
            <h2 className="footers__menu-title">Контакти&#58;</h2>
            <p className="footers__contacts-text">
              &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
            </p>
            <p className="footers__contacts-additionalText">
              час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
            </p>

            <div className="footers__mail">
              <p className="footers__contacts-text">
                device@gmail.com
              </p>
              <p className="footers__contacts-additionalText">
                На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
              </p>
            </div>

            <ul className="footers__payment-items">
              <li className="footers__payment-item footers__payment-item_type_visa"></li>
              <li className="footers__payment-item footers__payment-item_type_mastercard"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
