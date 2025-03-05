import scss from './PresentationPage.module.scss';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import MetaTags from "./../../helpers/metaTags";

const PresentationPage = () => {
  const { t, i18n } = useTranslation();
  const metaTags = MetaTags();
  const [presentation, setPresentation] = useState("");
  const basePath = window.location.pathname.split('/')[1];

  useEffect(() => {
    const currentLang = i18n.language; 
      if (currentLang.includes("uk") || currentLang.includes("ua") || currentLang.includes("ru")) {
        setPresentation(`/${basePath}/assets/Presentation_Aurum_UA.pdf`);
      } else if (currentLang.includes("de")) {
        setPresentation(`/${basePath}/assets/Presentation_Aurum_DE.pdf`);
      } else {
        setPresentation(`/${basePath}/assets/Presentation_Aurum_EN.pdf`);
      }
  }, [i18n.language, basePath]);

  return (
    <>
      <Helmet>
        <title>{t("Presentation_meta_title")}</title>
        <meta name="description" content={t("Presentation_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Presentation_meta_title")}/>
        <meta property="og:description" content={t("Presentation_meta_description")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
        <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Presentation_title")}</h1>
              <button className={scss.button_download} onClick={() => window.open(presentation, "_blank", "noopener,noreferrer")}>
                <MdOutlineScreenSearchDesktop className={scss.icon}/>
                <span className={scss.button_download_text}>{t("Presentation_link")}</span>
              </button>
        </div>
      </div>
    </> 
  )
};

export default PresentationPage;

