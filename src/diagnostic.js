/* eslint-disable */
import { mobilex } from '../package.json';

document.addEventListener('deviceready', async () => {
  const loadLanguage = require('@mobilex/load-language').load;
  await loadLanguage('diagnostic');
  require('@mobilex/diagnostic-upload');
}, false);
