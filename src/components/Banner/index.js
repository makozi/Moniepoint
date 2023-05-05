import Slider from "react-slick";
import { AppWrapper, DotWrapper, DotContent } from "components/Wrappers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerWrapper } from "./Banner.style";
import { Link } from "react-router-dom";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    appendDots: (dots) => (
      <DotWrapper>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </DotWrapper>
    ),
    customPaging: () => <DotContent className="dot-li-content"></DotContent>,
  };

  const slides = [
    {
      image: "banner-1.jpg",
      title: "#FASHION DAY",
      heading: "80% OFF",
      desc: " Discover fashion that suits to your style",
    },
    {
      image: "banner-10.jpg",
      title: "#BEAUTYSALE",
      heading: "DISCOVER OUR SELECTION",
      desc: "",
    },
    {
      image: "banner-11.jpg",
      title: "#FASHION DAY",
      heading: "80% OFF",
      desc: " Discover fashion that suits to your style",
    },
  ];

  return (
    <BannerWrapper>
      <Slider {...settings}>
        {slides.map(({ title, desc, heading, image }, index) => (
          <div className={`banner-slide-item slide-${index + 1}`} key={title}>
            <div
              className="banner-background"
              style={{
                backgroundImage: `url(${require(`assets/images/${image}`)})`,
              }}
            >
              <div className="banner-slide-content">
                <AppWrapper>
                  <h3 className="banner-title">{title}</h3>
                  <h1 className="banner-promo">{heading}</h1>
                  <p className="banner-desc">{desc}</p>
                  <Link to="#">
                    <div className="banner-cta-button">
                      <p> Check this out</p>
                    </div>
                  </Link>
                </AppWrapper>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </BannerWrapper>
  );
}
