import scss from './NewsOnePage.module.scss';
import { news } from 'news';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const NewsOnePage = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("");
  const { id: newsId } = useParams();
  const [error, setError] = useState(false);
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    const currentLang = i18n.language.toUpperCase(); 
    if(currentLang.includes("UK" || "UA" || "RU")) {
        setCurrentLang("UA");
    }
    else if(currentLang.includes("DE")) {
        setCurrentLang("DE");
    }
    else {
        setCurrentLang("EN");
    }
    const foundNews = news.find(item => item.id === newsId);
    if (!foundNews) {
      setError(true);
    } else {
      setError(false);
      setCurrentNews(foundNews);
    }
  // eslint-disable-next-line 
  }, [i18n.language]);

  if (error) return <NotFoundPage/>;

  return (
    <>
      <Helmet>
        <title>{currentNews[`title${currentLang}`]}</title>
        <meta name="description" content={currentNews[`text1${currentLang}`]}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/news"></link> */}
        <meta property="og:title" content={currentNews[`title${currentLang}`]}/>
        <meta property="og:description" content={currentNews[`text1${currentLang}`]}/>
      </Helmet>
      <div className={scss.container}>
        {currentNews && (
          <div className={scss.content_wrapper}>
              <div>
                {currentNews[`text1${currentLang}`] && <p className={scss.text}>{currentNews[`text1${currentLang}`]}</p>}
                {currentNews.image1 && <OptimizedImage src={currentNews.image1} alt="image1" className={scss.image}/>}
                {currentNews.image2 && <OptimizedImage src={currentNews.image2} alt="image2" className={scss.image}/>}
              </div>
              <div className={scss.block_wrapper}>
                {currentNews[`text2${currentLang}`] && <p className={scss.text}>{currentNews[`text2${currentLang}`]}</p>}
                {currentNews.image3 && <OptimizedImage src={currentNews.image3} alt="image3" className={scss.image}/>}
                {currentNews.image4 && <OptimizedImage src={currentNews.image4} alt="image4" className={scss.image}/>}
                {currentNews.image5 && <OptimizedImage src={currentNews.image5} alt="image5" className={scss.image}/>}
              </div>
          </div>
        )}
      </div>
    </>
  )
};

export default NewsOnePage;
