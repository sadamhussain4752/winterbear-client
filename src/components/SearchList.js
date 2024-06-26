import React, { useState } from 'react';
import { Input, Spin, Avatar, Popover, List } from 'antd'; // Import required components from antd
import debounce from 'lodash/debounce';
import constant from '../constant/constant';
import { useNavigate } from 'react-router-dom';

async function fetchUserList(searchValue) {
  console.log('fetching products with keyword', searchValue);
  return fetch(`${constant.baseUrl}api/product/allProduct?lang=1`)
    .then((response) => response.json())
    .then((body) => {
      const filteredProducts = body.products.filter((product) =>
        product.key_word && product.key_word.toLowerCase().includes(searchValue.toLowerCase())  ||
        product.name && product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredProducts, "filteredProducts");
      return filteredProducts.map((product) => ({
        label: (
          <div className='col-md-12' style={{ display: 'flex', alignItems: 'center', height: "60px" }}>
            <Avatar className='col-md-4' src={product.images[0]} style={{ marginRight: 8, width: "30px", height: "30px" }} />
            <span className='col-md-8'>{product.name}</span>
          </div>
        ),
        value: product._id,
      }));
    });
}

const SearchList = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleSearch = debounce((value) => {
    setFetching(true);
    fetchUserList(value).then((newOptions) => {
      setOptions(newOptions.slice(0, 6)); // Display only top 6 results
      setFetching(false);
    });
  }, 800);

  const handleSelect = (value) => {
    navigate(`/product/${value}`);
  };

  const handleNavigation = () => {
    console.log('Search initiated with keyword:', searchText);
    navigate(`/shop/0?search=${encodeURIComponent(searchText)}`);
  };

  const content = (
    <div>
      {fetching ? (
        <Spin size="small" />
      ) : (
        <div className='search-drpdwn'>
          <div className='row'>
            {options.map((item, index) => (
              <div key={index} className='col-md-6' onClick={() => handleSelect(item.value)}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className='mni-contt'>
      <Popover
        content={content}
        trigger="click"
        visible={searchText.length > 0}
        onVisibleChange={(visible) => {
          if (!visible) setSearchText('');
        }}
      >
        <Input
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleNavigation(navigate, e.target.value);
            }
          }} style={{ width: '100%' }}
        />
      </Popover>
    </div>
  );
};

export default SearchList;
