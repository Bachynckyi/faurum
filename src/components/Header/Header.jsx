import scss from './Header.module.scss';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Polygon} from "../../images/polygon.svg";
import { ReactComponent as HandshakeWhite} from "../../images/handshake_white.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../images/facebook_iconH.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram_iconH.svg';
import { IoIosArrowDown } from "react-icons/io";
import i18next from 'i18next';
import { LOCALS } from 'i18n/constants';
import { useTranslation } from 'react-i18next';
import "../../i18n";
import Loader from 'components/Loader/Loader';

const Header = () => {
  const [isActiveMenuLang, setIsActiveMenuLang] = useState(false);
  const [isActiveMenuMobileLang, setIsActiveMenuMobileLang] = useState(false);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const [aboutSubmenuMobile, setAboutSubmenuMobile] = useState(false);
  const [servicesSubmenuMobile, setServicesSubmenuMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const [langOptions, setLangOptions] = useState([]);
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    const currentLang = i18n.language.toUpperCase(); 
    if(currentLang.includes("UK" || "UA")) {
      setLangOptions(["UK", "EN", "DE"]);
    }
    else if(currentLang.includes("DE")) {
      setLangOptions(["DE", "EN", "UK",]);
    }
    else if(currentLang.includes("RU")) {
      setLangOptions(["UK", "EN", "DE"]);
    }
    else {
      setLangOptions(["EN", "DE", "UK"]);
    }
  }, [i18n.language])

  const toggleAboutSubmenuMobile = (e) => {
    e.preventDefault();
    setAboutSubmenuMobile(!aboutSubmenuMobile);
  };

  const toggleServicesSubmenuMobile = (e) => {
    e.preventDefault();
    setServicesSubmenuMobile(!servicesSubmenuMobile);
  };

  const toggleLangMenu = () => {
    setIsActiveMenuLang(!isActiveMenuLang);
  };

  const openMobileMenu = () => {
    document.body.style.cssText = `overflow-y: hidden`;
    setIsActiveMobileMenu(true);
    setIsActiveMenuLang(false);
    setIsActiveMenuMobileLang(false);
  };

  const closeMobileMenu = () => {
    document.body.style.cssText = `overflow-y: auto`;
    setIsActiveMobileMenu(false);
    setTimeout(() => {
      setIsActiveMenuLang(false);
      setIsActiveMenuMobileLang(false);
      setAboutSubmenuMobile(false);
      setServicesSubmenuMobile(false);
    }, 1000)
  };

  const toggleLangMenuMobile = () => {
    setIsActiveMenuMobileLang(!isActiveMenuMobileLang);
  };

  const disableNavLink = (e) => {
    e.preventDefault();
  };

  const changeLanguage = (lang) => {
    setLoading(true);
    document.body.style.cssText = `overflow-y: hidden`
    setTimeout(() => {
      document.body.style.cssText = `overflow-y: auto`
      setLoading(false);
    }, 1500);

    setTimeout(() => {
      if(lang === "EN"){
        i18next.changeLanguage(LOCALS.EN);
      }
      else if (lang === "DE"){
        i18next.changeLanguage(LOCALS.DE);
      }
      else if (lang === "UK"){
        i18next.changeLanguage(LOCALS.UK);
      }
      setIsActiveMenuLang(false);
      setIsActiveMenuMobileLang(false);
    }, 400);

  };

  return (
    <>    
      {loading === true && (<Loader/>)}
      <header className={scss.header}>
        <div className={scss.menu_container}>
          <nav>
            <ul className={scss.nav_list}>
              <li className={scss.nav_item}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/">{t("Header_nav1")}</NavLink>
              </li>
              <li className={scss.nav_item_about}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/about" onClick={disableNavLink}>{t("Header_nav2")}</NavLink>
                <IoIosArrowDown className={scss.arrow_icon}/>
                <div className={scss.about_submenu}>
                    <NavLink to="/about/video" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>{t("Header_subnav1")}</NavLink>
                    <NavLink to="/about/honors" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>{t("Header_subnav2")}</NavLink>
                    <NavLink to="/about/presentation" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>{t("Header_subnav3")}</NavLink>
                    <NavLink to="/about/anthroposophical-medicine" className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item}>{t("Header_subnav14")}</NavLink>
                </div>
              </li>
              <li className={scss.nav_item_services}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/services" onClick={disableNavLink}>{t("Header_nav3")}</NavLink>
                <IoIosArrowDown className={scss.arrow_icon}/>
                <div className={scss.services_submenu}>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">{t("Header_subnav4")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/konsultaciya-psihologa">{t("Header_subnav5")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/postizometrichna-relaksaciya">{t("Header_subnav6")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/refleksoterapiya">{t("Header_subnav7")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/manualna-terapiya-hrebta-ta-suglobiv">{t("Header_subnav8")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/ritmichne-vtirannya">{t("Header_subnav9")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/kinezioterapiya">{t("Header_subnav10")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/maslyano-dispersijni-vanni">{t("Header_subnav12")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_item_active : scss.submenu_item} to="/services/aparatna-presoterapiya">{t("Header_subnav13")}</NavLink>
                </div>
              </li>
              <li className={scss.nav_item}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/news">
                  {t("Header_nav4")}
                </NavLink>
              </li>
              <li className={scss.nav_item}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/reviews">
                  {t("Header_nav5")}
                </NavLink>
              </li>
              <li className={scss.nav_item}>
                <NavLink className={({isActive}) => isActive ? scss.nav_link_current : scss.nav_link} to="/partners">
                  {t("Header_nav6")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={scss.header_wrapper}>
            <Link className={scss.header_button} to={"/support-project"}>
              <HandshakeWhite/>
              <span className={scss.header_button_text}>{t("Header_button_support")}</span>
            </Link>
            <Link className={scss.header_button_full} to={"/support-project"}>
              <HandshakeWhite/>
              <span className={scss.header_button_text}>{t("Header_button_support_full")}</span>
            </Link>
            <div className={scss.lang_switcher_container} >
              <button type="button" onClick={toggleLangMenu} className={scss.lang_switcher} aria-label="change language" >
                <span className={scss.lang}>{langOptions[0]}</span>
                <Polygon className={isActiveMenuLang ? (scss.polygon_reverse) : (scss.polygon)}/>
              </button>
              <div className={isActiveMenuLang ? (scss.lang_menu_active) : (scss.lang_menu)}> 
                <span className={scss.lang_n} onClick={() => {changeLanguage(langOptions[1])}}>{langOptions[1]}</span>
                <span className={scss.lang_n} onClick={() => {changeLanguage(langOptions[2])}}>{langOptions[2]}</span>
              </div>
            </div>
            <button type="button" className={scss.menu_button} onClick={openMobileMenu} aria-label="menu"><IoMdMenu className={scss.menu_icon}/></button>
            <div className={scss.socials}>
              <Link to="https://www.facebook.com/profile.php?id=61571048378069&sk=about" target='_blank'><FacebookIcon className={scss.socials_icon_facebook}/></Link>
              <Link to="https://t.me/centeraurum" target='_blank'><TelegramIcon className={scss.socials_icon_telegram}/></Link>
            </div>
          </div>
        </div>
        <div className={isActiveMobileMenu ? (scss.mobile_menu_active) : (scss.mobile_menu)}>
            <div className={scss.mobile_menu_buttons}>
              <div className={scss.mobile_lang_container}>
                <button className={scss.mobile_lang_switcher} onClick={toggleLangMenuMobile} type="button" aria-label="change language">
                    <span className={scss.lang}>{langOptions[0]}</span>
                    <Polygon className={isActiveMenuMobileLang ? (scss.polygon_reverse) : (scss.polygon)}/>
                </button>
                <div className={isActiveMenuMobileLang ? (scss.lang_mobile_active) : (scss.lang_mobile_menu)}> 
                <span className={scss.lang} onClick={() => {changeLanguage(langOptions[1])}}>{langOptions[1]}</span>
                <span className={scss.lang} onClick={() => {changeLanguage(langOptions[2])}}>{langOptions[2]}</span>
                </div>
              </div>
              <button className={scss.close_menu} onClick={closeMobileMenu} type="button" aria-label="close menu">
                <IoMdClose className={isActiveMobileMenu ? (scss.close_menu_icon) : (scss.close_menu_icon_active)} onClick={closeMobileMenu}/>
              </button>
            </div>
            <nav>
              <ul className={scss.mobile_nav_list}>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/" onClick={closeMobileMenu}>{t("Header_nav1")}</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={toggleAboutSubmenuMobile} to="/about">
                    <span>{t("Header_nav2")}</span>
                    <IoIosArrowDown className={aboutSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                  </NavLink>
                  <div className={aboutSubmenuMobile === true ? (scss.about_mobile_submenu_active) : (scss.about_mobile_submenu)}>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/video" onClick={closeMobileMenu}>{t("Header_subnav1")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/honors" onClick={closeMobileMenu}>{t("Header_subnav2")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/presentation" onClick={closeMobileMenu}>{t("Header_subnav3")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} to="/about/anthroposophical-medicine" onClick={closeMobileMenu}>{t("Header_subnav14")}</NavLink>
                  </div>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={toggleServicesSubmenuMobile} to="/services">
                    <span>{t("Header_nav3")}</span>
                    <IoIosArrowDown className={servicesSubmenuMobile === true ? (scss.mobile_arrow_reverse) : (scss.mobile_arrow)}/>
                  </NavLink>
                  <div className={servicesSubmenuMobile === true ? (scss.services_mobile_submenu_active) : (scss.services_mobile_submenu)}>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini">{t("Header_subnav4")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/konsultaciya-psihologa">{t("Header_subnav5")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/postizometrichna-relaksaciya">{t("Header_subnav6")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/refleksoterapiya">{t("Header_subnav7")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/manualna-terapiya-hrebta-ta-suglobiv">{t("Header_subnav8")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/ritmichne-vtirannya">{t("Header_subnav9")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/kinezioterapiya">{t("Header_subnav10")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/maslyano-dispersijni-vanni">{t("Header_subnav12")}</NavLink>
                    <NavLink className={({isActive}) => isActive ? scss.submenu_mobile_item_active : scss.submenu_mobile_item} onClick={closeMobileMenu} to="/services/aparatna-presoterapiya">{t("Header_subnav13")}</NavLink>
                  </div>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} onClick={closeMobileMenu} to='/news'>{t("Header_nav4")}</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/reviews" onClick={closeMobileMenu}>{t("Header_nav5")}</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? scss.current : scss.nav} to="/partners" onClick={closeMobileMenu}>{t("Header_nav6")}</NavLink>
                </li>
              </ul>
            </nav>
            <Link className={scss.button_support} to={"/support-project"} onClick={closeMobileMenu}>
                <HandshakeWhite/>
                <span>{t("Header_button_support")}</span>
            </Link>
        </div>
      </header>
    </>
  )
};

export default Header;
