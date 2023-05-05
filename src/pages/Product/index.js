import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { products } from "data/products";
import ProductHeader from "components/ProductHeader";
import ProductSlide from "components/ProductSlide";
import { AppWrapper } from "components/Wrappers";
import ProductDescription from "components/ProductDescription";
import { ProductWrapper } from "./Product.style";
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PurchaseBtn from "components/PurchaseBtn";


const StickyHeader = styled(ProductHeader)`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease-in-out;

  &.transparent {
    background-color:#000;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled(motion.div)`
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

const StickyBottomNav = styled(PurchaseBtn)`
  position: sticky;
  bottom: 0;
  z-index: 100;
`;

// const StickyBottomNav = styled(PurchaseBtn)`
//   position: sticky;
//   bottom: 0;
//   z-index: 100;
// `;


export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    window.scroll(0, 0);
    setProduct(products.find((item) => item.id === +id));
  }, [id]);

  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsHeaderTransparent(true);
      } else {
        setIsHeaderTransparent(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     <AnimatePresence mode="wait"> 
    <motion.div
    key={id}
    exit={{
      opacity: 0,
      y: "100px",
      transition: { duration: 0.5 },
    }}
  >
    <Helmet>
      <title>Product | {`${product?.name}`}</title>
    </Helmet>
    <ProductHeader />
    <Main>
      <StickyHeader className={isHeaderTransparent ? 'transparent' : ''} />
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
      >
        <AppWrapper>
          <ProductSlide images={product.images} />
          <ProductDescription product={product} />
        </AppWrapper>
      </ContentWrapper>
      <PurchaseBtn price={product.priceValue} />
    </Main>
  </motion.div>
  </AnimatePresence>
  </>
  );
}
