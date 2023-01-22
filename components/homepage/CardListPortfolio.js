import Image from 'next/image';
import gal1 from '../../public/images/gal1.png';
import gal2 from '../../public/images/gal2.png';
import gal3 from '../../public/images/gal3.png';
import Zigzag from '../../public/images/zigzag.png';

import styles from '../../styles/CardListPortfolio.module.css';

const CardListPortfolio = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.boxCardPortfolioTop}>
                    <div style={{ width: '100%', height: 253 }}>
                        <Image src={gal1} alt="Gallery 1" layout="responsive" objectFit="contain" />
                    </div>
                </div>
                <div className={styles.boxCardPortfolioCenter}>
                    <div style={{ width: '100%', height: 253 }}>
                        <Image src={gal2} alt="Gallery 2" layout="responsive" objectFit="contain" />
                    </div>
                </div>
                <div className={styles.boxCardPortfolioBottom}>
                    <div style={{ width: '100%', height: 253 }}>
                        <Image src={gal3} alt="Gallery 3" layout="responsive" objectFit="contain" />
                    </div>
                </div>
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={Zigzag} alt="Zigzag" width={55} height={18} layout="responsive" objectFit="cover" />
            </div>
        </div>
    );
};

export default CardListPortfolio;
