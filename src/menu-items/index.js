// project import
import showroom from './showroom';
import accounts from './accounts';
import production from './production';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import other from './other';
import pages from './pages';
import financials from './financials';
import support from './support';
import applications from './applications';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [accounts, showroom, production, financials, support, applications, formsTables, chartsMap, pages, other]
};

export default menuItems;
