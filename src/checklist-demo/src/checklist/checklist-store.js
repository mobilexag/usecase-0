import { select, selectSingleOrDefault } from '@mobilex/database';
import installationQuery from './load-installation.sql';
import installationsQuery from './load-installations.sql';

export default class ChecklistStore {

  async loadInstallations() {
    return select(installationsQuery);
  }

  //async loadInstallation(installationId) {
  //    return selectSingleOrDefault(installationQuery, {args: [installationId]});
  //}
}