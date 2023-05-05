import { Shop } from "iconsax-react";
import { motion } from "framer-motion";
import { object, string } from "prop-types";
import { scrollReveal } from "utils/animations";
import { SellerInfoWrapper } from "./ProductDescription.style";

export default function SellerInfo({ lastActive, feedback, theme }) {
  return (
    <motion.div {...scrollReveal(1)}>
      <SellerInfoWrapper className="seller-info">
        <h4 className="sub-section-title">Seller Information :</h4>
        <div className="seller-info-content">
          <div className="store-display-picture"></div>
          <div className="store-display-info">
            <h5>Thrifting_Store</h5>
            <p className="availability">
              <span>Active {lastActive}</span> <span>|</span>
              <span>{feedback} Positive Feedback</span>
            </p>
            <div className="visit-store-btn">
              <Shop size="18" color={theme.green} />
              <p>Visit Store</p>
            </div>
          </div>
        </div>
      </SellerInfoWrapper>
    </motion.div>
  );
}

SellerInfo.protTypes = {
  lastActive: string,
  feedback: string,
  theme: object,
};
