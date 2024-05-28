import React from 'react'
import { useTranslation } from 'react-i18next'

function LeaveInfo() {
  const {t} = useTranslation();

  return (
    <section className='leaveInfo'>
        <div className="left">
            <p className="title">{t("leaveinfo-title")}</p>
            <p className="desc">{t("leaveinfo-desc")}</p>
        </div>
        <div className="right">
            <form action="post">
                <p className='formtitle'>{t("leaveinfo-form-title")}</p>
                <p className='formsub'>{t("leaveinfo-form-sub")}<br />+ 7 707 607 09 66</p>
                <input type="text" placeholder={t("leaveinfo-form-input1")} />
                <input type="text" placeholder={t("leaveinfo-form-input2")} />
                <input type="submit" className='btn' value={t("leaveinfo-form-btn")} />
                <p className='text'>{t("leaveinfo-form-bottomtext")}</p>
            </form>
        </div>
    </section>
  )
}

export default LeaveInfo