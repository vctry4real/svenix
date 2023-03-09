import styles from './list.module.scss';
import classNames from 'classnames';

export interface ListProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-lists-and-templates
 */
export const List = ({ className, children }: ListProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
