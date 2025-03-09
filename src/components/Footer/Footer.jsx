import scss from './Footer.module.scss';
import { ReactComponent as MapIcon } from '../../images/map_icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../../images/email_icon.svg';
import { ReactComponent as LogoUA } from '../../images/Aurum_logo_UA.svg';
import { ReactComponent as LogoDE } from '../../images/Aurum_logo_DE.svg';
import { ReactComponent as LogoEN } from '../../images/Aurum_logo_EN.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook_iconF.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram_iconF.svg';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Footer = () => {
const todayDate = new Date();
const currentYear = todayDate.getFullYear();
const { t, i18n } = useTranslation();
const [logo, setLogo] = useState("");

useEffect(() => {
    const currentLang = i18n.language;
    if(currentLang.includes("uk") || currentLang.includes("ua") || currentLang.includes("ru")) {
        setLogo("ua");
      }
      else if(currentLang.includes("de")) {
        setLogo("de");
      }
      else {
        setLogo("en");
      }
  }, [i18n.language]);

  return (
    <footer className={scss.footer_container}>
        <div className={scss.footer_wrapper}> 
            <div className={scss.main_wrapper}>
                <div className={scss.contacts_wrapper}>
                    <p className={scss.contacts_title}>{t("Footer_contacts_title")}</p>
                    <div className={scss.contacts_info}>
                        <MapIcon/>
                        <address>
                            <Link className={scss.contacts_text} 
                            to="https://maps.app.goo.gl/bFPhhverXMRFi6nx9"
                            target='_blank'
                            >{t("Footer_contacts_address")}</Link>
                        </address>
                    </div>
                    <div className={scss.contacts_info}>
                        <PhoneIcon/>
                        <a className={scss.contacts_text} href="tel: +380 (98) 419-03-43">+380 (98) 419-03-43</a>
                    </div>
                    <div className={scss.contacts_info}>
                        <EmailIcon/>
                        <a className={scss.contacts_text} href="mailto: info@clinic-aurum.com">info@clinic-aurum.com</a>
                    </div>
                    <div className={scss.contacts_services}>
                        <Link to="https://www.facebook.com/profile.php?id=61571048378069&sk=about" target='_blank'><FacebookIcon className={scss.contacts_icon_facebook}/></Link>
                        <Link to="https://t.me/centeraurum" target='_blank'><TelegramIcon className={scss.contacts_icon_telegram}/></Link>
                    </div>
                </div>
                <div className={scss.services_container}>
                    <p className={scss.services_title}>{t("Footer_services_title")}</p>
                    <ul className={scss.services_list}>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini`}>{t("Footer_nav1")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/konsultaciya-psihologa`}>{t("Footer_nav2")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/postizometrichna-relaksaciya`}>{t("Footer_nav3")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/refleksoterapiya`}>{t("Footer_nav4")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/manualna-terapiya-hrebta-ta-suglobiv`}>{t("Footer_nav5")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/ritmichne-vtirannya`}>{t("Footer_nav6")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/kinezioterapiya`}>{t("Footer_nav7")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/maslyano-dispersijni-vanni`}>{t("Footer_nav8")}</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? scss.services_item_active : scss.services_item} to={`/${i18n.language}/services/aparatna-presoterapiya`}>{t("Footer_nav9")}</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={scss.logo_container}>
                    {logo === "ua" && (<NavLink to="/"><LogoUA className={scss.logo}/></NavLink>)}
                    {logo === "de" && (<NavLink to="/"><LogoDE className={scss.logo}/></NavLink>)}
                    {logo === "en" && (<NavLink to="/"><LogoEN className={scss.logo}/></NavLink>)}
                    <div className={scss.politics_license_wrapper_desktop}>
                        <p className={scss.license}>{t("Footer_license")}</p>
                        <p className={scss.license}>© {t("Footer_center_name")} {currentYear}</p>
                    </div>
                </div>
            </div>
            <div className={scss.politics}>
                <p className={scss.license}>{t("Footer_license")}</p>
                <p className={scss.license}>© {t("Footer_center_name")} {currentYear}</p>
            </div>  
        </div>
    </footer>
        
  )
};

export default Footer;