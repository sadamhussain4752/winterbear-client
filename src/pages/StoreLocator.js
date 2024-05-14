import React, { useState, useEffect } from 'react';
import "./StoreLocator.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input, Button } from "antd";

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
    const [filtermap, setFilterMap] = useState([]);

    useEffect(() => {
        initMap();
    }, []);

    function initMap() {
        const center = { lat: 18.561896, lng: 73.916535 };
        const newMap = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 5.2,
            center: center
        });
        setMap(newMap);

        stores.forEach(store => {
            const icon = {
                url: "../assets/images/Winterbear-Favicon32x32.png", // Replace 
                scaledSize: new window.google.maps.Size(25, 25)
            };
            const marker = new window.google.maps.Marker({
                position: { lat: store.lat, lng: store.lng },
                map: newMap,
                title: store.name,
                icon: icon
            });

            marker.addListener('click', () => {
                displayStoreInfo(store);
            });

            setMarkers(prevMarkers => [...prevMarkers, marker]);
        });
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
        if (searchText.length > 0) {
            setFilterMap(filteredStores)

        } else {
            setFilterMap([])

        }


    }

    return (
        <>
            <Header />
            <div className='section my-5'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className="section-heading">
                            <h6 className="theme-bg-text small">Our Stores</h6>
                        </div>
                        <div className='col-md-8 mb-3'>
                            <div id="map" style={{ height: '450px', width: '100%' }}></div>
                        </div>
                        <div className='col-md-4'>
                            <h3>Find Your Preferred Store</h3>

                            <Input
                                placeholder="Search for stores.."
                                className='my-2 px-3 Disabled readonly bg-white'
                                onChange={filterStores}
                                value={filter}
                            />

                            <Button
                                onClick={() => {
                                    // window.open(switchmap);
                                }}
                                className="btn button rounded w-100 ht-10"
                                type="primary"
                            >
                                Find a preferred store
                            </Button>

                            <div id="storeInfo" style={{ height: '500px', padding: '10px', boxSizing: 'border-box' }}>
                                {filtermap.map((store, index) => (
                                    <div key={index}>
                                        <h5 className='fs-5'>{store.name}</h5>
                                        <p className='fs-6'>{store.address}</p>
                                        <Button

                                            className="btn button rounded-pill w-50 ht-10 mb-2"
                                            onClick={() => {
                                                window.open(`https://maps.google.com/?q=${store.lat},${store.lng}`);
                                            }}> Visit store</Button>
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
