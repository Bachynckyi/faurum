import scss from "./ServicePage.module.scss";
import service4 from '../../images/services/service4.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ServicePage4 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Service_title4")}</title>
        <meta name="description" content={t("Home_services_description4")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title4")} />
        <meta property="og:description" content={t("Home_services_description4")}/>
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title4")}</h1>
              <div className={scss.content_wrapper}>
                <OptimizedImage src={service4} alt='serviceImage' className={scss.image}/>
                <span className={scss.description}>{t("Service_text4")}</span>
              </div>
          </div>
      </div>
    </>   
  )
};

export default ServicePage4;