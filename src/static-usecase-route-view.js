import PropTypes from 'prop-types';
import React from 'react';
import { HeaderView } from '@mobilex/header';

function StaticUsecaseRouteView({ children, routes, params }) {
  return (
    <HeaderView
      {...{ routes, children, params }}
    />
  );
}

StaticUsecaseRouteView.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  params: PropTypes.object,
};

export default StaticUsecaseRouteView;
