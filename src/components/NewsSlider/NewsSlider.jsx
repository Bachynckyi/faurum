import scss from './NewsSlider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { ReactComponent as CalendarIcon} from "../../images/calendar_icon.svg";
import { news } from 'news';
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const NewsSlider = () => {
  const { i18n } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: "newsSlider",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    touchThreshold: 50,
    centerMode: false,
    centerPadding: '0',
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '22%',
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 613,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '30%',
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '25%',
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '20%',
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '12%',
        }
      },
    ]
  };

  const elements = news.map(({ id, ...props }) => {
    return (
        <div className={scss.slider_card} key={id}>
          <OptimizedImage  src={props.image1} alt='newsImage' className={scss.slider_image}/>
          <div className={scss.slider_text_wrapper}>
              <span className={scss.slider_text}>{props[`title${i18n.language.toUpperCase()}`]}</span>
              <div className={scss.bottom_wrapper}>
                <div className={scss.slider_date_wrapper}>
                  <CalendarIcon/>
                  <span className={scss.slider_date}><span className={scss.slider_date_decor}>| </span> {props.date}</span>
                </div>
                <NavLink to={`/${i18n.language}/news/${id}`}><MdArrowOutward className={scss.icon}/></NavLink>
              </div>
          </div>
        </div>
    );
    });

  return (
    <div className={scss.slider}>
        <Slider {...settings}>
              {elements}
        </Slider>
    </div>
  )
};

export default NewsSlider ;