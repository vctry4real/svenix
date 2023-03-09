import styles from './footer.module.scss';
import classNames from 'classnames';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content__container}>
                <div className={styles.container}>
                    <h2>MoniFlex</h2>
                    <p>Make payment in a click</p>
                    <div className={styles.logos__container}>
                        <ImFacebook />
                        <BsInstagram />
                        <BsTwitter />
                    </div>
                </div>
                <div className={styles.ul__container}>
                    <ul className={styles.ul1}>
                        <li>Links</li>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                    <ul className={styles.ul2}>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Security</li>
                        <li>Acessibility</li>
                    </ul>
                    <ul className={styles.ul3}>
                        <li>Legal policy</li>
                        <li>Terms &amp; condition</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
