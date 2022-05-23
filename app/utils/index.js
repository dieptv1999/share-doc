import {BASE_URL, BASE_URL_PROD, BASE_URL_STAGING} from './constant';
import Config from 'react-native-config';

function version() {
  return 'v1.0.0';
}

let getBaseURL = () => {
  switch (Config.ENV) {
    case 'staging':
      return BASE_URL_STAGING;
    case 'prod':
      return BASE_URL_PROD;
    default:
      return BASE_URL;
  }
};

export default {
  version,
  getBaseURL,
};
