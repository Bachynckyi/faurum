import scss from './PartnersPage.module.scss';
import Partners from 'components/Partners/Partners';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Partners_meta_title")}</title>
        <meta name="description" content={t("Partners_meta_description")}/>
        <meta property="og:title" content={t("Partners_meta_title")}/>
        <meta property="og:description" content={t("Partners_meta_description")}/>
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

