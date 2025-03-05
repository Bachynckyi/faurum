import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  console.log(process.env.PUBLIC_URL);

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

  return (
    <Helmet>
      <meta property="og:image" content={logoMap[lang] || logoMap.ua} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteNameMap[lang] || siteNameMap.ua} />
    </Helmet>
  );
};

export default MetaTags;