
import { ReactComponent as LeftArrow} from "../../../images/services_slider_arrow_left.svg";
import scss from './PrevArrow.module.scss';

const PrevArrow = (props) => {
    const {onClick} = props;

    return (
        <div onClick={onClick} className={scss.arrow_container}>
            <LeftArrow/>
        </div>
    );
  };
  
  export default PrevArrow;