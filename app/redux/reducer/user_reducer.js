import {LOGIN} from '../actions/user/action_types';

const initState = {
  user: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN: {
      return state;
    }
    default: {
      return state;
    }
  }
};
