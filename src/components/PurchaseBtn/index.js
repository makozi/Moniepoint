import { number } from "prop-types";
import { Bag2 } from "iconsax-react";
import { AppWrapper } from "components/Wrappers";
import useTheme from "hooks/theme";
import { PurchaseBtnWrapper } from "./PurchaseBtn.style";

export default function PurchaseBtn({ price }) {
  const { theme } = useTheme();

  return (
    <PurchaseBtnWrapper>
      <AppWrapper>
        <div className="purchase-btn-content">
          <div className="price-section">
            <p>Total Price</p>
            <h5>${parseFloat(price).toFixed(2)}</h5>
          </div>

          <div className="product-cta">
            <div className="cart">
              <Bag2 size="20" color={theme.white} />
              <p>1</p>
            </div>

            <div className="buy-now">
              <p>Buy Now</p>
            </div>
          </div>
        </div>
      </AppWrapper>
    </PurchaseBtnWrapper>
  );
}

PurchaseBtn.propTypes = {
  price: number,
};
