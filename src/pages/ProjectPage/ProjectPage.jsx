import scss from './ProjectPage.module.scss';
import { useTranslation } from 'react-i18next';
import image1 from "../../images/project/project1.jpg";
import image2 from "../../images/project/project2.jpg";
import image3 from "../../images/project/project3.jpg";
import image4 from "../../images/project/project4.jpg";
import image5 from "../../images/project/project5.jpg";
import image6 from "../../images/project/project6.jpg";
import image7 from "../../images/project/project7.jpg";
import image8 from "../../images/project/project8.jpg";
import image9 from "../../images/project/project9.jpg";
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ProjectPage = () => {
  const { t } = useTranslation();
  return (
    <>
        <Helmet>
            <title>{t("Project_meta_title")}</title>
            <meta name="description" content={t("Project_meta_description")}/>
            <meta property="og:title" content={t("Project_meta_title")}/>
            <meta property="og:description" content={t("Project_meta_description")}/>
        </Helmet>
        <div className={scss.container}>
            <div className={scss.content_wrapper}>
                <h1 className={scss.title}>{t("Project_title")}</h1>
                <div className={scss.intro_wrapper}>
                    <p className={scss.text}>{t("Project_text1")} {t("Project_text2")}</p>
                    <div className={scss.images_wrapper1}>
                        <OptimizedImage src={image3} alt="image3" className={scss.image}/>
                        <div className={scss.images_wrapper2}>
                            <OptimizedImage src={image1} alt="image1" className={scss.image}/>
                            <OptimizedImage src={image2} alt="image2" className={scss.image}/>
                        </div>
                    </div>
                </div>
                <div className={scss.parzival_wrapper}>
                    <div className={scss.parzival_wrapper1}>
                        <OptimizedImage src={image4} alt="image4" className={scss.image}/>
                        <div className={scss.parzival_wrapper2}>
                            <p className={scss.text2}>{t("Project_list1_title")}</p>
                            <ul className={scss.list}>
                                <li>{t("Project_list1_item1")}</li>
                                <li>{t("Project_list1_item2")}</li>
                                <li>{t("Project_list1_item3")}</li>
                                <li>{t("Project_list1_item4")}</li>
                            </ul>
                        </div>     
                    </div>
                    <div className={scss.images_wrapper1}>
                        <div className={scss.images_wrapper3}>
                            <OptimizedImage src={image5} alt="image5" className={scss.image2}/>
                            <OptimizedImage src={image6} alt="image6" className={scss.image2}/>
                        </div>
                        <OptimizedImage src={image7} alt="image7" className={scss.image}/>
                    </div>
                </div>
                <div className={scss.finish_wrapper}>
                    <div>
                        <p className={scss.text2}>{t("Project_text3")}</p>
                        <p className={scss.text2}>{t("Project_text4")}</p>
                    </div>
                    <div>
                        <p className={scss.text2}>{t("Project_list2_title")}</p>
                        <ul className={scss.list}>
                            <li>{t("Project_list2_item1")}</li>
                            <li>{t("Project_list2_item2")}</li>
                            <li>{t("Project_list2_item3")}</li>
                            <li>{t("Project_list2_item4")}</li>
                            <li>{t("Project_list2_item5")}</li>
                            <li>{t("Project_list2_item6")}</li>
                        </ul>
                    </div>
                </div>
                <div className={scss.images_wrapper1}>
                    <OptimizedImage src={image8} alt="image8" className={scss.image}/>
                    <OptimizedImage src={image9} alt="image9" className={scss.image}/>
                </div>
            </div>
        </div>
    </>    
  )
};

export default ProjectPage;

