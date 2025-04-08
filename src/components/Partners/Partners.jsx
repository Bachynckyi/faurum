import scss from './Partners.module.scss';
import Partner1 from '../../images/partners/Parzival-zentrum.webp';
import Partner2 from '../../images/partners/Association.webp';
import Partner3 from '../../images/partners/MHP.webp';
import Partner4 from '../../images/partners/Best.webp';
import Partner5 from '../../images/partners/Vertolet.webp';
import Partner6 from '../../images/partners/EBA.webp';
import Partner7 from '../../images/partners/MMH.webp';
import Partner8 from '../../images/partners/Helias.webp';
import Partner9 from '../../images/partners/Fes.webp';
import Partner10 from '../../images/partners/Gladsal.webp';
import Partner11 from '../../images/partners/Casual.webp';
import Partner12 from '../../images/partners/Center.webp';
import Partner13 from '../../images/partners/Flot.webp';
import Partner14 from '../../images/partners/KMH.webp';
import Partner15 from '../../images/partners/Wala.webp';
import Partner16 from '../../images/partners/АРТ_А.webp';
import Partner17 from '../../images/partners/Suziria.webp';
import Partner18 from '../../images/partners/Academy.webp';
import Partner19 from '../../images/partners/E+.webp';
import Partner20 from '../../images/partners/Ukr_ter.webp';

import OptimizedImage from '../../components/OptimazedImage/OptimazedImage';

const Partners = () => {

  const partners = [
    Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7,
    Partner8, Partner9, Partner10, Partner11, Partner12, Partner13, Partner14, Partner15,
    Partner16, Partner17, Partner18, Partner19, Partner20
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

