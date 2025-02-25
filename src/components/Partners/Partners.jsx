import scss from './Partners.module.scss';
import Partner0 from '../../images/partners/parzival-zentrum.png';
import Partner1 from '../../images/partners/Academy.png';
import Partner2 from '../../images/partners/Association.jpg';
import Partner3 from '../../images/partners/Bakhmach.png';
import Partner4 from '../../images/partners/Best.png';
import Partner5 from '../../images/partners/Center.png';
import Partner6 from '../../images/partners/E+.jpg';
import Partner7 from '../../images/partners/EBA.jpg';
import Partner8 from '../../images/partners/Frida.jpg';
import Partner9 from '../../images/partners/MHP.png';
import Partner10 from '../../images/partners/MIRUM.png';
import Partner11 from '../../images/partners/MMH.png';
import Partner12 from '../../images/partners/MentalHealth.jpg';
import Partner13 from '../../images/partners/Montpellier.png';
import Partner14 from '../../images/partners/Smart.jpg';
import Partner15 from '../../images/partners/Wala.jpg';
import Partner16 from '../../images/partners/АРТ_А.jpg';
import Partner17 from '../../images/partners/Suziria.png';
import Partner18 from '../../images/partners/Dopomogator.png';
import Partner19 from '../../images/partners/Vertolet.png';
import Partner20 from '../../images/partners/KMH.jpg';
import Partner21 from '../../images/partners/helias.png';
import Partner22 from '../../images/partners/Ukr_ter.jpg';
import Partner23 from '../../images/partners/fes.png';
import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const Partners = () => {

  const partners = [
    Partner0, Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7,
    Partner8, Partner9, Partner10, Partner11, Partner12, Partner13, Partner14, Partner15,
    Partner16, Partner17, Partner18, Partner19, Partner20, Partner21, Partner22, Partner23
  ];

  return (
    <ul className={scss.partners_list}>
      {partners.map((partner, index) => (
        <li key={index} className={scss.partners_list_item}>
          <OptimizedImage src={partner} alt="Partner logo" className={scss.partner_logo} />
        </li>
      ))}
    </ul>
  );
};

export default Partners;

