import styles from './home-page.module.scss';
import classNames from 'classnames';
import { Button } from '../button/button';
import { TbBrandApple } from 'react-icons/tb';
import { FaGooglePlay } from 'react-icons/fa';
import phoneCam from '../../assets/phoneCam.jpg';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-home-pages-and-templates
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles.articleContainer}>
                    <article className={styles.article1}>
                        <h2>
                            Send and Receive money easily, anywhere, anytime with our multicurrency
                            wallet{' '}
                        </h2>
                    </article>
                    <article className={styles.article2}>
                        <h5>
                            Send And Receive Money Easily To Those You Love Anywhere, Anytime With
                            Our Multicurrency Wallet{' '}
                        </h5>
                    </article>
                    <h6 className={styles.h6}>Download App</h6>
                    <div className={styles.btnContainer}>
                        <Button>
                            <TbBrandApple className={styles.appleLogo}></TbBrandApple>
                            <p className={styles.p}>App Store </p>
                        </Button>
                        <Button>
                            <FaGooglePlay className={styles.playstoreLogo} />
                            <p className={styles.p}>App Store </p>
                        </Button>
                    </div>
                </div>
                <img src={phoneCam} alt="phoneCam" className={styles.image} />
            </div>
        </div>
    );
};
