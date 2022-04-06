import {HomeStack, ProfileStack} from '@/navigation/Stack';
import Routes from '@/navigation/Routes';

const screens = [
  {
    name: Routes.HOME_STACK,
    component: HomeStack,
    icon: 'home',
  },
  {
    name: Routes.PROFILE_STACK,
    component: ProfileStack,
    icon: 'person',
  },
];

export default screens;
