import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { array } from "prop-types";
import { scrollReveal } from "utils/animations";
import { ProductSlideWrapper } from "./ProductSlide.style";

export default function ProductSlide({ images }) {
  const [active, setActive] = useState();

  useEffect(() => {
    if (images) {
      setActive(images[0]);
    }
  }, [images]);

  return (
    <motion.div {...scrollReveal(0.4)}>
      <ProductSlideWrapper style={{marginTop:80}}>
        <div className="featured-image">
          <img src={active} alt="" className="primary-img" />
          <div className="image-options">
            {images?.map((item) => (
              <div className="image-option-item" key={item}>
                <img src={item} alt="" onClick={() => setActive(item)} />
              </div>
            ))}
          </div>
        </div>
      </ProductSlideWrapper>
    </motion.div>
  );
}

ProductSlide.propTypes = {
  images: array,
};
