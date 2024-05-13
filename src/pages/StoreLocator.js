import React, { useState, useEffect } from 'react';
import "./StoreLocator.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StoreLocator() {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [stores] = useState([
        { name: 'H&M New York City', address: '435 7th Ave, New York, NY 10001, United States', lat: 40.751083, lng: -73.990964 },
        { name: 'H&M Los Angeles', address: '8500 Beverly Blvd, Los Angeles, CA 90048, United States', lat: 34.075157, lng: -118.377345 },
        { name: 'H&M Chicago', address: '22 N State St, Chicago, IL 60602, United States', lat: 41.883838, lng: -87.628780 },
        { name: 'H&M Miami', address: '541 Lincoln Rd, Miami Beach, FL 33139, United States', lat: 25.790654, lng: -80.132026 }
    ]);
    const [filter, setFilter] = useState('');
    const [filteredStores, setFilteredStores] = useState([]);

    useEffect(() => {
        initMap();
    }, []);

    function initMap() {
        const center = { lat: 40.7128, lng: -74.0060 };
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
