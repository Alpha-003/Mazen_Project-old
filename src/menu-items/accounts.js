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
          title: <FormattedMessage id="all" />,
          type: 'item',
          url: '/people/all'
        },
        {
          id: 'people-search',
          title: <FormattedMessage id="search" />,
          type: 'item',
          url: '/people/search/details'
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
          title: <FormattedMessage id="all" />,
          type: 'item',
          url: '/organization/all'
        },
        {
          id: 'organization-agencies',
          title: <FormattedMessage id="agencies" />,
          type: 'item',
          url: '/organization/agencies'
        },
        {
          id: 'organization-businesses',
          title: <FormattedMessage id="businesses" />,
          type: 'item',
          url: '/organization/businesses'
        },
        {
          id: 'organization-suppliers',
          title: <FormattedMessage id="suppliers" />,
          type: 'item',
          url: '/organization/suppliers'
        },
        {
          id: 'organization-manufacturer',
          title: <FormattedMessage id="manufacturer" />,
          type: 'item',
          url: '/organization/manufacturer'
        },
      ]
    }
  ]
};

export default accounts;
