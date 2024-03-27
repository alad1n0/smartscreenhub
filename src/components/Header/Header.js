import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';
import StartPage from "../About/AboutPage";
import About from "../About/AboutPage";
import Delivery from "../Delivery/Delivery";

function Header(props) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function openBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function updateProductsHandler() {
    props.onUpdateProductList();
  }

  return (
    <div className="headers">
      <div className="headers__info">
        <div className="headers__contacts">

          <div className="headers__adress headers__common">
            <div className="headers__common-icon headers__common-icon_type_adress"></div>
            <div className="headers__common-container">
              <div className="headers__common-text">
                <span className="city">м. Львів,</span>
                <span className="street">вул. Шевченка 20</span>
              </div>
              <div className="headers__common-additionalText">
                (Центральний ринок)
              </div>
            </div>
          </div>

          <div className="headers__mail headers__common">
            <div className="headers__common-icon headers__common-icon_type_mail"></div>

            <div className="headers__common-container">
              <p className="headers__common-text">
                device&#64;gmail&#46;com
              </p>
              <p className="headers__common-additionalText">
                На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
              </p>
            </div>
          </div>
        </div>



        <nav className="headers__menu">
          <h2 className="headers__menu-title">Меню&nbsp;сайта&#58;</h2>
          <ul className="headers__menu-items">
            <li className="headers__menu-item">
              <Link to="/aboutPage" className="headers__menu-item-link">
                Головна
              </Link>
            </li>
            <li className="headers__menu-item">
              <Link to="/delivery" className="headers__menu-item-link">
                Доставка і оплата
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="headers__interaction">
        <Link to="/aboutPage">
          <div className="headers__logo"></div>
        </Link>
        <Link
            to="/catalog"
            onClick={updateProductsHandler}
            className="headers__catalog"
        >
          Каталог товарів <div className="headers__catalog-icon"></div>{' '}
        </Link>

        <div className="headers__search">
          <input
              type="search"
              className="headers__search-input"
              placeholder="Пошук..."
          ></input>
          <button className="headers__search-btn"></button>
        </div>

        <div className="headers__callback">
          <div className="headers__callback-text headers__common">
            <div className="headers__common-icon headers__common-icon_type_callback"></div>

            <div className="headers__common-container">
              <p className="headers__common-text">
                &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
              </p>
              <p className="headers__callback-additionalText headers__common-additionalText">
                час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
              </p>
              <button className="headers__callback-btn">Замовити дзвінок</button>
            </div>
          </div>

          <div className="headers__callback-img">
            <div className="headers__callback-ellipse"></div>
          </div>
        </div>

        <div className="headers__priceList">
          {' '}
          <a href="/#" target="_blank" className="headers__priceList-btn">
            Прайс лист
            <div className="headers__priceList-icon"></div>
          </a>
        </div>

        <div className="headers__basket">
          <Link to="/cart" className="headers__basket-icon">
            <span
                className={`headers__basket-count ${
                    props.count === 0 && 'headers__basket_empty'
                }`}
            >
              {props.count}
            </span>
          </Link>

          <div className="headers__basket-text">
            <p className="headers__basket-price">
              {props.cartPrice}&#8372;
            </p>
          </div>
        </div>
      </div>

      <div
          className={`headers__adaptive ${
              isBurgerMenuOpen && 'headers__adaptive_open'
          }`}
      >
        <div className="headers__adaptive-container">
          <div
              data-testid="burger-btn"
              className={`headers__burger-icon ${
                  isBurgerMenuOpen
                      ? 'headers__burger-icon_type_open'
                      : 'headers__burger-icon_type_close'
              }`}
              onClick={openBurgerMenu}
          ></div>
          <div className="headers__logo"></div>

          <Link to="/cart" className="headers__basket-icon">
            <span
                className={`headers__basket-count ${
                    props.count === 0 && 'headers__basket_empty'
                }`}
            >
              {props.count}
            </span>
          </Link>
        </div>

        <div className="headers__adaptive-container headers__adaptive-content">
          <Link
            to="/catalog"
            onClick={updateProductsHandler}
            className="headers__catalog"
          >
            <div className="headers__catalog-icon"></div>
            Каталог
          </Link>
          <div className="headers__adaptive-line"></div>
          <div className="headers__search">
            <button type="submit" className="headers__search-btn"></button>
            <input
              type="search"
              className="headers__search-input"
              placeholder="Пошук"
            ></input>
          </div>
        </div>
      </div>

      <div
        data-testid="burger"
        className={`headers__burger ${
          isBurgerMenuOpen && 'headers__burger_open'
        }`}
      >
        <div className="headers__burger-container">
          {' '}
          <div className="headers__contacts">
            <div className="headers__adress headers__common">
              <div className="headers__common-icon headers__common-icon_type_adress"></div>
            </div>

            <div className="headers__mail headers__common">
              <div className="headers__common-icon headers__common-icon_type_mail"></div>

              <div className="headers__common-container">
                <p className="headers__common-text">
                  device@gmail.com
                </p>
                <p className="headers__common-additionalText">
                  На&nbsp;зв'язку&nbsp;в&nbsp;будь-який&nbsp;час
                </p>
              </div>
            </div>

            <div className="headers__callback-text headers__common headers__callback-text_adaptive">
              <div className="headers__common-icon headers__common-icon_type_callback"></div>

              <div className="headers__common-container">
                <p className="headers__common-text">Відділ продажу</p>
                <p className="headers__callback-additionalText headers__common-additionalText">
                  &#43;380&nbsp;&#40;777&#41;&nbsp;490&#8209;00&#8209;91
                </p>
                <p className="headers__callback-additionalText headers__common-additionalText">
                  час&nbsp;роботи&#58;&nbsp;9&#58;00&#8209;20&#58;00
                </p>
              </div>
            </div>
          </div>
          <nav className="headers__menu">
            <h2 className="headers__menu-title">Меню сайту&#58;</h2>
            <ul className="headers__menu-items">
              <li className="headers__menu-item">
                <Link to="/aboutPage" className="headers__menu-item-link">
                  Головна
                </Link>
              </li>
              <li className="headers__menu-item">
                <Link to="/delivery" className="headers__menu-item-link">
                  Доставка і оплата
                </Link>
              </li>
            </ul>
          </nav>
          <div className="headers__priceList">
            {' '}
            <a href="/#" target="_blank" className="headers__priceList-btn">
              Прайс лист
              <div className="headers__priceList-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;