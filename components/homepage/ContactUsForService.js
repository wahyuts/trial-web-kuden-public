import Image from 'next/image';
import Circle from '../../public/images/double-circle.png';
import AddIcon from '../../public/images/add-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/ContactUsForService.module.css';

const ContactUsForTheService = () => {
    const { show_contact } = useSelector((state) => state.url);
    return (
        <div className={styles.fullMainCont} id={`${show_contact}`}>
            <div className={styles.mainCont}>
                <div className={styles.innerMainCont}>
                    <div className={styles.outerTextContactus}>
                        <div style={{ width: '100%' }}>
                            <h2 style={{ textAlign: 'left' }}>Contact us for the service you want to use</h2>
                        </div>
                    </div>
                    <div style={{ width: '35%' }}>
                        <div className={styles.btnContactUs}>Our Social Media</div>
                    </div>
                </div>
            </div>
            <div className={styles.contText2}>
                <p>
                    Email: wahyu.trisna100@gmail.com
                    <br />
                    <br />
                    Contact Person: 085718565195
                </p>
            </div>
            <div className={styles.divImageHiasan4}>
                <Image src={AddIcon} alt="Add" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
            <div className={styles.divImageHiasan2}>
                <Image src={Circle} alt="Circle" width={10} height={10} layout="responsive" objectFit="contain" />
            </div>
        </div>
    );
};

export default ContactUsForTheService;
