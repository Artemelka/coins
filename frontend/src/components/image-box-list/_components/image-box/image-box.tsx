import React, { FC, memo, SyntheticEvent, useCallback } from 'react';
import { LazyImage } from '@/components';
import { ImageBoxClickEvent } from './types';
import styles from './image-box.module.scss';

type ImageBoxProps = {
    id: number;
    imageUri: string;
    onClick: (clickEvent: ImageBoxClickEvent) => void;
    onImageLoad?: () => void;
    title: string;
    hideSkeleton?: boolean;
};

const ImageBoxComponent: FC<ImageBoxProps> = ({
    id,
    imageUri,
    onClick,
    title,
    onImageLoad,
    hideSkeleton,
}) => {
    const handleClick = useCallback((event: SyntheticEvent) => {
        onClick({ id, event });
    }, [id, onClick]);

    return (
        <button className={styles.root} type="button" onClick={handleClick}>
            <div className={styles.wrapper}>
                <LazyImage
                  src={imageUri}
                  alt={title}
                  onLoad={onImageLoad}
                  remoteControl={Boolean(onImageLoad)}
                  hideSkeleton={hideSkeleton}
                />
            </div>
            <p className={styles.title}>{title}</p>
        </button>
    );
}

export const ImageBox = memo(ImageBoxComponent);