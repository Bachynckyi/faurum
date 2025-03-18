import scss from "./VideoPage.module.scss";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import MetaTags from "./../../helpers/metaTags";

const VideoPage = () => {
  const { t } = useTranslation();
  const isSnap = navigator.userAgent === "ReactSnap";
  const metaTags = MetaTags(); 

  return (
    <>      
      <Helmet>
        <title>{t("Video_meta_title")}</title>
        <meta name="description" content={t("Video_meta_description")} />
        <meta property="og:title" content={t("Video_meta_title")} />
        <meta property="og:description" content={t("Video_meta_description")} />
        {metaTags}
      </Helmet>
      <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("Video_title")}</h1>
          {!isSnap && (
              <div className={scss.video_wrapper}>
                <ReactPlayer
                  url="https://www.youtube-nocookie.com/watch?v=wc8NOpoWYcE"
                  controls={true}
                  width="100%"
                  height="100%"
                  className={scss.react_player}
                  config={{
                    youtube: {
                      playerVars: { rel: 0, modestbranding: 1 },
                    },
                  }}
                />
              </div>
            )}
        </div>
      </div>
    </> 
  );
};

export default VideoPage;





