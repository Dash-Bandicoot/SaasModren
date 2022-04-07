import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppCreative';
import { ResetCSS } from 'common/assets/css/style';
import Seo from 'components/seo';
import Navbar from 'containers/SaasAppCreative/Navbar';
import Banner from 'containers/SaasAppCreative/Banner';
import Clients from 'containers/SaasAppCreative/Clients';
import HowItWorks from 'containers/SaasAppCreative/HowItWorks';
import AnalyticsTool from 'containers/SaasAppCreative/AnalyticsTool';
import Portfolio from 'containers/SaasAppCreative/Portfolio';
import Features from 'containers/SaasAppCreative/Features';
import SystemMonitoring from 'containers/SaasAppCreative/SystemMonitoring';
import WorldMap from 'containers/SaasAppCreative/WorldMap';
import NewsFeed from 'containers/SaasAppCreative/NewsFeed';
import CallToAction from 'containers/SaasAppCreative/CallToAction';
import Footer from 'containers/SaasAppCreative/Footer';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasAppCreative/saasAppCreative.style';
import 'animate.css';

const SaasAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Saas App Creative | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Clients />
          <HowItWorks />
          <AnalyticsTool />
          <Portfolio />
          <Features />
          <SystemMonitoring />
          <WorldMap />
          <NewsFeed />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppCreative;
