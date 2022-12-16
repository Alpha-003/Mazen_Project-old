// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BorderVerticleOutlined, FileSyncOutlined, DatabaseOutlined } from '@ant-design/icons';

// icons
const icons = {
  BorderVerticleOutlined,
  FileSyncOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - production ||============================== //

const production = {
  id: 'group-production',
  title: <FormattedMessage id="Production" />,
  type: 'group',
  children: [
    {
      id: 'jobs',
      title: <FormattedMessage id="Jobs" />,
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
      title: <FormattedMessage id="Material Groups" />,
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
      title: <FormattedMessage id="Stages" />,
      type: 'collapse',
      icon: icon.DatabaseOutlined,
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
      title: <FormattedMessage id="Machines" />,
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
