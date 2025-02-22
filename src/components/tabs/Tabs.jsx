import { useState } from 'react';

import TabNav from '../navigations/TabNav';
import Tab from './Tab';

import KeyTable from '../tables/KeyTable';
import AccessTable from '../tables/AccessTable';
import CabinetTable from '../tables/CabinetTable';
import LocationTable from '../tables/LocationTable';
import SiteTable from '../tables/SiteTable';


import { FaRegBuilding as SiteIcon } from 'react-icons/fa';
import { FaLocationCrosshairs as LocationIcon } from 'react-icons/fa6';
import { BiCabinet as CabinetIcon } from 'react-icons/bi';
import { CgEnter as AccessPointIcon } from 'react-icons/cg';
import { IoKeyOutline as KeyIcon } from 'react-icons/io5';

const tabs = [
  { name: 'keys', icon: KeyIcon, table: <KeyTable /> },
  { name: 'accesses', icon: AccessPointIcon, table: <AccessTable /> },
  { name: 'cabinets', icon: CabinetIcon, table: <CabinetTable /> },
  { name: 'locations', icon: LocationIcon, table: <LocationTable /> },
  { name: 'sites', icon: SiteIcon, table: <SiteTable /> },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('keys');

  return (
    <div className='tabs'>
      <TabNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {tabs.map((tab, tabIndex) => (
        <Tab key={tab.name + tabIndex} table={tab.table} />
      ))}
    </div>
  );
}
