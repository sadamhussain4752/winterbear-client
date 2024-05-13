import React, { useState, useEffect } from 'react';
import "./StoreLocator.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StoreLocator() {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [stores] = useState([
        { name: 'Winterbear Pune', address: 'GP-9,10, Lower Ground Floor, Phoenix Marketcity, 207, Viman Nagar Rd, Clover Park, Viman Nagar, Pune, Maharashtra 411014, India', lat: 18.561896, lng: 73.916535 },
        { name: 'Winterbear Mumbai', address: 'Lower Ground, : PHOENIX MARKETCITY, LG-28, Lal Bahadur Shastri Marg, Patelwadi.Kurla, Kamani, Kurla West, Kurla, Mumbai, Maharashtra 400070, India', lat: 19.081797, lng: 72.88183 },
        { name: 'Winterbear Chennai', address: 'VR Chennai, 100 Feet Rd, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040', lat: 13.082896, lng: 80.198699 },
        { name: 'Winterbear Bangalore - HSR Layout', address: 'Ground Floor, No. 1461/1784, Venlak Arcade, 19th Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102', lat: 12.914548, lng: 77.644889 }
    ]);
    const [filter, setFilter] = useState('');
    const [filteredStores, setFilteredStores] = useState([]);

    useEffect(() => {
        initMap();
    }, []);

    function initMap() {
        const center = { lat: 18.561896, lng: 73.916535 };
        const newMap = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: center
        });
        setMap(newMap);

        stores.forEach(store => {
            const marker = new window.google.maps.Marker({
                position: { lat: store.lat, lng: store.lng },
                map: newMap,
                title: store.name
            });

            marker.addListener('click', () => {
                displayStoreInfo(store);
            });

            setMarkers(prevMarkers => [...prevMarkers, marker]);
        });

        setFilteredStores(stores);
    }

    function displayStoreInfo(store) {
        const storeInfoDiv = document.getElementById('storeInfo');
        storeInfoDiv.innerHTML = '<h2>' + store.name + '</h2><p>' + store.address + '</p>';
    }

    function filterStores(event) {
        const searchText = event.target.value.toLowerCase();
        setFilter(searchText);

        const filteredStores = stores.filter(store =>
            store.name.toLowerCase().includes(searchText) || store.address.toLowerCase().includes(searchText)
        );

        setFilteredStores(filteredStores);

        const storeInfoDiv = document.getElementById('storeInfo');
        
        if (filteredStores.length === 0) {
            storeInfoDiv.innerHTML = '<p>No matching stores found.</p>';
        } else {
            storeInfoDiv.innerHTML = '';
            filteredStores.forEach(store => displayStoreInfo(store));
        }
    }

    return (
        <>
            <Header />
            <div className='section my-5'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-8 mb-3'>
                            <h1>Winter Bear Store Locator</h1>
                            <div id="map" style={{ height: '500px', width: '100%' }}></div>
                        </div>
                        <div className='col-md-4 mt-5'>
                            <input type="text" placeholder="Search for stores.." className='my-2 px-3 Disabled readonly ' onChange={filterStores} value={filter} />
                            <div id="storeInfo" style={{ height: '500px',  padding: '10px', boxSizing: 'border-box' }}>
                                {filteredStores.map((store, index) => (
                                    <div key={index}>
                                        <h2>{store.name}</h2>
                                        <p>{store.address}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StoreLocator;
