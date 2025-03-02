import scss from './MedicinePage.module.scss';
import { useTranslation } from 'react-i18next';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const MedicinePage = () => {
  const { t } = useTranslation();
  const basePath = window.location.pathname.split('/')[1]; 

  return (
    <>
      <Helmet>
        <title>{t("Medicine_meta_title")}</title>
        <meta name="description" content={t("Medicine_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Medicine_meta_title")}/>
        <meta property="og:description" content={t("Medicine_meta_description")}/>
      </Helmet>
      <div className={scss.container}>
            <div className={scss.content_wrapper}>
              <h1 className={scss.title}>{t("Medicine_title")}</h1>
              <div className={scss.list_wrapper}>
                  <button className={scss.button_download} onClick={() => window.open(`/${basePath}/assets/Anthroposophy_in_the_WHO_system.pdf`, "_blank", "noopener,noreferrer")}>
                      <MdOutlineScreenSearchDesktop className={scss.icon}/>
                      <span className={scss.button_download_text}>{t("Medicine_presentation1")}</span>
                  </button>
                  <button className={scss.button_download} onClick={() => window.open(`/${basePath}/assets/Homeopathy_in_the_WHO_system.pdf`, "_blank", "noopener,noreferrer")}>
                      <MdOutlineScreenSearchDesktop className={scss.icon}/>
                      <span className={scss.button_download_text}>{t("Medicine_presentation2")}</span>
                  </button>
                  <button className={scss.button_download} onClick={() => window.open(`/${basePath}/assets/WHO_Report_2019.pdf`, "_blank", "noopener,noreferrer")}>
                      <MdOutlineScreenSearchDesktop className={scss.icon}/>
                      <span className={scss.button_download_text}>{t("Medicine_presentation3")}</span>
                  </button>
                  <button className={scss.button_download} onClick={() => window.open(`/${basePath}/assets/About_Anthroposophical_Medicine.pdf`, "_blank", "noopener,noreferrer")}>
                      <MdOutlineScreenSearchDesktop className={scss.icon}/>
                      <span className={scss.button_download_text}>{t("Medicine_presentation4")}</span>
                  </button>
                  <button className={scss.button_download} onClick={() => window.open("https://iris.who.int/discover?query=anthroposophic+medicine", "_blank", "noopener,noreferrer")}>
                      <MdArrowOutward className={scss.icon}/>
                      <span className={scss.button_download_text}>{t("Medicine_link")}</span>
                  </button>
              </div>
            </div>
      </div>
    </> 
  )
};

export default MedicinePage;

