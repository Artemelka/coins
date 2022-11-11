import React, { FC, memo, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import styles from './page.module.scss';

type PageProps = PropsWithChildren<{
    headTitle?: string;
    title?: string;
}>;

export const PageComponent: FC<PageProps> = ({
    children,
    headTitle = '',
    title,
}) => {
    return (
        <div className={styles.root}>
            <Helmet
                defaultTitle="Manifity Coins"
                title={headTitle}
                titleTemplate="%s - Manifity Coins"
            />
            {Boolean(title) && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export const Page = memo(PageComponent);