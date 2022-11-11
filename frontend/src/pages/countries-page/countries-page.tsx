import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppStore } from '@/app';
import { ImageBoxList, Page } from '@/components';
// import {
//     countrySelector,
//     Country,
// } from './redux';

type IStateProps = {

};

type IProps = IStateProps & {};

class CountriesPageComponent extends Component<IProps, unknown> {
    render() {
        return(
            <Page headTitle="Countries">
                {/*<ImageBoxList items={} onItemClick={}/>*/}
            </Page>
        );
    }
}

const mapStateToProps = (state: AppStore): IStateProps => ({

});

const reduxActions = {

};

export const CountriesPage = connect(mapStateToProps, reduxActions)(CountriesPageComponent);