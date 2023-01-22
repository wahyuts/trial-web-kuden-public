//Ini hanya simple layout silhakan di bikin sendiri headnav nya
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import styles from '../../styles/Footer.module.css';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     fullMainCont: {
//         width: '100%',
//         height: 80,
//         backgroundColor: 'orange'
//     }
// }));

const Footer = () => {
    // const classes = useStyles();
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
                <div className={styles.divNav}>
                    <a className={styles.suppAndPrivacy}>Support</a>
                    <a className={styles.suppAndPrivacy}>Privacy Policy</a>
                    <a className={styles.term}>Term and Conditions</a>
                </div>
                <div className={styles.divAllrightReserved}>
                    <div style={{ marginLeft: 'auto' }}>
                        <a>© 2020 Enver, All Rights Reserved</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
