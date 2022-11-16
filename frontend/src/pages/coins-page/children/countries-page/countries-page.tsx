import React, { Component } from 'react';
import { connect, ResolveThunks } from 'react-redux';
import { AppStore } from '@/app';
import { ImageBoxClickEvent, ImageBoxList, Page } from '@/components';
import {
    activeRegionCountrySelector,
    fetchCountriesSagaAction,
} from '../../redux';

const mapStateToProps = (state: AppStore) => ({
    countries: activeRegionCountrySelector(state),
});

const reduxActions = {
    fetchCountries: fetchCountriesSagaAction,
};

type CountriesPageProps = ReturnType<typeof mapStateToProps> & ResolveThunks<typeof reduxActions>;

class CountriesPageComponent extends Component<CountriesPageProps, unknown> {
    componentDidMount() {
        this.props.fetchCountries();
    }

    handleCountryClick = ({ id }: ImageBoxClickEvent) => {
        console.log('=== id ===', id);
    };

    render() {
        return(
            <Page headTitle="Countries">
                <ImageBoxList
                  items={this.props.countries}
                  onItemClick={this.handleCountryClick}
                />
            </Page>
        );
    }
}



export const CountriesPage = connect(mapStateToProps, reduxActions)(CountriesPageComponent);