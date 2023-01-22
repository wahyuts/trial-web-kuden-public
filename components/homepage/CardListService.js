import Image from 'next/image';
import DevIcon from '../../public/images/devIcon.png';
import UIUX from '../../public/images/uiuxIcon.png';
import Designer from '../../public/images/designerIcon.png';
import MotionIcon from '../../public/images/motionIcon.png';
import Photography from '../../public/images/photographyIcon.png';
import Videography from '../../public/images/videographyIcon.png';
import Cross from '../../public/images/cross-kebalik.png';

import styles from '../../styles/CardListService.module.css';

const CardListService = () => {
    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.benListCard}>
                    <div className={styles.boxCard}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={DevIcon} alt="Developer" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    DEVELOPER
                                </p>
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p style={{ textAlign: 'center', marginTop: 20 }}>
                                    Create a platform with the best and coolest quality from us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxCard}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={UIUX} alt="UIUX" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    UI/UX Designer
                                </p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: 20 }}>
                                We provide UI/UX Design services, and of course with the best quality
                            </p>
                        </div>
                    </div>
                    <div className={styles.boxCard2}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={Designer} alt="Graphic Designer" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    Graphic Designer
                                </p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: 20 }}>
                                We provide Graphic Design services, with the best designers
                            </p>
                        </div>
                    </div>
                </div>

                <hr className={styles.hrStyle} />

                <div className={styles.benListCard2}>
                    <div className={styles.boxCard}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={MotionIcon} alt="Motion Graphic" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    Motion Graphic
                                </p>
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p style={{ textAlign: 'center', marginTop: 20 }}>
                                    Create a platform with the best and coolest quality from us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxCard}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={Photography} alt="Photography" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    Photography
                                </p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: 20 }}>
                                We provide Photography services, and of course with the best quality
                            </p>
                        </div>
                    </div>
                    <div className={styles.boxCard2}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ width: 69, height: 69 }}>
                                <Image src={Videography} alt="Videography" layout="responsive" objectFit="contain" />
                            </div>
                            <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <p className={styles.fontTextCard} style={{ textAlign: 'center', marginTop: 30 }}>
                                    Videography
                                </p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: 20 }}>
                                Create a platform with the best and coolest quality from us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.divImageHiasan4}>
                <Image src={Cross} alt="Cross" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default CardListService;
