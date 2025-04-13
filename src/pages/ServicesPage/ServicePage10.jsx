import scss from "./ServicePage.module.scss";
import service10 from '../../images/services/service10.webp';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const ServicePage10 = () => {
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
              <div className={scss.content_wrapper10}>
                <OptimizedImage src={service10} alt='serviceImage' className={scss.image}/>
                <div className={scss.subcontainer10}>
                  <div className={scss.container_part}>
                    <span className={scss.description}>{t("Service_text10.1")}</span>
                    <span className={scss.description}><br/>{t("Service_text10.2")}</span>
                  </div>
                  <div className={scss.container_part}>
                    <span className={scss.description}>{t("Service_text10.3")}</span>
                    <span className={scss.description}><br/>{t("Service_text10.4")}</span>
                    <ul className={scss.list}>{t("Service_text10_list")}
                        <li className={scss.item}>{t("Service_text10_item1")}</li>
                        <li className={scss.item}>{t("Service_text10_item2")}</li>
                        <li className={scss.item}>{t("Service_text10_item3")}</li>
                        <li className={scss.item}>{t("Service_text10_item4")}</li>
                    </ul>
                    <span className={scss.description}><br/>{t("Service_text10.5")}</span>
                    <span className={scss.description}><br/>{t("Service_text10.6")}</span>
                    <span className={scss.description}><br/>{t("Service_text10.7")}</span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
};

export default ServicePage10;