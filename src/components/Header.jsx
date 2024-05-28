import React from 'react';
import logo from '../imgs/Logo.jpg'
import inst from '../imgs/insta.jpg'
import tg from '../imgs/telegram.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Header() {
  const {t, i18n} = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <div className="container header">
        <div className="logo">
          <img className='logo_img' src={logo} alt="JJ Plast" />
          <div>
            <ul>
                <li><img width={30} src={inst} alt="" /></li>
                <li style={{marginRight: 30}}><img width={30} src={tg} alt="" /></li>
                <li style={{marginRight: 30}}>+ 7 707 607 09 66</li>
                <li><button>WhatsApp</button></li>
                {
                  i18n.language === 'kk' ?<>
                  <li className='nav-li inactive' onClick={() => changeLang("ru")}>ru</li>
                  <li className='nav-li active' onClick={() => changeLang("kk")}>kk</li></>:
                  <><li className='nav-li active' onClick={() => changeLang("ru")}>ru</li>
                  <li className='nav-li inactive' onClick={() => changeLang("kk")}>kk</li></>
                }
              </ul>
          </div>
        </div>
          <div className="underline"></div>
        <nav>
          <ul>
            <li className='nav-li'><Link to="/">{t("mainPage")}</Link></li>
            <li className='nav-li'><Link to="/Okna">{t("windows")}</Link></li>
            <li className='nav-li'><Link to="/Stekla">{t("glasses")}</Link></li>
            <li className='nav-li'><Link to="/Vitrages">{t("vitrages")}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
