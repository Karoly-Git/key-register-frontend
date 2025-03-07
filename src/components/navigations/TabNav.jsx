import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/appSlice';

export default function TabNav({ tabs }) {
    const activeTab = useSelector(state => state.app.activeTab.name); // Corrected state reference
    const dispatch = useDispatch();

    function handleButtonClick(tabName) {
        dispatch(setActiveTab(tabName));
    }

    return (
        <nav className='tab-nav'>
            <ul>
                {tabs.map(tab => (
                    <li key={tab.name}>
                        <button
                            onClick={() => handleButtonClick(tab.name)}
                            className={activeTab === tab.name ? 'tab-btn active-tab-btn' : 'tab-btn'}
                        >
                            <span>{React.createElement(tab.icon, { className: 'icon' })}</span>
                            <span className='tab-name'>{tab.name}</span>
                        </button>
                    </li>
                ))}
                {false && <li><button className='tab-btn placeholder-btn'></button></li>}
            </ul>
        </nav>
    );
}
