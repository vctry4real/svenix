import styles from './unordered-list.module.scss';
import classNames from 'classnames';

export interface UnorderedListProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-unordered-lists-and-templates
 */
export const UnorderedList = ({ className, children }: UnorderedListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ul className={styles.ul}>{children}</ul>
        </div>
    );
};
