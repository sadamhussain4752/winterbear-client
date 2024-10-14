import React, { useState } from 'react';


const Sidenav = () => {
    const [sidenavWidth, setSidenavWidth] = useState(0);

    const openNav = () => {
        setSidenavWidth(250);
    };

    const closeNav = () => {
        setSidenavWidth(0);
    };

    return (
        <div>
            <div
                id="mySidenav"
                className="sidenav mt-5"
                style={{ width: `${sidenavWidth}px` }}
            >
                <a href="#" className="closebtn" onClick={closeNav}>
                    &times;
                </a>

                <div className="p-0 text-center rounded mx-5">
                    <h3 className=" fs-2 fw-bolder text-start mb-4 text-uppercase mt-5">
                        Category
                    </h3>
                    {data &&
                        data.Categorys &&
                        data.Categorys.map((item) => (
                            <div
                                className={`${item._id === selectedCategory?._id
                                    ? ""
                                    : "col-md-12 d-flex justify-content-start "
                                    }`}
                                key={item._id}
                                onClick={() => handleCategoryClick(item)}
                            >
                                <div className="align-items-start shop-all-card-item ">
                                    <p className="">{item.name}</p>
                                </div>
                            </div>
                        ))}

                </div>

                <div className="p-0  text-center rounded mx-5">
                    <h3 className=" fs-2 fw-bolder text-start mb-4 text-uppercase  mt-5">
                        Brands
                    </h3>

                    {productOldlist &&
                        productOldlist.productList &&
                        productOldlist.productList.slice(0, 8).map((item) => (
                            <div key={item.brand.id}>
                                <div
                                    className=" shop-all-cards"
                                    onClick={() => handleNavigationbrand(item.brand._id)}
                                >

                                    <p className="brand-namee">{item.brand.name}</p>
                                </div>

                            </div>
                        ))}
                    <div
                        className="shop-all-cards"
                        onClick={() => {
                            navigate(`/Allbrand`);
                        }}
                    >
                        <p className="brand-namee">
                            More Brands <i class="fa-solid fa-arrow-right"></i>
                        </p>
                    </div>
                </div>




            </div>

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span
                style={{ fontSize: '30px', cursor: 'pointer' }}
                onClick={openNav}
            >
                &#9776; open
            </span>
        </div>
    );
};

export default Sidenav;
