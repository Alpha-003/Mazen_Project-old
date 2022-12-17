// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { FileExclamationOutlined } from '@ant-design/icons';

// icons
const icons = {
  FileExclamationOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const support = {
  id: 'group-support',
  title: <FormattedMessage id="support" />,
  type: 'group',
  children: [
    {
      id: 'tickets',
      title: <FormattedMessage id="tickets" />,
      type: 'collapse',
      icon: icons.FileExclamationOutlined,
      children: [
        {
          id: 'ticket-list',
          title: <FormattedMessage id="tickets" />,
          type: 'item',
          url: '/support/ticket'
        }
      ]
    }
  ]
};

export default support;
