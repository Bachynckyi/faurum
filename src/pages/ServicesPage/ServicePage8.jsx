import scss from "./ServicePage.module.scss";
import service8 from '../../images/services/service8.webp';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const ServicePage8 = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();
  
  return (
    <>
      <Helmet>
        <title>{t("Service_title8")}</title>
        <meta name="description" content={t("Home_services_description8")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title8")} />
        <meta property="og:description" content={t("Home_services_description8")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title8")}</h1>
              <div className={scss.content_wrapper}>
                <OptimizedImage src={service8} alt='serviceImage' className={scss.image}/>
                <span className={scss.description}>{t("Service_text8.1")}<br/>
                    {t("Service_text8.2")}<br/>
                    {t("Service_text8.3")}<br/>
                    {t("Service_text8.4")}<br/>
                    {t("Service_text8.5")}
                </span>
              </div>
          </div>
      </div>
    </>
  )
};

export default ServicePage8;