import scss from './TeamMemberPage.module.scss';
import { useTranslation } from 'react-i18next';
import photo from '../../images/team/team_member_2.jpg';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import useMetaData from "../../hooks/useMetaData";

const TeamMember2Page = () => {
  const { t } = useTranslation();
  const { metaLogo, siteName } = useMetaData();

  return (
    <>
      <Helmet>
        <title>{t("TeamMember2_name")}</title>
        <meta name="description" content={t("TeamMember2_name") - ("TeamMember2_position")}/>
        {/* <link rel="canonical" href="https://www.clinic-aurum.com/team"></link> */}
        <meta property="og:title" content={t("TeamMember2_name")} />
        <meta property="og:description" content={t("TeamMember2_name") - ("TeamMember2_position")}/>
        <meta property="og:image" content={metaLogo}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/> 
      </Helmet>
      <div className={scss.container}>
          <div className={scss.content_wrapper}>
              <div className={scss.image_wrapper}>
                <OptimizedImage src={photo} alt="team_member" className={scss.image}/>
                <h1 className={scss.title}>{t("TeamMember2_name")}</h1>
                <h2 className={scss.subtitle}>{t("TeamMember2_position")}</h2>
              </div>
              <div className={scss.list_wrapper}>
                <ul className={scss.list}>{t("TeamMember_specialization")}:
                  <li className={scss.list_item}>{t("TeamMember2_specialization1")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization2")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization3")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization4")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization5")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization6")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_specialization7")}</li>
                </ul>
                <ul className={scss.list}>{t("TeamMember_education")}:
                  <li className={scss.list_item}>{t("TeamMember2_text1")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text2")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text3")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text4")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text5")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text6")}</li>
                  <li className={scss.list_item}>{t("TeamMember2_text7")}</li>
                </ul>
              </div>
          </div>
      </div>
    </>    
  )
};

export default TeamMember2Page;