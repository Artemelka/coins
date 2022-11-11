import React, { FC, memo, SyntheticEvent, useCallback } from 'react';
import styles from './image-box.module.scss';

type ImageBoxClickEvent = {
    id: number;
    event: SyntheticEvent;
};

type IProps = {
    id: number;
    imageUri: string;
    title: string;
    onClick: (clickEvent: ImageBoxClickEvent) => void;
};

const ImageBoxComponent: FC<IProps> = ({ id, imageUri, onClick, title }) => {
    const handleClick = useCallback((event: SyntheticEvent) => {
        onClick({ id, event });
    }, [id, onClick]);

    return (
        <button className={styles.root} type="button" onClick={handleClick}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={imageUri} alt={title}/>
            </div>
            <p className={styles.title}>{title}</p>
        </button>
    );
}

export const ImageBox = memo(ImageBoxComponent);