import scss from "./ServicePage.module.scss";
import service5 from '../../images/services/service5.png';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ServicePage5 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Service_title5")}</title>
        <meta name="description" content={t("Service_title5")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title5")} />
        <meta property="og:description" content={t("Service_title5")}/>
      </Helmet>
      <div className={scss.container}>
        <div className={scss.main_wrapper}>
            <h1 className={scss.title}>{t("Service_title5")}</h1>
            <div className={scss.content_wrapper}>
              <OptimizedImage src={service5} alt='serviceImage' className={scss.image}/>
              <span className={scss.description}>{t("Service_text5")}</span>
            </div>
        </div>
      </div>
    </>  
  )
};

export default ServicePage5;