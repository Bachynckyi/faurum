import scss from './NotFoundPage.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("PageNotFound_meta_title")}</title>
        <meta name="description" content={t("PageNotFound_meta_description")}/>
        <meta name="robots" content="noindex, follow"/>
        <meta property="og:title" content={t("PageNotFound_meta_title")}/>
        <meta property="og:description" content={t("PageNotFound_meta_description")}/>
      </Helmet>
      <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("PageNotFound_title_error")}</h1>
          <h1 className={scss.title}>{t("PageNotFound_title_text")}</h1>
          <NavLink to="/" className={scss.button}>{t("PageNotFound_title_link")}</NavLink>
        </div>
      </div>
    </> 
  )
};

export default NotFoundPage;

