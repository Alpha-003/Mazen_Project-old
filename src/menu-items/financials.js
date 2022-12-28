// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { PoundCircleOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  PoundCircleOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - financials ||============================== //

const financials = {
  id: 'group-financial',
  title: <FormattedMessage id="financials" />,
  type: 'group',
  children: [
    {
      id: 'order',
      title: <FormattedMessage id="order" />,
      type: 'collapse',
      icon: icons.ProfileOutlined,
      children: [
        {
          id: 'list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/financials/list'
        }
      ]
    },
    {
      id: 'payments',
      title: <FormattedMessage id="payments" />,
      type: 'collapse',
      icon: icons.PoundCircleOutlined,
      children: [
        {
          id: 'list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/financials/payments'
        }
      ]
    }
  ]
};

export default financials;
