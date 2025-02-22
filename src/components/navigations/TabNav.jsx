export default function TabNav({ tabs, activeTab, setActiveTab }) {

    function handleButtonClick(tabName) {
        setActiveTab(tabName);
        console.log(tabName);
    };

    return (
        <nav className='tab-nav'>
            <ul>
                {tabs.map(tab => (
                    <li key={tab.name}>
                        <button onClick={() => handleButtonClick(tab.name)} className={activeTab === tab.name ? 'tab-btn active-tab-btn' : 'tab-btn'}>
                            <span><tab.icon className='icon' /></span>
                            <span className='tab-name'>{tab.name}</span>
                        </button>
                    </li>
                ))}

                <li><button className='tab-btn placeholder-btn'></button></li>
            </ul>
        </nav>
    )
}
