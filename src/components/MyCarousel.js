import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = ({ latestOffers }) => {
  return (
    <Carousel fade >
      {latestOffers && latestOffers.map(offer => (
        <Carousel.Item key={offer.id} interval={4000}>
          <Carousel.Caption>
            <nav className="top-navbar">
              <ul>
                <li>
                  <p>{offer.title}</p>
                </li>
              </ul>
            </nav>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
