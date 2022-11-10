import React, { FC, memo } from 'react';
import styles from './image-box.module.scss';

type IProps = {
    imageUri: string;
    title: string;
};

const ImageBoxComponent: FC<IProps> = ({ imageUri, title }) => {
    return (
        <div className={styles.root}>
            <img className={styles.image} src={imageUri} alt={title}/>
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export const ImageBox = memo(ImageBoxComponent);