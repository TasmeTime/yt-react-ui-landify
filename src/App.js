import styled from "styled-components";
import CTA from "./assets/components/CTA/CTA";
import FeatureM from "./assets/components/Feature/Multiple/FeatureM";
import FeatureS from "./assets/components/Feature/Single/FeatureS";
import FeatureS2 from "./assets/components/Feature/Single/FeatureS2";
import Footer from "./assets/components/Footer/Footer";
import Hero from "./assets/components/Hero/Hero";
import LogoClouds from "./assets/components/LogoClouds/LogoClouds";
import Stats from "./assets/components/Stats/Stats";
import Button from "./assets/components/styled/Button.styled";
import LLI from "./assets/components/styled/LLI.styled";
import Testimonials from "./assets/components/Testimonials/Testimonials";
import { Colors } from "./assets/Theme";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppEl>
      <Hero />
      <LogoClouds />
      <FeatureM />
      <Testimonials />
      <Stats />
      <FeatureS />
      <FeatureS2 />
      <CTA />
      <Footer />
    </AppEl>
  );
}

export default App;
