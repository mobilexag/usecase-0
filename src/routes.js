import StaticLoggedOutRouteView from '@mobilex/routes/src//static-logged-out-route-view';
import { checklistRoute } from './checklist-demo/src/index';
import StaticUsecaseRouteView from './static-usecase-route-view';

export default [
  {
    path: '/',
    component: StaticLoggedOutRouteView, // not used, only for react router
    title: 'Test', // not used, only for react router
    onEnter: (nextState, replace) =>
      replace('/checklist/'),
  },
  {
    path: '/',
    component: StaticUsecaseRouteView,
    title: 'Missing title *',
    childRoutes: [
      checklistRoute,
    ],
  },
];

