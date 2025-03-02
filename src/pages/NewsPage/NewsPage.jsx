import scss from './NewsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from "react-icons/md";
import { news } from 'news';
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import OptimizedImage from 'components/OptimazedImage/OptimazedImage';
import useMetaData from "../../hooks/useMetaData";

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const { metaLogo, siteName } = useMetaData();

  const elements = news.map(({ id, ...props }) => {
    return (
      <NavLink className={scss.slider_card} key={id} to={`/${i18n.language}/news/${id}`}>
        <OptimizedImage src={props.image1} alt='newsImage' className={scss.slider_image}/>
        <div className={scss.slider_text_wrapper}>
            <span className={scss.slider_text}>{props[`title${i18n.language.toUpperCase()}`]}</span>
            <div className={scss.bottom_wrapper}>
              <div className={scss.slider_date_wrapper}>
                <CalendarIcon/>
                <span className={scss.slider_date}><span className={scss.slider_date_decor}>| </span> {props.date}</span>
              </div>
              <MdArrowOutward className={scss.icon}/>
            </div>
        </div>
      </NavLink>
    );
  });

  return (
    <>
      <Helmet>
        <title>{t("News_meta_title")}</title>
        <meta name="description" content={t("News_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/news"></link> */}
        <meta property="og:title" content={t("News_meta_title")} />
        <meta property="og:description" content={t("News_meta_description")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/> 
      </Helmet>
      <div className={scss.container}>
            <div className={scss.content_wrapper}>
              <h1 className={scss.title}>{t("News_title")}</h1>
              <div className={scss.news_wrapper}>
                  {elements}
              </div>
            </div>
      </div>
    </>
  )
};

export default NewsPage;
