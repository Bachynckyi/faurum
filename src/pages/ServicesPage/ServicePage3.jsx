import scss from "./ServicePage.module.scss";
import service3 from '../../images/services/service3.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import useMetaData from "../../hooks/useMetaData";

const ServicePage3 = () => {
  const { t } = useTranslation();
  const { metaLogo, siteName } = useMetaData();

  return (
    <>
      <Helmet>
        <title>{t("Service_title3")}</title>
        <meta name="description" content={t("Service_title3")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title3")} />
        <meta property="og:description" content={t("Service_title3")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/> 
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title3")}</h1>
              <div className={scss.content_wrapper}>
                <OptimizedImage src={service3} alt='serviceImage' className={scss.image}/>
                <span className={scss.description}>{t("Service_text3")}</span>
              </div>
          </div>
      </div>
    </>    
  )
};

export default ServicePage3;