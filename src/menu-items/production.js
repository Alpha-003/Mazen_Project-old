// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BorderVerticleOutlined, FileSyncOutlined, DatabaseOutlined,AppstoreOutlined } from '@ant-design/icons';

// icons
const icons = {
  BorderVerticleOutlined,
  FileSyncOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - production ||============================== //

const production = {
  id: 'group-production',
  title: <FormattedMessage id="production" />,
  type: 'group',
  children: [
    {
      id: 'jobs',
      title: <FormattedMessage id="jobs" />,
      type: 'collapse',
      icon: icons.FileSyncOutlined,
      children: [
        {
          id: 'products-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/production/jobs'
        }
      ]
    },
    {
      id: 'material-group',
      title: <FormattedMessage id="material-group" />,
      type: 'collapse',
      icon: icons.BorderVerticleOutlined,
      children: [
        {
          id: 'bundles-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/production/material-group'
        }
      ]
    },
    {
      id: 'stages',
      title: <FormattedMessage id="stages" />,
      type: 'collapse',
      icon: icons.DatabaseOutlined,
      children: [
        {
          id: 'categories-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/production/stages'
        }
      ]
    },
    {
      id: 'machines',
      title: <FormattedMessage id="machines" />,
      type: 'collapse',
      icon: AppstoreOutlined,
      children: [
        {
          id: 'categories-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/production/machines'
        }
      ]
    }
  ]
};

export default production;
