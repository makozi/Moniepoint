import { Heart, Star1 } from "iconsax-react";
import { Link } from "react-router-dom";
import { string, number, bool, array } from "prop-types";
import classNames from "classnames";
import useTheme from "hooks/theme";
import { ProductListItemWrapper } from "./ProductList.style";

export default function ProductListItem({
  id,
  images,
  name,
  type,
  rating,
  ratingCount,
  price,
  fav,
}) {
  const { theme } = useTheme();
  const { red, black } = theme || {};

  return (
    <Link to={`/product/${id}`}>
      <ProductListItemWrapper>
        <div
          className={classNames("fav-action", {
            "fav-active": fav,
          })}
        >
          <Heart size="16" color={fav ? red : black} />
        </div>
        <div className="product-image">
          <img src={images[0]} alt={`${name}`} />
        </div>
        <div className="product-item-content">
          <div className="product-item-description">
            <p className="product-type">{type}</p>
            <h3 className="product-name">{name}</h3>
          </div>
          <div className="product-meta">
            <div className="product-rating">
              <Star1 size="10" color="#f47373" />
              <p>
                {rating} | {ratingCount}
              </p>
            </div>

            <p className="product-price">{price}</p>
          </div>
        </div>
      </ProductListItemWrapper>
    </Link>
  );
}

ProductListItem.propTypes = {
  id: number,
  images: array,
  name: string,
  type: string,
  rating: number,
  ratingCount: number,
  price: string,
  fav: bool,
};
