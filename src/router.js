// import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
// import { lazy, Suspense, useEffect } from 'react';
// import Layout from 'components/Layout/Layout';
// import { AnimatePresence } from "framer-motion";
// import ScrollToTop from "../src/helpers/scrollToTop";
// import { HelmetProvider } from "react-helmet-async";
// import { motion } from "framer-motion";
// import Header from 'components/Header/Header';
// import { useTranslation } from 'react-i18next';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const AboutVideoPage = lazy(() => import('./pages/VideoPage/VideoPage'));
// const AboutHonorsPage = lazy(() => import('./pages/HonorsPage/HonorsPage'));
// const AboutPresentationPage = lazy(() => import('./pages/PresentationPage/PresentationPage'));
// const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
// const NewsOnePage = lazy(() => import('./pages/NewsOnePage/NewsOnePage'));
// const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
// const PartnersPage = lazy(() => import('./pages/PartnersPage/PartnersPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
// const ServicePage1 = lazy(() => import('./pages/ServicesPage/ServicePage1'));
// const ServicePage2 = lazy(() => import('./pages/ServicesPage/ServicePage2'));
// const ServicePage3 = lazy(() => import('./pages/ServicesPage/ServicePage3'));
// const ServicePage4 = lazy(() => import('./pages/ServicesPage/ServicePage4'));
// const ServicePage5 = lazy(() => import('./pages/ServicesPage/ServicePage5'));
// const ServicePage6 = lazy(() => import('./pages/ServicesPage/ServicePage6'));
// const ServicePage7 = lazy(() => import('./pages/ServicesPage/ServicePage7'));
// const ServicePage8 = lazy(() => import('./pages/ServicesPage/ServicePage8'));
// const ServicePage9 = lazy(() => import('./pages/ServicesPage/ServicePage9'));
// const TeamMember1Page = lazy(() => import('./pages/TeamPages/TeamMember1Page'));
// const TeamMember2Page = lazy(() => import('./pages/TeamPages/TeamMember2Page'));
// const TeamMember3Page = lazy(() => import('./pages/TeamPages/TeamMember3Page'));
// const TeamMember4Page = lazy(() => import('./pages/TeamPages/TeamMember4Page'));
// const MedicinePage = lazy(() => import('./pages/MedicinePage/MedicinePage'));
// const SupportPage = lazy(() => import('./pages/SupportPage/SupportPage'));
// const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));

// const UserRoutes = () => {
//   const allowedLanguages = ["en", "de", "ua"];
//   const location = useLocation();
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;
//   const animationOptions = {
//     initial: { opacity: 0, filter: "blur(10px)"},
//     animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
//     exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeInOut" } }
//   };

//   useEffect(() => {
//     const langFromUrl = location.pathname.split('/')[1]; 
//     const supportedLanguages = ['en', 'de', 'ua'];
//     if (supportedLanguages.includes(langFromUrl) && langFromUrl !== currentLang) {
//       i18n.changeLanguage(langFromUrl); 
//     }
//   }, [location.pathname, i18n, currentLang]);

//   const CheckLang = () => {
//     const { lang } = useParams();
//     return allowedLanguages.includes(lang) ? <Layout /> : <NotFoundPage/>;
//   };

//   return (
//     <HelmetProvider>
//       <Suspense fallback={null}>
//         <ScrollToTop />
//         <Header />
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={location.pathname}
//             variants={animationOptions}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             style={{position: "absolute", zIndex: -1}}
//           >
//             <Routes location={location} key={location.pathname}>
//               <Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />
//               <Route path="/en" element={<HomePage />} />
//               <Route path="/de" element={<HomePage />} />
//               <Route path="/ua" element={<HomePage />} />
//               <Route path="/:lang" element={<CheckLang />}>
//                 <Route path="about/video" element={<AboutVideoPage />} />
//                 <Route path="about/honors" element={<AboutHonorsPage />} />
//                 <Route path="about/presentation" element={<AboutPresentationPage />} />
//                 <Route path="about/anthroposophical-medicine" element={<MedicinePage />} />
//                 <Route path="news" element={<NewsPage />} />
//                 <Route path="news/:id" element={<NewsOnePage />} />
//                 <Route path="partners" element={<PartnersPage />} />
//                 <Route path="reviews" element={<ReviewsPage />} />
//                 <Route path="services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" element={<ServicePage1 />} />
//                 <Route path="services/konsultaciya-psihologa" element={<ServicePage2 />} />
//                 <Route path="services/postizometrichna-relaksaciya" element={<ServicePage3 />} />
//                 <Route path="services/refleksoterapiya" element={<ServicePage4 />} />
//                 <Route path="services/manualna-terapiya-hrebta-ta-suglobiv" element={<ServicePage5 />} />
//                 <Route path="services/ritmichne-vtirannya" element={<ServicePage6 />} />
//                 <Route path="services/kinezioterapiya" element={<ServicePage7 />} />
//                 <Route path="services/maslyano-dispersijni-vanni" element={<ServicePage8 />} />
//                 <Route path="services/aparatna-presoterapiya" element={<ServicePage9 />} />
//                 <Route path="team/yevhen-volchenko" element={<TeamMember1Page />} />
//                 <Route path="team/snizhana-shcherbakova" element={<TeamMember2Page />} />
//                 <Route path="team/yuriy-korosko" element={<TeamMember3Page />} />
//                 <Route path="team/irina-sergiychuk" element={<TeamMember4Page />} />
//                 <Route path="support-project" element={<SupportPage />} />
//                 <Route path="project" element={<ProjectPage />} />
//               </Route>
//               <Route path="*" element={<NotFoundPage />}/>
//             </Routes>
//           </motion.div>
//         </AnimatePresence>
//       </Suspense>
//     </HelmetProvider>
//   );
// };

// export default UserRoutes;

import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../src/helpers/scrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from 'components/Header/Header';
import { useTranslation } from 'react-i18next';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutVideoPage = lazy(() => import('./pages/VideoPage/VideoPage'));
const AboutHonorsPage = lazy(() => import('./pages/HonorsPage/HonorsPage'));
const AboutPresentationPage = lazy(() => import('./pages/PresentationPage/PresentationPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NewsOnePage = lazy(() => import('./pages/NewsOnePage/NewsOnePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage/PartnersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const ServicePage1 = lazy(() => import('./pages/ServicesPage/ServicePage1'));
const ServicePage2 = lazy(() => import('./pages/ServicesPage/ServicePage2'));
const ServicePage3 = lazy(() => import('./pages/ServicesPage/ServicePage3'));
const ServicePage4 = lazy(() => import('./pages/ServicesPage/ServicePage4'));
const ServicePage5 = lazy(() => import('./pages/ServicesPage/ServicePage5'));
const ServicePage6 = lazy(() => import('./pages/ServicesPage/ServicePage6'));
const ServicePage7 = lazy(() => import('./pages/ServicesPage/ServicePage7'));
const ServicePage8 = lazy(() => import('./pages/ServicesPage/ServicePage8'));
const ServicePage9 = lazy(() => import('./pages/ServicesPage/ServicePage9'));
const TeamMember1Page = lazy(() => import('./pages/TeamPages/TeamMember1Page'));
const TeamMember2Page = lazy(() => import('./pages/TeamPages/TeamMember2Page'));
const TeamMember3Page = lazy(() => import('./pages/TeamPages/TeamMember3Page'));
const TeamMember4Page = lazy(() => import('./pages/TeamPages/TeamMember4Page'));
const MedicinePage = lazy(() => import('./pages/MedicinePage/MedicinePage'));
const SupportPage = lazy(() => import('./pages/SupportPage/SupportPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));

const UserRoutes = () => {
  const allowedLanguages = ["en", "de", "ua"];
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isMobile = window.innerWidth <= 1024;
  const [isFirstRender, setIsFirstRender] = useState(true);

  const animationOptions = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeInOut" } }
  };

  useEffect(() => {
    const langFromUrl = location.pathname.split('/')[1]; 
    const supportedLanguages = ['en', 'de', 'ua'];
    if (supportedLanguages.includes(langFromUrl) && langFromUrl !== currentLang) {
      i18n.changeLanguage(langFromUrl); 
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const CheckLang = () => {
    const { lang } = useParams();
    return allowedLanguages.includes(lang) ? <Layout /> : <NotFoundPage />;
  };

  return (
    <HelmetProvider>
      <Suspense fallback={<Loader/>}>
        <ScrollToTop />
        <Header />
         {isMobile ? (
          <div>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />
              <Route path="/en" element={<HomePage />} />
              <Route path="/de" element={<HomePage />} />
              <Route path="/ua" element={<HomePage />} />
              <Route path="/:lang" element={<CheckLang />}>
                <Route path="about/video" element={<AboutVideoPage />} />
                <Route path="about/honors" element={<AboutHonorsPage />} />
                <Route path="about/presentation" element={<AboutPresentationPage />} />
                <Route path="about/anthroposophical-medicine" element={<MedicinePage />} />
                <Route path="news" element={<NewsPage />} />
                <Route path="news/:id" element={<NewsOnePage />} />
                <Route path="partners" element={<PartnersPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
                <Route path="services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" element={<ServicePage1 />} />
                <Route path="services/konsultaciya-psihologa" element={<ServicePage2 />} />
                <Route path="services/postizometrichna-relaksaciya" element={<ServicePage3 />} />
                <Route path="services/refleksoterapiya" element={<ServicePage4 />} />
                <Route path="services/manualna-terapiya-hrebta-ta-suglobiv" element={<ServicePage5 />} />
                <Route path="services/ritmichne-vtirannya" element={<ServicePage6 />} />
                <Route path="services/kinezioterapiya" element={<ServicePage7 />} />
                <Route path="services/maslyano-dispersijni-vanni" element={<ServicePage8 />} />
                <Route path="services/aparatna-presoterapiya" element={<ServicePage9 />} />
                <Route path="team/yevhen-volchenko" element={<TeamMember1Page />} />
                <Route path="team/snizhana-shcherbakova" element={<TeamMember2Page />} />
                <Route path="team/yuriy-korosko" element={<TeamMember3Page />} />
                <Route path="team/irina-sergiychuk" element={<TeamMember4Page />} />
                <Route path="support-project" element={<SupportPage />} />
                <Route path="project" element={<ProjectPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        ) : (
          <AnimatePresence mode="wait" exitBeforeEnter>
            <motion.div
              key={location.pathname}
              variants={animationOptions}
              initial={isFirstRender ? "animate" : "initial"} 
              animate="animate"
              exit="exit"
              style={{
                position: "absolute",
                width: "100%",
                minHeight: "100vh",
              }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />
                <Route path="/en" element={<HomePage />} />
                <Route path="/de" element={<HomePage />} />
                <Route path="/ua" element={<HomePage />} />
                <Route path="/:lang" element={<CheckLang />}>
                  <Route path="about/video" element={<AboutVideoPage />} />
                  <Route path="about/honors" element={<AboutHonorsPage />} />
                  <Route path="about/presentation" element={<AboutPresentationPage />} />
                  <Route path="about/anthroposophical-medicine" element={<MedicinePage />} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="news/:id" element={<NewsOnePage />} />
                  <Route path="partners" element={<PartnersPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                  <Route path="services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" element={<ServicePage1 />} />
                  <Route path="services/konsultaciya-psihologa" element={<ServicePage2 />} />
                  <Route path="services/postizometrichna-relaksaciya" element={<ServicePage3 />} />
                  <Route path="services/refleksoterapiya" element={<ServicePage4 />} />
                  <Route path="services/manualna-terapiya-hrebta-ta-suglobiv" element={<ServicePage5 />} />
                  <Route path="services/ritmichne-vtirannya" element={<ServicePage6 />} />
                  <Route path="services/kinezioterapiya" element={<ServicePage7 />} />
                  <Route path="services/maslyano-dispersijni-vanni" element={<ServicePage8 />} />
                  <Route path="services/aparatna-presoterapiya" element={<ServicePage9 />} />
                  <Route path="team/yevhen-volchenko" element={<TeamMember1Page />} />
                  <Route path="team/snizhana-shcherbakova" element={<TeamMember2Page />} />
                  <Route path="team/yuriy-korosko" element={<TeamMember3Page />} />
                  <Route path="team/irina-sergiychuk" element={<TeamMember4Page />} />
                  <Route path="support-project" element={<SupportPage />} />
                  <Route path="project" element={<ProjectPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        )}
      </Suspense>
    </HelmetProvider>
  );
};

export default UserRoutes;
