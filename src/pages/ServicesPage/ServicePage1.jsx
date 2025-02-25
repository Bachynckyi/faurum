import scss from "./ServicePage.module.scss";
import service1 from '../../images/services/service1.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ServicePage1 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Service_title1")}</title>
        <meta name="description" content={t("Service_title1")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title1")} />
        <meta property="og:description" content={t("Service_title1")}/>
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title1")}</h1>
              <div className={scss.content_wrapper}>
                <OptimizedImage src={service1} alt='serviceImage' className={scss.image}/>
                <span className={scss.description}>{t("Service_text1")}</span>
              </div>         
          </div>
      </div>
    </>
  )
};

export default ServicePage1;
