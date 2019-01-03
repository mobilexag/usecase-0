// import { push } from '@mobilex/routing';
import { getLogger } from "@mobilex/log";
// import { showSuccessToast, showErrorToast } from '@mobilex/toast';

const logger = getLogger("checklist-demo/checklist");

export default class ChecklistModel {
  store;
  installations;

  async init(store) {
    this.store = store;
    this.installations = await store.loadInstallations().catch(e => {
      logger.warn(e);
      return [];
    });
    logger.info(`Found ${this.installations.length} installations`);
  }

  // navigateToSomewhere() {
  //     push(`/SomeWhere/${this.installationId}/${this.assignmentId}`);
  // }
}
