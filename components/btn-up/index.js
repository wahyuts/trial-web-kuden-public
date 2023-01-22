import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from '../../styles/btnup.module.css';

const ButtonUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        showTopBtn && (
            <div className={styles.mainCont}>
                <div className={styles.btnup}>
                    <FaAngleUp className={styles.iconStyle} onClick={goToTop} />
                </div>
            </div>
        )
    );
};

export default ButtonUp;
