import constant, {API_VERSION, BASE_URL} from '../utils/constant';
import {get, first, isString, isUndefined} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import utils from '../utils';
import DeviceInfo from 'react-native-device-info';
import i18n from '../../i18n';
import _ from 'lodash';

export default class BaseRequest {
  // todo change base path here
  version = () => `${utils.getBaseURL()}/v1`;

  prefix() {
    return '';
  }

  async get(url, params = {}) {
    try {
      const response = await global.axios.get(`${this.version()}/${url}`, {
        params,
        headers: {
          version: DeviceInfo.getVersion(),
        },
      });
      if (`${url}`.includes('p2p') || `${url}`.includes('campaign')) {
        return this._responseHandlerP2P(response);
      }
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async getWithTimeout(url, params = {}, timeout) {
    try {
      const response = await global.axios.get(`${this.version()}/${url}`, {
        params,
        timeout,
        headers: {
          version: DeviceInfo.getVersion(),
        },
      });
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put(url, data = {}) {
    try {
      const response = await global.axios.put(
        `${this.version()}/${url}`,
        data,
        {
          headers: {
            version: DeviceInfo.getVersion(),
          },
        },
      );
      if (`${url}`.includes('p2p') || `${url}`.includes('campaign')) {
        return this._responseHandlerP2P(response);
      }
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}) {
    try {
      const response = await global.axios.post(
        `${this.version()}/${url}`,
        data,
        {
          headers: {
            version: DeviceInfo.getVersion(),
          },
        },
      );
      if (`${url}`.includes('p2p') || `${url}`.includes('campaign')) {
        return this._responseHandlerP2P(response);
      }
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}) {
    try {
      const response = await global.axios.delete(`${this.version()}/${url}`, {
        params,
        headers: {
          version: DeviceInfo.getVersion(),
        },
      });
      if (`${url}`.includes('p2p')) {
        return this._responseHandlerP2P(response);
      }
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }
  async _responseHandlerP2P(response) {
    if (get(response, 'data.error.code', 200) === constant.UN_AUTH) {
      await AsyncStorage.removeItem(constant.TOKEN);

      // Navigation.dismissAllModals();
      throw 'UnAuthorize';
    }
    console.log('_responseHandlerP2P: ', response.data);
    if (isUndefined(response?.data)) {
      throw 'Data invalid';
    }

    return response?.data;
  }

  async _responseHandler(response) {
    if (get(response, 'data.error.code', 200) === constant.UN_AUTH) {
      await AsyncStorage.removeItem(constant.TOKEN);

      // Navigation.dismissAllModals();
      throw 'UnAuthorize';
    }

    const code = get(response, 'data.error.code', 200);
    if (code >= 400) {
      let message = get(response, 'data.error.message', 'Default error');
      if (isString(message)) {
        // utils.showToast(_.upperFirst(message));
        throw _.upperFirst(i18n.t(message));
      }

      let firstError = first(Object.keys(message));
      // utils.showToast(_.upperFirst(`${firstError} ${response.data.error.message[firstError]}`));
      throw _.upperFirst(
        i18n.t(`${firstError} ${response.data.error.message[firstError]}`),
      );
    }

    if (isUndefined(response?.data)) {
      throw 'Data invalid';
    }

    return response?.data;
  }

  _errorHandler(err) {
    console.log(
      err,
      ': err TrustKeysNetwork/app/features/CryptoCurrency/requests/BaseRequest.js:94',
    );
    throw err;
  }

  getFile(url) {
    window.location.href = `${BASE_URL}/${API_VERSION}/${url}`;
  }
}
