//Ini hanya simple layout silhakan di bikin sendiri headnav nya
import Image from 'next/image';
import React, { useState } from 'react';
import ReactResponsiveHook from '../../utils/ReactResponsiveHook';

import { useDispatch, useSelector } from 'react-redux';
import { setServices } from '../../redux/actions/urlOnHeadnavActions';

import Logo from '../../public/images/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../styles/Headnav.module.css';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     fullMainCont: {
//         width: '100%',
//         height: 80,
//         backgroundColor: 'orange'
//     }
// }));

const Headnav = () => {
    // const classes = useStyles();
    const [pages, setPages] = useState('Home');
    const [menuStyle, setMenuStyle] = useState('menuDesktop');
    const dispatch = useDispatch();
    const { show_aboutServices } = useSelector((state) => state.url);
    const { isMobile, isTablet, isDesktop } = ReactResponsiveHook();

    const sectionHome = document.querySelector('#aboutHome');
    const sectionServices = document.querySelector('#aboutServices');
    const sectionOurProject = document.querySelector('#aboutOurproject');
    const sectionWhyUs = document.querySelector('#aboutWhyus');
    const sectionContact = document.querySelector('#aboutContact');

    const handleClickHome = () => {
        setPages('Home');
        // sectionHome.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleClickService = () => {
        setPages('Services');
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: 'smooth'
        // });

        sectionServices.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // console.log('kunyuk', show_aboutServices);
    };

    const handleClickOurProject = () => {
        setPages('OurProject');
        sectionOurProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const handleClickWhyus = () => {
        setPages('Why Us?');
        sectionWhyUs.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleContactUs = () => {
        setPages('Contact Us');
        sectionContact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleShowMenuMobile = () => {
        setMenuStyle('menuMobile');
    };

    let desktopVersion = (
        <>
            <div className={styles.divNav}>
                {pages === 'Home' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickHome}
                        className="navLink"
                    >
                        Home
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickHome} className="navLink">
                        Home
                    </a>
                )}

                {pages === 'Services' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickService}
                        className="navLink"
                    >
                        Services
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickService} className="navLink">
                        Services
                    </a>
                )}
                {pages === 'Why Us?' ? (
                    <a style={{ cursor: 'pointer', color: '#5454D4' }} onClick={handleClickWhyus} className="navLink">
                        Why Us ?
                    </a>
                ) : (
                    <a style={{ cursor: 'pointer' }} onClick={handleClickWhyus} className="navLink">
                        Why Us ?
                    </a>
                )}

                {pages === 'OurProject' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickOurProject}
                        className="navLink"
                    >
                        Our Project
                    </a>
                ) : (
                    <a
                        style={{ marginRight: 10, cursor: 'pointer' }}
                        onClick={handleClickOurProject}
                        className="navLink"
                    >
                        Our Project
                    </a>
                )}
            </div>
            <div className={styles.btnContactUs} onClick={handleContactUs}>
                Contact Us
            </div>
        </>
    );

    let mobileMenuVersion = (
        <>
            <div className={styles.divNav2}>
                {pages === 'Home' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickHome}
                        className="navLink"
                    >
                        Home
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickHome} className="navLink">
                        Home
                    </a>
                )}

                {pages === 'Services' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickService}
                        className="navLink"
                    >
                        Services
                    </a>
                ) : (
                    <a style={{ marginRight: 10, cursor: 'pointer' }} onClick={handleClickService} className="navLink">
                        Services
                    </a>
                )}
                {pages === 'Why Us?' ? (
                    <a style={{ cursor: 'pointer', color: '#5454D4' }} onClick={handleClickWhyus} className="navLink">
                        Why Us ?
                    </a>
                ) : (
                    <a style={{ cursor: 'pointer' }} onClick={handleClickWhyus} className="navLink">
                        Why Us ?
                    </a>
                )}

                {pages === 'OurProject' ? (
                    <a
                        style={{ marginRight: 10, color: '#5454D4', cursor: 'pointer' }}
                        onClick={handleClickOurProject}
                        className="navLink"
                    >
                        Our Project
                    </a>
                ) : (
                    <a
                        style={{ marginRight: 10, cursor: 'pointer' }}
                        onClick={handleClickOurProject}
                        className="navLink"
                    >
                        Our Project
                    </a>
                )}
            </div>
        </>
    );

    let mobileMenuShow = menuStyle === 'menuMobile' ? mobileMenuVersion : null;

    let mobileVersion = (
        <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            <MenuIcon onClick={handleShowMenuMobile} />
            {/* {isMobile ? mobileMenuShow : null} */}

            {/* <div className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div> */}
        </div>
    );

    return (
        <div className={styles.fullMainCont}>
            <div className={styles.mainCont}>
                <div className={styles.divLogo}>
                    <div style={{ marginRight: 10 }}>
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                    </div>
                    <div>
                        <p className={styles.enverText}>Enver</p>
                    </div>
                </div>

                {isMobile ? (isTablet ? (isDesktop ? desktopVersion : desktopVersion) : desktopVersion) : mobileVersion}
            </div>
            {mobileMenuShow}
        </div>
    );
};

export default Headnav;
