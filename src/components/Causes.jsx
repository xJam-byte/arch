import React from 'react'
import star from '../imgs/star (1).png'
import notebook from '../imgs/notebook.png'
import fabric from '../imgs/fabric.png'
import folders from '../imgs/folders.png'
import people from '../imgs/people.png'
import company from '../imgs/company.png'
import window from '../imgs/window.png'
import family from '../imgs/family.png'
import { useTranslation } from 'react-i18next'


function Causes() {
  const {t} = useTranslation();

  return (
    <section className='causesblock'>
        <p className='title'>{t("causes-title")}</p>
        <div >
          <ul className="causes">
            <li className="infoblock">
              <img width={50} src={star} alt="" />
              <p className="minititle">{t("causes-block1-title")}</p>
              <p className="minidesc">{t("causes-block1-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={notebook} alt="" />
              <p className="minititle">{t("causes-block2-title")}</p>
              <p className="minidesc">{t("causes-block2-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={fabric} alt="" />
              <p className="minititle">{t("causes-block3-title")}</p>
              <p className="minidesc">{t("causes-block3-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={folders} alt="" />
              <p className="minititle">{t("causes-block4-title")}</p>
              <p className="minidesc">{t("causes-block4-desc")}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="causes">
            <li className="infoblock">
              <img width={50} src={people} alt="" />
              <p className="minititle">{t("causes-block5-title")}</p>
              <p className="minidesc">{t("causes-block5-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={company} alt="" />
              <p className="minititle">{t("causes-block6-title")}</p>
              <p className="minidesc">{t("causes-block6-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={window} alt="" />
              <p className="minititle">{t("causes-block7-title")}</p>
              <p className="minidesc">{t("causes-block7-desc")}</p>
            </li>
            <li className="infoblock">
              <img width={50} src={family} alt="" />
              <p className="minititle">{t("causes-block8-title")}</p>
              <p className="minidesc">{t("causes-block8-desc")}</p>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Causes