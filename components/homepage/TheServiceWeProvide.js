import Image from 'next/image';
import Triangle from '../../public/images/double-triangle.png';
import CrossIcon from '../../public/images/cross-miring-icon.png';
import styles from '../../styles/TheServiceWeProvide.module.css';
// import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TheServiceWeProvide = () => {
    const { show_aboutServices } = useSelector((state) => state.url);
    // show_aboutServices = useRef(null);
    // useEffect(() => {
    //     console.log('become', show_aboutServices);
    // },[]);

    return (
        <div className={styles.fullMainCont} id={`${show_aboutServices}`}>
            <div className={styles.mainCont}>
                <div className={styles.h2style}>
                    <h2 style={{ textAlign: 'center' }}>The Service We Provide For You</h2>
                </div>
            </div>
            <div className={styles.divImageHiasan3}>
                <Image src={Triangle} alt="Triangle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={CrossIcon} alt="Cross" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default TheServiceWeProvide;
