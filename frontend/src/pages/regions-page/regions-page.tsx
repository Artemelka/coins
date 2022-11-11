import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppStore } from '@/app';
import { ImageBox, ImageBoxClickEvent, Page } from '@/components';
import { regionsItemsSelector, fetchRegionsSagaAction, Region } from './redux';
import styles from './regions-page.module.scss';

type IStateProps = {
    regions: Region[];
};
type IProps = IStateProps & {
    fetchRegions: () => void;
};

class RegionsPageComponent extends Component<IProps, unknown> {
    componentDidMount() {
        this.props.fetchRegions();
    }

    handleClick = ({ id }: ImageBoxClickEvent) => {
        console.log('=== id ===', id)
    }

    render() {
        return (
            <Page headTitle="Regions">
                <div className={styles.root}>
                    <ul className={styles.list}>
                        {this.props.regions.map(({ id, imageUri, name }) => (
                            <li key={id} className={styles.item}>
                                <ImageBox
                                    id={id}
                                    imageUri={imageUri}
                                    onClick={this.handleClick}
                                    title={name}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state: AppStore): IStateProps => ({
    regions: regionsItemsSelector(state)
});

const reduxActions = {
    fetchRegions: fetchRegionsSagaAction,
};

export const RegionsPage = connect(mapStateToProps, reduxActions)(RegionsPageComponent);