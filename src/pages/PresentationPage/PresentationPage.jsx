import scss from './PresentationPage.module.scss';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";

const PresentationPage = () => {
  const { t, i18n } = useTranslation();
  const [presentation, setPresentation] = useState("");

  useEffect(() => {
    const currentLang = i18n.language.toUpperCase(); 
      if (currentLang.includes("UK") || currentLang.includes("UA") || currentLang.includes("RU")) {
        setPresentation("../assets/Презентація_Аурум_UKR.pdf");
      } else if (currentLang.includes("DE")) {
        setPresentation("../assets/Präsentation_Aurum_DE.pdf");
      } else {
        setPresentation("../assets/Presentation_Aurum_EN.pdf");
      }
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <title>{t("Presentation_meta_title")}</title>
        <meta name="description" content={t("Presentation_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Presentation_meta_title")}/>
        <meta property="og:description" content={t("Presentation_meta_description")}/>
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

