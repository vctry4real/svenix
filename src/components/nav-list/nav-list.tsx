import styles from './nav-list.module.scss';
import classNames from 'classnames';

export interface NavListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-nav-lists-and-templates
 */
export const NavList = ({ className }: NavListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.div}>
                <li className={styles.li}>MoniFlex</li>
                <div className={styles.cflContainer}>
                    <li className={styles.contact}>Contact us</li>
                    <li className={styles.faq}>FAQ</li>
                    <li className={styles.login}>Login</li>
                </div>
            </div>
        </div>
    );
};
