import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import "../App.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1441 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  // console.log(movies.results, "??");
  return (
    <div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.results.map((item) => (
          <MovieCard item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
