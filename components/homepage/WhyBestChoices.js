import Image from 'next/image';
import VideoImage from '../../public/images/youtube-image.png';
import styles from '../../styles/WhyBestChoices.module.css';
import { useDispatch, useSelector } from 'react-redux';

const WhyBestChoices = () => {
    const { show_aboutWhyus } = useSelector((state) => state.url);
    return (
        <div className={styles.fullMainCont} id={`${show_aboutWhyus}`}>
            <div className={styles.mainCont}>
                <div className={styles.innerMainCont}>
                    <div className={styles.contText}>
                        <div style={{ width: '95%' }}>
                            <h2>Why Enver Is The Best Choice?</h2>
                        </div>
                    </div>
                    <div className={styles.contText2}>
                        <p>Watch this one minute video so you understand why you should use our services!</p>
                    </div>
                </div>

                <div className={styles.contSecImage}>
                    <div className={styles.divImage}>
                        <Image
                            src={VideoImage}
                            alt="Video"
                            width={1200}
                            height={670}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBestChoices;
