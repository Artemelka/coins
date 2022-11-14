import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { AppStore } from '@/app';
import { ImageBoxList, ImageBoxClickEvent, Page } from '@/components';
import {
  regionsItemsSelector,
  fetchRegionsSagaAction,
  Region,
} from '../../redux';

type IStateProps = {
  regions: Array<Region>;
};

type IProps = IStateProps & {
  fetchRegions: () => void;
  push: (url: string) => void;
};

class RegionsHomePageComponent extends Component<IProps, unknown> {
  componentDidMount() {
    this.props.fetchRegions();
  }

  handleRegionClick = ({ id }: ImageBoxClickEvent) => {
    this.props.push(`/coins/countries?id=${id}`);
  };

  render() {
    return (
      <Page headTitle="Regions">
        <ImageBoxList
          items={this.props.regions}
          onItemClick={this.handleRegionClick}
        />
      </Page>
    );
  }
}

const mapStateToProps = (state: AppStore): IStateProps => {
  return ({
    regions: regionsItemsSelector(state),
  });
}

const reduxActions = {
  fetchRegions: fetchRegionsSagaAction,
  push,
};

export const RegionsHomePage = connect(mapStateToProps, reduxActions)(RegionsHomePageComponent);