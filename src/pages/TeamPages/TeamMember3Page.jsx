import scss from './TeamMemberPage.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../images/team/team_member_3.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const TeamMember3Page = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();

  return (
    <>
      <Helmet>
        <title>{t("TeamMember3_name")}</title>
        <meta name="description" content={t("TeamMember3_position")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/team"></link> */}
        <meta property="og:title" content={t("TeamMember3_name")} />
        <meta property="og:description" content={t("TeamMember3_position")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
          <div className={scss.content_wrapper}>
            <div className={scss.image_wrapper}>
              <OptimizedImage src={photo} alt="team_member" className={scss.image}/>
              <h1 className={scss.title}>{t("TeamMember3_name")}</h1>
              <h2 className={scss.subtitle}>{t("TeamMember3_position")}</h2>
            </div>
            <div className={scss.list_wrapper}>
              <ul className={scss.list}>{t("TeamMember_specialization")}:
                <li className={scss.list_item}>{t("TeamMember3_specialization1")}</li>
                <li className={scss.list_item}>{t("TeamMember3_specialization2")}</li>
              </ul>
              <ul className={scss.list}>{t("TeamMember_education")}:
                <li className={scss.list_item}>{t("TeamMember3_text1")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text2")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text3")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text4")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text5")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text6")}</li>
                <li className={scss.list_item}>{t("TeamMember3_text7")}</li>
              </ul>
              <ul className={scss.list}>{t("TeamMember_publications")}:
                <li className={scss.list_item}>
                  <Link to="http://www.ndu.edu.ua/storage/styd_visnuk/visnuk_stud_tov_29_2023.pdf" target='_blank'>
                    {t("TeamMember3_publication1")}
                  </Link>
                </li>
                <li className={scss.list_item}>
                  <Link to="https://scholar.google.fi/scholar?oi=bibs&cluster=7238710584078794728&btnI=1&hl=uk" target='_blank'>
                    {t("TeamMember3_publication2")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>  
    </>
  )
};

export default TeamMember3Page;