import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useMetaData = () => {
  const { i18n } = useTranslation();

  const logoMap = {
    en: "/Logo_en.png",
    de: "/Logo_de.png",
    ua: "/Logo_ua.png",
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
