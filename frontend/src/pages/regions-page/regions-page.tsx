import React, {FC, memo, useEffect, useState} from 'react';
import { ApiRequest } from '@/services/api';
import { ThemeSwitcher, ImageBox } from '@/components';
import styles from './regions-page.module.scss';

type IProps = unknown;

type Region = {
    active: boolean;
    id: number;
    imageUri: string;
    name: string;
};

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

    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                {regions.map(({ id, imageUri, name }) => (
                    <li key={id} className={styles.item}>
                        <ImageBox imageUri={imageUri} title={name}/>
                    </li>
                ))}
            </ul>

            <ThemeSwitcher/>
        </div>
    );
}

export const RegionsPage = memo(HomePageComponent);