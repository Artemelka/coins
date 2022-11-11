import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ApiRequest } from '@/services/api';
import { ImageBox, Page } from '@/components';
import { Region } from './redux';
import styles from './regions-page.module.scss';

type IProps = unknown;

const HomePageComponent: FC<IProps> = (props) => {
    const [regions, setRegions] = useState<Region[]>([]);

    useEffect(() => {
        ApiRequest.get<{ regions: Array<Region>}>('regions.json').then(response => {
            console.log('=== response ===', response);
            if (response.isError) {
                return;
            }

            setRegions(response.data.regions)
        });
    }, []);

    const handleClick = useCallback(() => {

    }, []);

    return (
        <Page headTitle="Regions">
            <div className={styles.root}>
                <ul className={styles.list}>
                    {regions.map(({ id, imageUri, name }) => (
                        <li key={id} className={styles.item}>
                            <ImageBox
                                id={id}
                                imageUri={imageUri}
                                onClick={handleClick}
                                title={name}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Page>

    );
}

export const RegionsPage = memo(HomePageComponent);