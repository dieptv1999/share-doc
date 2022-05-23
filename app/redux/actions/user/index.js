import {LOGIN, LOGIN_SUCCESS} from './action_types';

export default {
  login: (params, callback) => ({
    type: LOGIN,
    params,
    callback,
  }),

  loginSuccess: data => ({
    type: LOGIN_SUCCESS,
    data,
  }),
};
