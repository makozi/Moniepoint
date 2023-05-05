import { Heart, Bag2, ArrowLeft2, Share } from "iconsax-react";
import { Link } from "react-router-dom";
import Badge from "components/Badge";
import useTheme from "hooks/theme";
import { AppWrapper } from "components/Wrappers";
import { ProductHeaderWrapper } from "./ProductHeader.style";

export default function ProductHeader() {
  const { theme } = useTheme();
  const { iconColor2, dimensions } = theme || {};
  return (
    <ProductHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Link to="/">
            <div className="go-back">
              <ArrowLeft2 size={dimensions.iconMediumSize} color={iconColor2} />
            </div>
          </Link>

          <div className="header-actions-container">
            <div className="header-actions-icon icon-1">
              <Heart size={dimensions.iconMediumSize} color={iconColor2} />
            </div>
            <div className="header-actions-icon icon-2">
              <Share size={dimensions.iconMediumSize} color={iconColor2} />
            </div>
            <div className="header-actions-icon icon-3">
              <Bag2 size={dimensions.iconMediumSize} color={iconColor2} />
              <Badge value="1" />
            </div>
          </div>
        </div>
      </AppWrapper>
    </ProductHeaderWrapper>
  );
}
