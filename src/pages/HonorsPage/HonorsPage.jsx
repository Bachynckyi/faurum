import scss from './HonorsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import useMetaData from "../../hooks/useMetaData";

const honorImages = Array.from({ length: 12 }, (_, i) =>
  require(`../../images/honors/honor${i + 1}.jpg`)
);

const HonorsPage = () => {
  const { t } = useTranslation();
  const { metaLogo, siteName } = useMetaData();

  return (
    <>
      <Helmet>
        <title>{t("Honors_meta_title")}</title>
        <meta name="description" content={t("Honors_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Honors_meta_title")} />
        <meta property="og:description" content={t("Honors_meta_description")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:site_name" content={siteName}/>
      </Helmet>
      <div className={scss.container}>
            <div className={scss.content_wrapper}>
              <h1 className={scss.title}>{t("Honors_title")}</h1>
              <div className={scss.photo_wrapper}>
                {honorImages.map((img, index) => (
                  <OptimizedImage key={index} src={img} alt={`Honor ${index + 1}`} className={scss.photo}/>
                ))}
              </div>
          </div>
      </div>
    </>
  )
};

export default HonorsPage;

