
import { ReactComponent as RightArrow} from "../../../images/services_slider_arrow_right.svg";
import scss from './NextArrow.module.scss';


const NextArrow = (props) => {
    const {onClick} = props;

    return (
        <div onClick={onClick} className={scss.arrow_container}>
            <RightArrow/>
        </div>
    );
  };
  
  export default NextArrow;