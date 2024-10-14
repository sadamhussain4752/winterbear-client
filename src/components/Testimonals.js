import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const testimonials = [
  {
    id: 1,
    date: "03/19/24",
    rating: 4.5,
    title: "Finally an official BT21 and anime merch store!",
    content: "This store has a wide variety of cute stationery ranging from BT21 apparel, BT21 minini merch including paper clips, hair clips, coasters, stickers, plushies, tote bags, stuffed pillows, pens, keychains, and so much more. There are anime figurines, manga, binders, diaries, phone charms, tiffin boxes and a lot more. Absolute treat for stationery lovers, BTS fans, and weebs. Must visit!... Read More",
    author: "Atrayee Roy",
  },
  {
    id: 2,
    date: "04/10/24",
    rating: 5,
    title: "Great collection of anime merchandise!",
    content: "I found all the anime figurines I was looking for. The quality is amazing and the prices are reasonable. The store is well-organized and the staff is very helpful. Highly recommended!... Read More",
    author: "John Doe",
  },
  {
    id: 3,
    date: "05/01/24",
    rating: 4,
    title: "Love the BT21 collection!",
    content: "The BT21 collection here is simply adorable. I bought a lot of stuff including plushies, stationery, and keychains. The prices are good and the quality is excellent. Will definitely visit again!... Read More",
    author: "Jane Smith",
  },
  // Add more testimonials as needed
];

const Testimonals = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
        {halfStar && <i className="fa-solid fa-star-half"></i>}
      </>
    );
  };

  return (
    <section className="py-5 px-md-5 px-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-9 col-12 d-flex align-items-center">
            <div className="text-dark theme-bg-text mb-2">Testimonials</div>
          </div>
          <div className="col-md-3 col-12 text-end py-5 d-flex align-items-center">
            <p>
              <strong></strong>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i> 7009 Comments
            </p>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay
          dots={false}
          autoplayTimeout={3000}
          smartSpeed={6000}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <div className="item px-3" key={testimonial.id}>
              <div className="row">
                <div className="col-2">
                  <p className="fs-1 fw-bold">
                    <i className="fa-solid fa-quote-left"></i>
                  </p>
                </div>
                <div className="col-8 mt-3">
                  <div>
                    <p className="mb-1">
                      {renderStars(testimonial.rating)}
                      <small>{testimonial.date}</small>
                    </p>
                    <p className="fw-bold fs-6 mb-1 lh-0">{testimonial.title}</p>
                    <p>{testimonial.content}</p>
                    <p className="fw-bold">
                      <small>{testimonial.author}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonals;
