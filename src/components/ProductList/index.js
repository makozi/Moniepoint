import { Link } from "react-router-dom";
import { AppWrapper } from "components/Wrappers";
import { products } from "data/products";
import ProductListItem from "./ProductListItem";
import { ProductListWrapper, ProductItemWrapper } from "./ProductList.style";

export default function ProductList() {
  return (
    <ProductListWrapper>
      <AppWrapper>
        <div className="section-heading">
          <h2 className="section-title">Best Sale Product</h2>
          <Link className="section-link" style={{fontWeight:"bold"}}>See more</Link>
        </div>

        <ProductItemWrapper>
          {products.map((item) => (
            <div className="products-item" key={item.id}>
              <ProductListItem {...item} />
            </div>
          ))}
        </ProductItemWrapper>
      </AppWrapper>
    </ProductListWrapper>
  );
}
