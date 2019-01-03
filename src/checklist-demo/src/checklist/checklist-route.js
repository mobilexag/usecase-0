import ChecklistRouteView from './checklist-route-view';
import resources from '../checklist-resources.yml';

export const checklistRoute = {
  path: 'checklist',
  component: ChecklistRouteView,
  title: resources.editChecklist,
};
