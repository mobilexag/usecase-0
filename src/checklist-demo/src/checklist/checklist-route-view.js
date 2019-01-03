import { RouteViewBase, create } from '@mobilex/use-case-infrastructure';

import ChecklistStore from './checklist-store';
import ChecklistModel from './checklist-model';
import { ChecklistView } from './checklist-view';

export default class ChecklistRouteView extends RouteViewBase {
  extractArgs({ params }) {
    return {
      installationId: params.installationId,
      assignmentId: params.assignmentId,
    };
  }

  async createModel(args) {
    const store = new ChecklistStore();
    return create(ChecklistModel, [store]);
  }

  get View() {
    return ChecklistView;
  }
}
