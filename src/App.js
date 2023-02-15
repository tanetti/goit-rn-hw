import { registerRootComponent } from 'expo';
import { AnimatedSplashScreen } from '~/components';
import { Root } from '~/components/Root';

const App = () => (
  <AnimatedSplashScreen>
    <Root />
  </AnimatedSplashScreen>
);

export default registerRootComponent(App);
