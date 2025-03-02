import { useMemo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useMetaData = () => {
  const { i18n } = useTranslation();
  const baseUrl = window.location.origin;

  const logoMap = {
    en: `${baseUrl}/faurum/logo-en.png`,
    de: `${baseUrl}/faurum/logo-de.png`,
    ua: `${baseUrl}/faurum/logo-ua.png`,
  };

  const siteNameMap = {
    en: "AURUM",
    de: "AURUM",
    ua: "АУРУМ",
  };

  const [metaLogo, setMetaLogo] = useState(logoMap[i18n.language] || logoMap.ua);
  const [siteName, setSiteName] = useState(siteNameMap[i18n.language] || siteNameMap.ua);

  useEffect(() => {
    setMetaLogo(logoMap[i18n.language] || logoMap.ua);
    setSiteName(siteNameMap[i18n.language] || siteNameMap.ua);
    // eslint-disable-next-line
  }, [i18n.language]);

  return useMemo(() => ({ metaLogo, siteName }), [metaLogo, siteName]);
};

export default useMetaData;
