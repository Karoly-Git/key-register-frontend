import { useSelector } from 'react-redux';
import TabNav from '../navigations/TabNav';

import { FaRegBuilding as SiteIcon } from 'react-icons/fa';
import { FaLocationCrosshairs as LocationIcon } from 'react-icons/fa6';
import { BiCabinet as CabinetIcon } from 'react-icons/bi';
import { CgEnter as AccessPointIcon } from 'react-icons/cg';
import { IoKeyOutline as KeyIcon } from 'react-icons/io5';
import Table from './tables/Table';

const tabs = [
  { name: 'keys', icon: KeyIcon, columns: ['Access', 'Hook', 'Cabinet', 'Location', 'Site'] },
  { name: 'accesses', icon: AccessPointIcon, columns: ['Access', 'Site'] },
  { name: 'cabinets', icon: CabinetIcon, columns: ['Cabinet', 'Location', 'Site'] },
  { name: 'locations', icon: LocationIcon, columns: ['Location', 'Site'] },
  { name: 'sites', icon: SiteIcon, columns: ['Site'] },
];


export default function Tabs() {
  const activeTab = useSelector(state => state.tabSlice.activeTabName);

  return (
    <div className='tabs'>
      <TabNav tabs={tabs} />

      {tabs.map((tab, tabIndex) => (
        tab.name === activeTab ? <Table key={tab.name + tabIndex} tabName={tab.name} columns={tab.columns} /> : null
      ))}
    </div>
  );
}
