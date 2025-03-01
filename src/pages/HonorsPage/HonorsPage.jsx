import scss from './HonorsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import image from '../../images/favicon.png';

const honorImages = Array.from({ length: 12 }, (_, i) =>
  require(`../../images/honors/honor${i + 1}.jpg`)
);

const HonorsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Honors_meta_title")}</title>
        <meta name="description" content={t("Honors_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Honors_meta_title")} />
        <meta property="og:description" content={t("Honors_meta_description")}/>
        <meta property="og:url" content="https://Bachynckyi.github.io/faurum/about/honors" />
        <meta property="og:image" content={image} />
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

