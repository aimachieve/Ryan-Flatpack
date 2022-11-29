import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import infoFill from '@iconify/icons-eva/info-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <Icon icon={infoFill} {...ICON_SIZE} />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon={phoneFill} {...ICON_SIZE} />
  }
  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
