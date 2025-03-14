import scss from './ReviewsSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import userIcon from '../../images/user_icon.webp'
import { useTranslation } from 'react-i18next';
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const ReviewsSlider = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: "reviewsSlider",
    touchThreshold: 50,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            className: "reviewsSlider",
            touchThreshold: 100,
          }
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            className: "reviewsSlider",
            touchThreshold: 100,
          }
        },
      ]
  };

  return (
    <div className={scss.review_slider}>
        <Slider {...settings}>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <OptimizedImage src={userIcon} alt='user'/>
                  <span className={scss.slider_review_name}>{t("Reviews_card_name1")}</span>
              </div>
              <span className={scss.slider_review_text}>{t("Reviews_card_text1")}</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <OptimizedImage src={userIcon} alt='user'/>
                  <span className={scss.slider_review_name}>{t("Reviews_card_name2")}</span>
              </div>
              <span className={scss.slider_review_text}>{t("Reviews_card_text2")}</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <OptimizedImage src={userIcon} alt='user'/>
                  <span className={scss.slider_review_name}>{t("Reviews_card_name3")}</span>
              </div>
              <span className={scss.slider_review_text}>{t("Reviews_card_text3")}</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <OptimizedImage src={userIcon} alt='user'/>
                  <span className={scss.slider_review_name}>{t("Reviews_card_name4")}</span>
              </div>
              <span className={scss.slider_review_text}>{t("Reviews_card_text4")}</span>
          </div>
          <div className={scss.slider_review_card}>
              <div className={scss.slider_review_user}>
                  <OptimizedImage src={userIcon} alt='user'/>
                  <span className={scss.slider_review_name}>{t("Reviews_card_name5")}</span>
              </div>
              <span className={scss.slider_review_text}>{t("Reviews_card_text5")}</span>
          </div>
        </Slider>
    </div>
  )
};

export default ReviewsSlider;