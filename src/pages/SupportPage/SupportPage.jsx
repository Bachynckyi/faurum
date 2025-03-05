import scss from './SupportPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import QR from "../../images/QR.png";
import { MdContentCopy } from "react-icons/md";
import copy from 'copy-to-clipboard';
import Notiflix from 'notiflix';
import { Helmet } from "react-helmet-async";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';
import MetaTags from "./../../helpers/metaTags";

const SupportPage = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState("UAH");
  const metaTags = MetaTags();

  const onChange = (event) => {
    setCurrency(event.target.value);
  };

  const showUserMessage = () => {
    Notiflix.Notify.success(t("Support_notiflix_clipboard"), {timeout: 1000, position: "center-top", showOnlyTheLastOne: true});
  };

  return (
    <>
        <Helmet>
            <title>{t("Support_meta_title")}</title>
            <meta name="description" content={t("Support_meta_description")}/>
            <meta property="og:title" content={t("Support_meta_title")} />
            <meta property="og:description" content={t("Support_meta_description")}/>
            {metaTags} 
        </Helmet>
        <div className={scss.container}>
            <div className={scss.content_wrapper}>
                <h1 className={scss.title}>{t("Support_title")}</h1>
                <div className={scss.input_wrapper}>
                    <label className={scss.input_option} htmlFor="UAH"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="UAH"
                            name="currency"
                            value="UAH"
                            onChange={onChange}
                            checked={currency === "UAH"}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>UAH</span>
                    </label>
                    <label className={scss.input_option} htmlFor="USD"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="USD"
                            name="currency"
                            value="USD"
                            onChange={onChange}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>USD</span>
                    </label>
                    <label className={scss.input_option} htmlFor="GBP"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="GBP"
                            name="currency"
                            value="GBP"
                            onChange={onChange}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>GBP</span>
                    </label>
                    <label className={scss.input_option} htmlFor="EUR"> 
                        <input
                            className={scss.radio_button}
                            type="radio"
                            id="EUR"
                            name="currency"
                            value="EUR"
                            onChange={onChange}
                        />
                        <span className={scss.custom_button}></span>
                        <span className={scss.input_name}>EUR</span>
                    </label>
                </div>
                <div className={scss.details_wrapper}>
                    {currency === "UAH" && (
                        <>
                            <ul className={scss.details_list}>
                                <li className={scss.details_item}>
                                    <p className={scss.details_name}>{t("Support_name")}:</p>
                                    <p className={scss.details_data}>
                                        <span className={scss.details_text}>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                        <MdContentCopy className={scss.icon_copy} onClick={() => {
                                            copy("ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ"); 
                                            showUserMessage();
                                        }}/>   
                                    </p>
                                </li>
                                <li className={scss.details_item}>
                                    <p className={scss.details_name}>{t("Support_code")}:</p>
                                    <p className={scss.details_data}>
                                        <span className={scss.details_text}>44903159</span>
                                        <MdContentCopy className={scss.icon_copy} onClick={() => {
                                            copy("44903159"); 
                                            showUserMessage();
                                        }}/> 
                                    </p>
                                </li>
                                <li className={scss.details_item}>
                                    <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                                    <p className={scss.details_data}>
                                        <span className={scss.details_text}>АТ КБ «ПриватБанк»</span>
                                        <MdContentCopy className={scss.icon_copy} onClick={() => {
                                            copy("АТ КБ «ПриватБанк»"); 
                                            showUserMessage();
                                        }}/> 
                                    </p>
                                </li>
                                <li className={scss.details_item}>
                                    <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                                    <p className={scss.details_data}>
                                        <span className={scss.details_text}>UA533052990000026003026235611</span>
                                        <MdContentCopy className={scss.icon_copy} onClick={() => {
                                            copy("UA533052990000026003026235611"); 
                                            showUserMessage();
                                        }}/> 
                                    </p>
                                </li>
                            </ul>
                            <h2 className={scss.subtitle}>{t("Support_Privat")}</h2>
                            <OptimizedImage src={QR} alt="QR" className={scss.qr_code}/>
                        </>
                    )}
                    {currency === "USD" && (
                        <ul className={scss.details_list}>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_name")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ"); 
                                        showUserMessage();
                                    }}/>   
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>UA533052990000026003026235611</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("UA533052990000026003026235611"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>JSC CB "PRIVATBANK", 1D HRUSHEBSKOGO STR., KYIV, 01001, UKRAINE</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("АТ КБ «ПриватБанк»"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_SWIFT_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>PBANUA2X</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("PBANUA2X"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>J P Morgan Chase Bank, Bournemouth, UK</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("J P Morgan Chase Bank, Bournemouth, UK"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>CHASGB2L</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("CHASGB2L"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>24549501 SORT CODE 609242</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("24549501 SORT CODE 609242"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li> 
                        </ul>
                    )}
                    {currency === "EUR" && (
                        <ul className={scss.details_list}>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_name")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ"); 
                                        showUserMessage();
                                    }}/>   
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>UA173052990000026000016228095</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("UA173052990000026000016228095"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>JSC CB "PRIVATBANK", 1D HRUSHEBSKOGO STR., KYIV, 01001, UKRAINE</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("АТ КБ «ПриватБанк»"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_SWIFT_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>PBANUA2X</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("PBANUA2X"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>Commerzbank AG, Frankfurt am Main, Germany</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("Commerzbank AG, Frankfurt am Main, Germany"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>COBADEFF</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("COBADEFF"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>400886700401</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("400886700401"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>CHASDEFX</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("CHASDEFX"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>6231605145</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("6231605145"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>THE BANK OF NEW YORK MELLON, FRANKFURT AM MAIN</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("THE BANK OF NEW YORK MELLON, FRANKFURT AM MAIN"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>IRVTDEFX</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("IRVTDEFX"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>5184099710, IBAN DE39503303005184099710</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("5184099710, IBAN DE39503303005184099710"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>CITIBANK EUROPE PLC</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("CITIBANK EUROPE PLC"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>CITIIE2X</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("CITIIE2X"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>0042997188, IBAN IE96CITI99005142997188</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("0042997188, IBAN IE96CITI99005142997188"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>  
                        </ul>
                    )}
                    {currency === "GBP" && (
                        <ul className={scss.details_list}>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_name")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("ГО ВСЕУКРАЇНСЬКА АСОЦІАЦІЯ ГЕМОКОРЕКЦІЇ ТА РЕАБІЛІТАЦІЇ"); 
                                        showUserMessage();
                                    }}/>   
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_IBAN")} IBAN:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>UA943052990000026009046226660</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("UA943052990000026009046226660"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Suppport_bank")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>JSC CB "PRIVATBANK", 1D HRUSHEBSKOGO STR., KYIV, 01001, UKRAINE</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("АТ КБ «ПриватБанк»"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_SWIFT_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>PBANUA2X</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("PBANUA2X"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item_correspondent}>
                                <p className={scss.details_name}>{t("Support_correspondent")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>J P Morgan Chase Bank, Bournemouth, UK</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("J P Morgan Chase Bank, Bournemouth, UK"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_code")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>CHASGB2L</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("CHASGB2L"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li>
                            <li className={scss.details_item}>
                                <p className={scss.details_name}>{t("Support_correspondent_account")}:</p>
                                <p className={scss.details_data}>
                                    <span className={scss.details_text}>24549501 SORT CODE 609242</span>
                                    <MdContentCopy className={scss.icon_copy} onClick={() => {
                                        copy("24549501 SORT CODE 609242"); 
                                        showUserMessage();
                                    }}/> 
                                </p>
                            </li> 
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </> 
  )
};

export default SupportPage;

