import scss from './ReviewsPage.module.scss';
import userIcon from '../../images/user_icon.png';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ReviewsPage = () => {
  const { t } = useTranslation();

  return (
    <>
        <Helmet>
            <title>{t("Reviews_meta_title")}</title>
            <meta name="description" content={t("Reviews_meta_description")}/>
            <meta property="og:title" content={t("Reviews_meta_title")}/>
            <meta property="og:description" content={t("Reviews_meta_description")}/>
        </Helmet>
        <div className={scss.container}>
            <div className={scss.content_wrapper}>
            <h1 className={scss.title}>{t("Reviews_title")}</h1>
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
            </ul>
            </div>
        </div>
    </>
  )
};

export default ReviewsPage;

