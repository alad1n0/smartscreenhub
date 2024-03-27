import React, {useState} from 'react';
import './About.css';
import stol1 from "../../styles/images/product/sssss.jpg"
import stol2 from "../../styles/images/product/1.jpg"
import stols from "../../styles/images/product/microled.jpg"
import Wedo from "../../styles/images/product/Screenshot.png"
import logo4 from "../../styles/images/img/logo-4.png"
import logo3 from "../../styles/images/img/logo-3.png"
import logo2 from "../../styles/images/img/logo-2.png"
import logo1 from "../../styles/images/img/logo-1.png"

function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordionClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <div className="container">
            <div className="card">
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stols} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stol1} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                        <div className="card__img">
                            <img src={stol2} alt=""/>
                        </div>
                        <div className="card__text">super device</div>
                    </div>
                </div>
            </div>
            <div className="section__header">
                <h3 className="section__suptitle">Про</h3>
                <h2 className="section__title">Компанію</h2>
                <div className="section__text">
                    <p>Наш інтернет-магазин спеціалізується на продажу найсучасніших телевізорів та мультимедійних
                        пристроїв, які забезпечать вашому дому найкращий дозвіл та розваги.</p>
                    <p>Ми пропонуємо широкий вибір телевізорів різних розмірів, типів та брендів, а також різноманітні
                        мультимедійні пристрої для вашого комфорту та розваг.</p>
                    <p>Наші продукти відповідають найвищим стандартам якості та надійності, щоб ви могли насолоджуватися
                        переглядом улюблених фільмів та програм без жодних турбот.</p>
                    <p>Завдяки передовим технологіям, наша техніка енергоефективна та допомагає зекономити ваші ресурси
                        та гроші.</p>
                </div>
            </div>
            <div className="catalog-section-wrapper">
                <h2 className="visually-hidden">Посилання на розділи каталогу</h2>
                <ul className="catalog-links">
                    <li className="catalog-links-item">
                        <a className="link-image virtual-link" href="">
                        </a>
                    </li>
                    <li className="catalog-links-item">
                        <a className="link-image monopod-link" href="">
                        </a>
                    </li>
                    <li className="catalog-links-item">
                        <a className="link-image action-link" href="">
                        </a>
                    </li>
                    <li className="catalog-links-item">
                        <a className="link-image fitness-link" href="">
                        </a>
                    </li>
                    <li className="catalog-links-item">
                        <a className="link-image watch-link" href="">
                        </a>
                    </li>
                    <li className="catalog-links-item">
                        <a className="link-image copter-link" href="">
                        </a>
                    </li>
                </ul>
            </div>
            <div className="manufactures-wrapper">
                <div className="section__header">
                    <h3 className="section__suptitle">Про</h3>
                    <h2 className="section__title">Список виробників електроніки</h2>
                </div>
                <ul className="manufactures-list">
                    <li>
                        <a href=""><img src={logo4} alt="логотип компании DJI" width="260" height="100"/></a>
                    </li>
                    <li>
                        <a href=""><img src={logo3} alt="логотип компании SP Gadgets" width="260"
                                        height="100"/></a>
                    </li>
                    <li>
                        <a href=""><img src={logo2} alt="логотип компании Go Pro" width="260"
                                        height="100"/></a>
                    </li>
                    <li>
                        <a href=""><img src={logo1} alt="логотип компании VIVE" width="260" height="100"/></a>
                    </li>
                </ul>
            </div>
            <div className="container_acor">
                <div className="wedo">
                    <div className="wedo__item">
                        <img className="wedo__img" src={Wedo} alt=""/>
                    </div>
                    <div className="wedo__item">
                        <div className="accordion">
                            {[
                                {
                                    title: "Доставка",
                                    content: "Ми із задоволенням доставимо ваш товар прямо до вашого під'їзду абсолютно безкоштовно! Адже ми добре заробимо, піднімаючи його на ваш поверх.",
                                },
                                {
                                    title: "Гарантія",
                                    content: "Якщо через загоряння купленого у нас товару у вас згорить будинок - не переживайте, ми видумо вам новий. Товар, не будинок, звичайно.",
                                },
                                {
                                    title: "Кредит",
                                    content: "Залізти у боргову яму стало простіше! Кредитні консультанти підберуть для вас найвигідніші умови кредиту. Вигідні для нашого банку, зрозуміло.",
                                }
                            ].map((item, index) => (
                                <div key={index}
                                     className={`accordion__item ${activeIndex === index ? "active" : ""}`}>
                                    <div className="accordion__header" onClick={() => handleAccordionClick(index)}>
                                        <div className="accordion__title">{item.title}</div>
                                    </div>
                                    <div className="accordion__content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;