import React from 'react'
import { useTranslation } from 'react-i18next';

function ImgBlock() {
  const {t} = useTranslation();
  
  return (
    <div className='imgblock'>
        <div className='left'>
            <div className="title">
                <p>{t("imgBlock-title")}</p>
            </div>
            <div className="description">
                <p> {t("imgBlock-desc1")} <br />
                    {t("imgBlock-desc2")}</p>
            </div>
            <div className="description">
                <p>{t("imgBlock-desc3")}</p>
            </div>
            <button className='animated-button'>{t("imgBlock-btn")}</button>
        </div>
        <div className='right'></div>
    </div>
  )
}

export default ImgBlock