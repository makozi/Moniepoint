import { motion } from "framer-motion";
import Helmet from "react-helmet";
import Banner from "components/Banner";
import Header from "components/Header";
import { AppWrapper } from "components/Wrappers";
import QuickActions from "components/QuickActions";
import ProductList from "components/ProductList";
import BottomNav from "components/BottomNav";
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

const StickyHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease-in-out;
  
  &.transparent {
    background-color:#000;
  }
  
  &.scrolled {
    background-color: #ccc;
  }
`;

const StickyBottomNav = styled(BottomNav)`
  position: sticky;
  bottom: 0;
  z-index: 100;
`;

export default function Home() {

  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
  const [isContentWrapperScrolled, setIsContentWrapperScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsHeaderTransparent(true);
      } else {
        setIsHeaderTransparent(false);
      }
      
      if (window.pageYOffset > 10) {
        setIsContentWrapperScrolled(true);
      } else {
        setIsContentWrapperScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
    initial={{
      opacity: 0,
      y: "100px",
      transition: { duration: 0.5, delay: 0.5 },
    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    <Helmet>
      <title>Moniepoint</title>
    </Helmet>
    <Header />
    <Main>
      <StickyHeader
        className={`${isHeaderTransparent ? 'transparent' : ''} ${isContentWrapperScrolled ? 'scrolled' : ''}`}
      />
      <ContentWrapper className={`${isContentWrapperScrolled ? 'scrolled' : ''}`}>
        <Banner />
        <AppWrapper>
          <QuickActions />
        </AppWrapper>
        <ProductList />
      </ContentWrapper>
      <StickyBottomNav />
    </Main>
  </motion.div>
  );
}
