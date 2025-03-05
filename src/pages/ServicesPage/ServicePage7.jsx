import scss from "./ServicePage.module.scss";
import service7 from '../../images/services/service7.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const ServicePage7 = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();

  return (
    <>
      <Helmet>
        <title>{t("Service_title7")}</title>
        <meta name="description" content={t("Home_services_description7")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title7")} />
        <meta property="og:description" content={t("Home_services_description7")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title7")}</h1>
            <div className={scss.content_wrapper}>
              <OptimizedImage src={service7} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text7")}</span>
            </div>
        </div>
      </div>
    </> 
  )
};

export default ServicePage7;