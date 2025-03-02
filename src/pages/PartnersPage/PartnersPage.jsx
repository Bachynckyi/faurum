import scss from './PartnersPage.module.scss';
import Partners from 'components/Partners/Partners';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import useMetaData from "../../hooks/useMetaData";

const PartnersPage = () => {
  const { t } = useTranslation();
  const { metaLogo, siteName } = useMetaData();

  return (
    <>
      <Helmet>
        <title>{t("Partners_meta_title")}</title>
        <meta name="description" content={t("Partners_meta_description")}/>
        <meta property="og:title" content={t("Partners_meta_title")}/>
        <meta property="og:description" content={t("Partners_meta_description")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/> 
      </Helmet>
      <div className={scss.container}>
            <div className={scss.content_wrapper}>
              <h1 className={scss.title}>{t("Partners_title")}</h1>
              <Partners/>
            </div>
      </div>
    </> 
  )
};

export default PartnersPage;

