
import { NavLink } from 'react-router-dom';
import { MdMarkEmailRead } from "react-icons/md";
import styles from '../css/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <h3>Connect with us</h3>
                    <p>If you have any questions or need support, feel free to contact our team:</p>
                    <ul className={styles.footerLinks}>
                         <li className={styles.footerSvg}> <MdMarkEmailRead /> <NavLink className={styles.footerNavLink} to="mailto:arisha@example.com">Arisha Ramzan</NavLink></li>
                         <li className={styles.footerSvg}> <MdMarkEmailRead /> <NavLink className={styles.footerNavLink} to="mailto:momina@example.com">Momina Awais</NavLink></li>
                         <li className={styles.footerSvg}> <MdMarkEmailRead /> <NavLink className={styles.footerNavLink} to="mailto:hamna@example.com">Hamna Bukhari</NavLink></li>
                   
                    </ul>
                </div>
                <div className={styles.footerResources}>
                    <h3>Helpful Resources</h3>
                    <ul className={styles.footerLinks}>
                        <li>Understanding Anxiety: Insights and coping strategies for anxiety management.</li>
                        <li>Understanding Depression: Recognizing symptoms and seeking professional help.</li>
                        <li>Self-Care Practices: Tips and activities for maintaining emotional well-being.</li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 AI Mental Health Therapist. All Rights Reserved.</p>
                    <div className={styles.footerDisclaimer}>
                        <p>This platform offers AI-based mental health support. For emergencies, please consult a licensed healthcare professional.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};



