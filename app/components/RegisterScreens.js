import {Navigation} from 'react-native-navigation';
import React from 'react';
// import DropdownAlert from 'react-native-dropdownalert';
// import DropdownHolderManager from '../core/DropdownHolderManager';
// import {ModalContainer} from '../core/ModalManager';
import {PREFIX_NAVIGATION} from '../utils/constant';
import {Provider} from 'react-redux';

import Home from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const createWrapperScreen = (WrappedComponent, reduxStore) => props => {
  return (
    <Provider store={reduxStore}>
      <WrappedComponent {...props} />
      {/*<DropdownAlert*/}
      {/*  ref={ref => DropdownHolderManager.setDropDown(ref, props.componentId)}*/}
      {/*  closeInterval={2000}*/}
      {/*  onTap={DropdownHolderManager.onTap}*/}
      {/*  onClose={DropdownHolderManager.onclose}*/}
      {/*/>*/}
      {/*<ModalContainer />*/}
    </Provider>
  );
};

export default function RegisterScreens(store) {
  Navigation.registerComponent(
    PREFIX_NAVIGATION + 'Login',
    () => createWrapperScreen(LoginScreen, store, PREFIX_NAVIGATION + 'Login'),
    () => PREFIX_NAVIGATION + 'Login',
  );

  Navigation.registerComponent(
    PREFIX_NAVIGATION + 'Home',
    () => createWrapperScreen(Home, store, PREFIX_NAVIGATION + 'Home'),
    () => PREFIX_NAVIGATION + 'Home',
  );
}
