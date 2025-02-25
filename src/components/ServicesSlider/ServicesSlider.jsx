import { useState, useEffect, useRef } from "react";
import scss from "./ServicesSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Link } from "react-router-dom";
import PrevArrow from "./PrevArrow/PrevArrow";
import NextArrow from "./NextArrow/NextArrow";
import { useTranslation } from "react-i18next";
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const serviceImages = [
  "service1.jpg", "service2.jpg", "service3.jpg", "service4.jpg", "service5.png",
  "service6.jpg", "service7.jpg", "service8.jpg", "service9.jpg"
].map(img => require(`../../images/services/${img}`));

const servicesData = [
  { textKeys: ["Home_services_text1.1", "Home_services_text1.2", "Home_services_text1.3"], descKey: "Home_services_description1", link: "/services/konsultaciya-likarya-fizichnoyi-ta-reabilitacijnoyi-medicini" },
  { textKeys: ["Home_services_text2.1", "Home_services_text2.2"], descKey: "Home_services_description2", link: "/services/konsultaciya-psihologa" },
  { textKeys: ["Home_services_text3.1", "Home_services_text3.2"], descKey: "Home_services_description3", link: "/services/postizometrichna-relaksaciya" },
  { textKeys: ["Home_services_text4"], descKey: "Home_services_description4", link: "/services/refleksoterapiya" },
  { textKeys: ["Home_services_text5.1", "Home_services_text5.2"], descKey: "Home_services_description5", link: "/services/manualna-terapiya-hrebta-ta-suglobiv" },
  { textKeys: ["Home_services_text6.1", "Home_services_text6.2"], descKey: "Home_services_description6", link: "/services/ritmichne-vtirannya" },
  { textKeys: ["Home_services_text7"], descKey: "Home_services_description7", link: "/services/kinezioterapiya" },
  { textKeys: ["Home_services_text9.1", "Home_services_text9.2"], descKey: "Home_services_description9", link: "/services/maslyano-dispersijni-vanni" },
  { textKeys: ["Home_services_text10.1", "Home_services_text10.2"], descKey: "Home_services_description10", link: "/services/aparatna-presoterapiya" }
];

const ServicesSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settings1 = { 
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false, 
    vertical: true, 
    verticalSwiping: true, 
    touchMove: false, 
    className: "center", 
    centerMode: true, 
    centerPadding: "0px" 
  };

  const settings2 = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: true, 
    touchMove: false, 
    className: "servicesSlider2", 
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    vertical: true, 
    verticalSwiping: true, 
    centerMode: true, 
    centerPadding: "-40px",
    responsive: [{ 
        breakpoint: 1440, 
        settings: { 
            vertical: false, 
            verticalSwiping: false 
        } 
    }]
  };

  return (
    <div className={scss.services_slider_container}>
      <div className={scss.services_slider1}>
        <Slider {...settings1} asNavFor={nav2} ref={sliderRef1}>
          {serviceImages.map((img, idx) => <OptimizedImage key={idx} src={img} alt="service" className={scss.slider_image} />)}
        </Slider>
      </div>
      <div className={scss.services_slider2}>
        <Slider {...settings2} asNavFor={nav1} ref={sliderRef2}>
          {servicesData.map((service, idx) => (
            <div key={idx} className={scss.slider_card}>
              <div className={scss.slider_text_container}>
                <div className={scss.slider_title_container}>
                  {service.textKeys.map((key, i) => <p key={i} className={i === 0 ? scss.slider_title1 : scss.slider_title2}>{t(key)}</p>)}
                </div>
                <span className={scss.slider_description}>{t(service.descKey)}</span>
                <Link className={scss.slider_link} to={service.link}>{t("Home_services_button")}</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;