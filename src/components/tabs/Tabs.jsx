// Import React Redux hook
import { useSelector } from 'react-redux';

// Import icons from react-icons
import { FaRegBuilding as SiteIcon } from 'react-icons/fa';
import { FaLocationCrosshairs as LocationIcon } from 'react-icons/fa6';
import { BiCabinet as CabinetIcon } from 'react-icons/bi';
import { CgEnter as AccessPointIcon } from 'react-icons/cg';
import { IoKeyOutline as KeyIcon } from 'react-icons/io5';

// Import custom components
import TabNav from '../navigations/TabNav';
import Table from './tables/Table';

// Define tab data
const tabs = [
  { name: 'keys', icon: KeyIcon, columns: ['Access', 'Hook', 'Cabinet', 'Location', 'Site'] },
  { name: 'accesses', icon: AccessPointIcon, columns: ['Access', 'Site'] },
  { name: 'cabinets', icon: CabinetIcon, columns: ['Cabinet', 'Location', 'Site'] },
  { name: 'locations', icon: LocationIcon, columns: ['Location', 'Site'] },
  { name: 'sites', icon: SiteIcon, columns: ['Site'] },
];

export default function Tabs() {
  // Get active tab from redux store
  const activeTab = useSelector(state => state.app.activeTab.name);

  return (
    <div className="tabs">
      {/* Render TabNav component */}
      <TabNav tabs={tabs} />

      {/* Render the corresponding Table component based on active tab */}
      {tabs.map((tab, tabIndex) =>
        tab.name === activeTab ? <Table key={tab.name + tabIndex} tabName={tab.name} columns={tab.columns} /> : null
      )}
    </div>
  );
}
