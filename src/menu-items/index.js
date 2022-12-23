// project import
import showroom from './showroom';
import accounts from './accounts';
import production from './production';
import financials from './financials';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [accounts, showroom, production, financials, support]
  // items: [accounts, showroom, production, financials, support, applications, formsTables, chartsMap, pages, other]
};

export default menuItems;
