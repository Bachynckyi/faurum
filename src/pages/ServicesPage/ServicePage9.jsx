import scss from "./ServicePage.module.scss";
import service9 from '../../images/services/service9.webp';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const ServicePage9 = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();
  
  return (
    <>
      <Helmet>
        <title>{t("Service_title10")}</title>
        <meta name="description" content={t("Home_services_description10")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/services"></link> */}
        <meta property="og:title" content={t("Service_title10")} />
        <meta property="og:description" content={t("Home_services_description10")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
          <div className={scss.main_wrapper}>
              <h1 className={scss.title}>{t("Service_title10")}</h1>
              <div className={scss.content_wrapper}>
                <OptimizedImage src={service9} alt='serviceImage' className={scss.image}/>
                <div className={scss.subcontainer}>
                  <span className={scss.description}>{t("Service_text10")}</span>
                  <ul className={scss.list}>{t("Service_list")}
                      <li className={scss.item}>{t("Service_item1")}</li>
                      <li className={scss.item}>{t("Service_item2")}</li>
                      <li className={scss.item}>{t("Service_item3")}</li>
                      <li className={scss.item}>{t("Service_item4")}</li>
                      <li className={scss.item}>{t("Service_item5")}</li>
                      <li className={scss.item}>{t("Service_item6")}</li>
                      <li className={scss.item}>{t("Service_item7")}</li>
                      <li className={scss.item}>{t("Service_item8")}</li>
                      <li className={scss.item}>{t("Service_item9")}</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
    </>
  )
};

export default ServicePage9;