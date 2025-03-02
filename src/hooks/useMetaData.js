import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useMetaData = () => {
  const { i18n } = useTranslation();
  const baseUrl = window.location.origin;
  console.log(baseUrl);

  const logoMap = {
    en: `${baseUrl}/logo-en.png`,
    de: `${baseUrl}/logo-de.png`,
    ua: `${baseUrl}/logo-ua.png`,
  };

  const siteNameMap = {
    en: "AURUM",
    de: "AURUM",
    ua: "АУРУМ",
  };

  return useMemo(() => ({
    metaLogo: logoMap[i18n.language] || logoMap.ua,
    siteName: siteNameMap[i18n.language] || siteNameMap.ua,
    // eslint-disable-next-line
  }), [i18n.language]);
};

export default useMetaData;
