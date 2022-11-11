import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppStore } from '@/app';
import { ImageBoxList, ImageBoxClickEvent, Page } from '@/components';
import {
    regionsItemsSelector,
    activeRegionIdSelector,
    countrySelector,
    fetchRegionsSagaAction,
    fetchCountriesSagaAction,
    setActiveRegionId,
    Region,
    Country,
} from './redux';

type IStateProps = {
    regions: Array<Region>;
    countries: Array<Country>;
    activeRegionId: number;
};
type IProps = IStateProps & {
    fetchCountries: () => void;
    fetchRegions: () => void;
    setActiveRegionId: (id: number) => void;
};

class RegionsPageComponent extends Component<IProps, unknown> {
    componentDidMount() {
        this.props.fetchRegions();
        this.props.fetchCountries();
    }

    handleRegionClick = ({ id }: ImageBoxClickEvent) => {
        this.props.setActiveRegionId(id);
    };

    handleCountryClick = ({ id }: ImageBoxClickEvent) => {
        console.log('=== id ===', id);
    };

    render() {
        const{ regions, countries, activeRegionId } = this.props;

        return (
            <Page headTitle="Regions">
                <ImageBoxList
                    items={activeRegionId ? countries : regions}
                    onItemClick={activeRegionId ? this.handleCountryClick : this.handleRegionClick}
                />
            </Page>
        );
    }
}

const mapStateToProps = (state: AppStore): IStateProps => {
    return ({
        regions: regionsItemsSelector(state),
        countries: countrySelector(state),
        activeRegionId: activeRegionIdSelector(state),
    });
}

const reduxActions = {
    fetchCountries: fetchCountriesSagaAction,
    fetchRegions: fetchRegionsSagaAction,
    setActiveRegionId,
};

export const RegionsPage = connect(mapStateToProps, reduxActions)(RegionsPageComponent);