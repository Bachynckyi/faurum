import { useTranslation } from "react-i18next";

const MetaTags = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const logoMap = {
    en: `${process.env.PUBLIC_URL}/logo-en.png`,
    de: `${process.env.PUBLIC_URL}/logo-de.png`,
    ua: `${process.env.PUBLIC_URL}/logo-ua.png`
  };

  const siteNameMap = {
    en: "AURUM",
    de: "AURUM",
    ua: "АУРУМ"
  };

  return [
    <meta key="og:image" property="og:image" content={logoMap[lang] || logoMap.ua} />,
    <meta key="og:image:width" property="og:image:width" content="1200" />,
    <meta key="og:image:height" property="og:image:height" content="630" />,
    <meta key="og:site_name" property="og:site_name" content={siteNameMap[lang] || siteNameMap.ua} />
  ];
};

export default MetaTags;
