/* eslint no-undef: off */
import '@mobilex/ui-theme/src/basic.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import { OverlayContainer } from '@mobilex/overlay';
import { RouterView } from '@mobilex/routing';
import routes from './routes';

const _App = () => (
  <OverlayContainer>
    <RouterView {...{ routes }} />
  </OverlayContainer>
);

export const App = hot(module)(_App);
