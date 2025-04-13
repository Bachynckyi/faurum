import scss from './ReviewsPage.module.scss';
import userIcon from '../../images/user_icon.webp';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";
import ReactPlayer from "react-player";
import { useRef } from "react";

const ReviewsPage = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();
  const isSnap = navigator.userAgent === "ReactSnap";
  const playersRef = useRef([]);

  const videos = [
    "https://www.youtube-nocookie.com/watch?v=O8hW6GgZ6v4",
    "https://www.youtube-nocookie.com/watch?v=mzYagWGKGlw",
  ];

  const handlePlay = (index) => {
    playersRef.current.forEach((player, i) => {
      if (i !== index && player) {
        player.getInternalPlayer().pauseVideo(); 
      }
    });
  };

  return (
    <>
        <Helmet>
            <title>{t("Reviews_meta_title")}</title>
            <meta name="description" content={t("Reviews_meta_description")}/>
            <meta property="og:title" content={t("Reviews_meta_title")}/>
            <meta property="og:description" content={t("Reviews_meta_description")}/>
            {metaTags}
        </Helmet>
        <div className={scss.container}>
            <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Reviews_title")}</h1>
            {!isSnap &&
            videos.map((url, index) => (
              <div className={scss.video_wrapper} key={index}>
                <ReactPlayer
                  ref={(el) => (playersRef.current[index] = el)}
                  url={url}
                  controls={true}
                  width="100%"
                  height="100%"
                  className={scss.react_player}
                  onPlay={() => handlePlay(index)}
                  config={{
                    youtube: {
                      playerVars: { rel: 0, modestbranding: 1 },
                    },
                  }}
                />
              </div>
            ))}
            <ul className={scss.list}>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name1")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text1")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name2")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text2")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name3")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text3")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name4")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text4")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name5")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text5")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name6")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text6")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name7")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text7")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name8")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text8")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name9")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text9")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name10")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text10")}</span>
                </li>
                <li className={scss.review_card}>
                    <div className={scss.review_user}>
                        <OptimizedImage src={userIcon} alt='user'/>
                        <span className={scss.review_name}>{t("Reviews_card_name11")}</span>
                    </div>
                    <span className={scss.review_text}>{t("Reviews_card_text11")}</span>
                </li>
            </ul>
            </div>
        </div>
    </>
  )
};

export default ReviewsPage;

