import React, { FC, memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageBox, Page } from '@/components';
import { regionsItemsSelector, fetchRegionsSagaAction } from './redux';
import styles from './regions-page.module.scss';

type IProps = unknown;

const HomePageComponent: FC<IProps> = (props) => {
    const regions = useSelector(regionsItemsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRegionsSagaAction());
    }, []);

    const handleClick = useCallback(({ id }) => {
        console.log('=== id ===', id)
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