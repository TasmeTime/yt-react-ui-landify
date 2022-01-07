import styled from "styled-components";
import Header from "../Header/Header";
import Button from "../styled/Button.styled";
import H1 from "../styled/H1.styled";
import PhoneMockUp from "../../images/PhoneMockup.svg";
import Img from "../styled/Img.styled";
import BgImage from "../../images/HeroBackground.svg";
import { Shadows } from "../../Theme";

const HeroEl = styled.article`
  padding: 0 7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 4rem;
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled(H1)`
  margin-top: 1rem;
  padding-top: 3rem;
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.MobileMockUp});
`;

export default function Hero() {
  return (
    <HeroEl>
      <Header />
      <Content>
        <span>
          <Title>Organise projects. Get more done.</Title>
          <Button size="lg">Get Started</Button>
        </span>
        <Image src={PhoneMockUp} />
      </Content>
    </HeroEl>
  );
}
