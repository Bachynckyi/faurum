import scss from './VideoPage.module.scss';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import useMetaData from "../../hooks/useMetaData";

const VideoPage = () => {
  const { t } = useTranslation();
  const isSnap = navigator.userAgent === "ReactSnap";
  const { metaLogo, siteName } = useMetaData(); 

  return (
    <>      
      <Helmet>
        <title>{t("Video_meta_title")}</title>
        <meta name="description" content={t("Video_meta_description")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/about"></link> */}
        <meta property="og:title" content={t("Video_meta_title")} />
        <meta property="og:description" content={t("Video_meta_description")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/> 
      </Helmet>
      <div className={scss.container}>
        <div className={scss.content_wrapper}>
          <h1 className={scss.title}>{t("Video_title")}</h1>
          {!isSnap && (
            <>
              <div className={scss.video_wrapper}> 
                <ReactPlayer 
                  url='https://www.youtube-nocookie.com/watch?v=wc8NOpoWYcE' 
                  controls={true}
                  width="100%"
                  height="100%"
                  className={scss.react_player}
                  config={{
                    youtube: {
                      embedOptions: {
                        sandbox: "allow-same-origin allow-scripts allow-presentation",
                      }
                    }}}
                  />
              </div>
              <div className={scss.video_wrapper}>
                <ReactPlayer 
                  url='https://www.youtube-nocookie.com/watch?v=O8hW6GgZ6v4' 
                  controls={true}
                  width="100%"
                  height="100%"
                  className={scss.react_player}
                  config={{
                    youtube: {
                      embedOptions: {
                        sandbox: "allow-same-origin allow-scripts allow-presentation",
                      }
                    }}}
                  />
              </div>
              <div className={scss.video_wrapper}>
                <ReactPlayer 
                  url='https://www.youtube-nocookie.com/watch?v=mzYagWGKGlw' 
                  controls={true}
                  width="100%"
                  height="100%"
                  className={scss.react_player}
                  config={{
                    youtube: {
                      embedOptions: {
                        sandbox: "allow-same-origin allow-scripts allow-presentation",
                      }
                    }}}
                  />
              </div>
            </>
          )}
        </div>
      </div>
    </> 
  )
};

export default VideoPage;




