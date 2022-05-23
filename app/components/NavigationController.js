import {Navigation} from 'react-native-navigation';
import _ from 'lodash';
import URL from 'url-parse';
import i18n from 'i18n';

import {PREFIX_NAVIGATION} from 'app/utils/constant';
let defaultOption = {
  topBar: {
    visible: false,
    height: 0,
    animate: false,
  },
  bottomTabs: {
    visible: false,
  },
};
let defaultOptionModal = {
  topBar: {
    visible: false,
    height: 0,
    animate: false,
  },
  modalPresentationStyle: 'fullScreen',
};
/**V2 */
export const showQRScanner = _.debounce(
  ({onScanSuccess, onScanError}) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: PREFIX_NAVIGATION + 'Login',
              id: PREFIX_NAVIGATION + 'Login',
              options: defaultOptionModal,
              passProps: {
                onScanSuccess,
                goBack: () => {
                  Navigation.dismissModal(PREFIX_NAVIGATION + 'Login');
                },
                onScanError,
              },
            },
          },
        ],
      },
    });
  },
  1000,
  {leading: true, trailing: false},
);
