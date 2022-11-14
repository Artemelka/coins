import React, { FC, memo, useCallback, useState } from 'react';
import { ImageBox, ImageBoxClickEvent } from './_components';
import styles from './image-box-list.module.scss'

type IProps = {
    items: Array<{ id: number; imageUri: string; name: string }>;
    onItemClick: (event: ImageBoxClickEvent) => void;
};

const ImageBoxListComponent: FC<IProps> = ({ items, onItemClick }) => {
    const [imageCount, setImageCount] = useState(0);

    const handleLoad = useCallback(() => {
        setImageCount(prevCount => prevCount + 1);
    }, []);

    return (
        <ul className={styles.root}>
            {items.map(({ id, imageUri, name }) => (
                <li key={id} className={styles.item}>
                    <ImageBox
                        id={id}
                        imageUri={imageUri}
                        onClick={onItemClick}
                        onImageLoad={handleLoad}
                        title={name}
                        hideSkeleton={imageCount === items.length}
                    />
                </li>
            ))}
        </ul>
    );
}

export const ImageBoxList = memo(ImageBoxListComponent);