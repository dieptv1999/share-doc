import {Navigation} from 'react-native-navigation';
import RegisterScreens from './app/components/RegisterScreens';
import store from './app/redux/store';
import {PREFIX_NAVIGATION} from './app/utils/constant';

RegisterScreens(store);

startApp();

async function startApp() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: PREFIX_NAVIGATION + 'Home',
              },
            },
          ],
        },
      },
    });
  });
}
