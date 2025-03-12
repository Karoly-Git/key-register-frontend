import { IoKeyOutline as KeyIcon } from 'react-icons/io5';
import { CgEnter as AccessPointIcon } from 'react-icons/cg';
import { BiCabinet as CabinetIcon } from 'react-icons/bi';
import { FaLocationCrosshairs as LocationIcon } from 'react-icons/fa6';
import { FaRegBuilding as SiteIcon } from 'react-icons/fa';

export const apiUrl = {
    isLocalServer: false,
    dev: 'http://localhost:8000',
    prod: 'https://transferstation.co.uk'
};

export const tables = [
    { name: 'keys', icon: KeyIcon, columns: ['Access', 'Hook', 'Cabinet', 'Location', 'Site'] },
    { name: 'accesses', icon: AccessPointIcon, columns: ['Access', 'Site'] },
    { name: 'cabinets', icon: CabinetIcon, columns: ['Cabinet', 'Location', 'Site'] },
    { name: 'locations', icon: LocationIcon, columns: ['Location', 'Site'] },
    { name: 'sites', icon: SiteIcon, columns: ['Site'] },
];



