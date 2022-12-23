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
  title: <FormattedMessage id="accounts" />,
  type: 'group',
  children: [
    {
      id: 'people',
      title: <FormattedMessage id="people" />,
      type: 'collapse',
      icon: icons.UsergroupAddOutlined,
      children: [
        {
          id: 'people-list',
          title: <FormattedMessage id="all-people" />,
          type: 'item',
          url: '/people/all'
        },
        {
          id: 'people-search',
          title: <FormattedMessage id="search-people" />,
          type: 'item',
          url: '/people/search'
        },
        {
          id: 'people-customers',
          title: <FormattedMessage id="people-customers" />,
          type: 'item',
          url: '/people/customers'
        },
        {
          id: 'people-employees',
          title: <FormattedMessage id="people-employees" />,
          type: 'item',
          url: '/people/employees'
        }
      ]
    },
    {
      id: 'organization',
      title: <FormattedMessage id="organization" />,
      type: 'collapse',
      icon: icons.BankOutlined,
      children: [
        {
          id: 'organization-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/organization/list'
        }
      ]
    }
  ]
};

export default accounts;
