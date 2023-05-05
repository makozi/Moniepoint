import { More, Star1, Like1 } from "iconsax-react";
import useTheme from "hooks/theme";
import { CustomerRatingWrapper } from "./Rating.style";

export default function CustomerRating() {
  const { theme } = useTheme();
  return (
    <CustomerRatingWrapper>
      <div className="top">
        <div className="customer-info">
          <div className="customer-display"></div>
          <p className="customer-name">Eren Y*******r</p>
        </div>

        <div className="customer-rating">
          <Star1 size="14" color={theme.gold} />
          <p>5.0</p>
          <More size="18" color={theme.grey1} variant="Outline" />
        </div>
      </div>

      <div className="hightligh-tags">
        <div className="hightligh-tag-item">Product in good condtion</div>
        <div className="hightligh-tag-item">Very fast delivery</div>
        <div className="hightligh-tag-item">Fast seller response</div>
      </div>

      <p className="customer-review-text">
        According to my expectations. This is the best, <br />
        Thank you.
      </p>

      <div className="customer-review-action">
        <div className="helpful">
          <Like1 size="16" color={theme.green} />
          <p>Helpful ?</p>
        </div>
        <p className="customer-review-day">Yesterdays</p>
      </div>
    </CustomerRatingWrapper>
  );
}
