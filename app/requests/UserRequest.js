import BaseRequest from './BaseRequest';

const schema = 'user';
/**
 * key base on host:port
 */
export default class UserRequest extends BaseRequest {
  /**
   *
   * @returns {Promise<BaseRequest._responseHandler.props.data|undefined>}
   */
  login(params) {
    const url = `${schema}/login`;
    return this.post(url, params);
  }
}
