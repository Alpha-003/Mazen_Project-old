// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { BankOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  BankOutlined,
  UsergroupAddOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const accounts = {
  id: 'group-widget',
  title: <FormattedMessage id="Accounts" />,
  type: 'group',
  children: [
    {
      id: 'people',
      title: <FormattedMessage id="People" />,
      type: 'collapse',
      icon: icons.UsergroupAddOutlined,
      children: [
        {
          id: 'people-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/people/list'
        }
      ]
    },
    {
      id: 'organization',
      title: <FormattedMessage id="Organization" />,
      type: 'collapse',
      icon: icons.BankOutlined,
      children: [
        {
          id: 'organization-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/organization/list'
        }
      ]
    },
  ]
};

export default accounts;
