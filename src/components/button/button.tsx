import styles from './button.module.scss';
import classNames from 'classnames';

export interface ButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-buttons-and-templates
 */
export const Button = ({ className, children }: ButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.primarybtn}>{children} </button>
        </div>
    );
};
