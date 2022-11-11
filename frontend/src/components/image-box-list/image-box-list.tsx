import React, { FC, memo } from 'react';
import { ImageBox, ImageBoxClickEvent } from './_components';
import styles from './image-box-list.module.scss'

type IProps = {
    items: Array<{ id: number; imageUri: string; name: string }>;
    onItemClick: (event: ImageBoxClickEvent) => void;
};

const ImageBoxListComponent: FC<IProps> = ({ items, onItemClick }) => {
    return (
        <ul className={styles.root}>
            {items.map(({ id, imageUri, name }) => (
                <li key={id} className={styles.item}>
                    <ImageBox
                        id={id}
                        imageUri={imageUri}
                        onClick={onItemClick}
                        title={name}
                    />
                </li>
            ))}
        </ul>
    );
}

export const ImageBoxList = memo(ImageBoxListComponent);