import Image from 'next/image';
import Circle from '../../public/images/double-circle.png';
import styles from '../../styles/AwesomePortfolio.module.css';
import { useDispatch, useSelector } from 'react-redux';

const AwesomePortfolio = () => {
    const { show_aboutOurproject } = useSelector((state) => state.url);
    return (
        <div className={styles.fullMainCont} id={`${show_aboutOurproject}`}>
            <div className={styles.mainCont}>
                <div className={styles.h2Style}>
                    <h2 className={styles.h2StyleParagraph}>Our Awesome Portofolio</h2>
                </div>
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={Circle} alt="Triangle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default AwesomePortfolio;
