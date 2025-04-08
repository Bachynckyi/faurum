import scss from './TeamMemberPage.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../images/team/team_member_1.webp';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const TeamMember1Page = () => {
  const { t } = useTranslation();
  const metaTags = MetaTags();

  return (
    <> 
      <Helmet>
        <title>{t("TeamMember1_name")}</title>
        <meta name="description" content={t("TeamMember1_position")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/team"></link> */}
        <meta property="og:title" content={t("TeamMember1_name")} />
        <meta property="og:description" content={t("TeamMember1_position")}/>
        {metaTags}
      </Helmet>
      <div className={scss.container}>
          <div className={scss.content_wrapper}>
              <div className={scss.image_wrapper}>
                <OptimizedImage src={photo} alt="team_member" className={scss.image}/>
                <h1 className={scss.title}>{t("TeamMember1_name")}</h1>
                <h2 className={scss.subtitle}>{t("TeamMember1_position")}</h2>
              </div>
              <div className={scss.list_wrapper}>
                <ul className={scss.list}>{t("TeamMember_specialization")}:
                  <li className={scss.list_item}>{t("TeamMember1_specialization1")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_specialization2")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_specialization3")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_specialization4")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_specialization5")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_specialization6")}</li>
                </ul>
                <ul className={scss.list}>{t("TeamMember_education")}:
                  <li className={scss.list_item}>{t("TeamMember1_text1")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_text2")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_text3")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_text4")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_text5")}</li>
                  <li className={scss.list_item}>{t("TeamMember1_text6")}</li>
                </ul>
                <span className={scss.text}>{t("TeamMember1_text7")}</span>
              </div>
          </div>
      </div>
    </>    
  )
};

export default TeamMember1Page;