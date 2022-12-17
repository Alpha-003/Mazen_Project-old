// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  AppstoreOutlined,
  TagsOutlined,
  BuildOutlined
} from '@ant-design/icons';

// icons
const icons = {
  TagsOutlined,
  AppstoreOutlined,
  BuildOutlined
};

// ==============================|| MENU ITEMS - showroom ||============================== //

const showroom = {
  id: 'group-showroom',
  title: <FormattedMessage id="Showroom" />,
  type: 'group',
  children: [
    {
      id: 'products',
      title: <FormattedMessage id="products" />,
      type: 'collapse',
      icon: icons.TagsOutlined,
      children: [
        {
          id: 'products-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/showroom/product'
        }
      ]
    },
    {
      id: 'bundles',
      title: <FormattedMessage id="Bundles" />,
      type: 'collapse',
      icon: icons.BuildOutlined,
      children: [
        {
          id: 'bundles-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/showroom/bundles'
        }
      ]
    },
    {
      id: 'categories',
      title: <FormattedMessage id="Categories" />,
      type: 'collapse',
      icon: AppstoreOutlined,
      children: [
        {
          id: 'categories-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/showroom/categories'
        }
      ]
    }
  ]
};

export default showroom;
