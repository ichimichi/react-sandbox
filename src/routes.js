// Pages
import {
  Home,
} from './Pages';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export default {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
    {
      path: 'https://iamnyasha.github.io/react-primer-docs/',
      name: 'Documentation',
      type: 'external',
      icon: LocalLibraryIcon
    },
  ]
};
