import styled from "styled-components";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";
import Logo from "../../images/Logo.svg";
import Subtitle2 from "../styled/Subtitle2.styled";
import Body from "../styled/Body.styled";
import Body2 from "../styled/Body2.styled";
import { Colors } from "../../Theme";
import Img from "../styled/Img.styled";

const FooterEl = styled.footer`
  color: ${Colors.Default.White};
  background-color: ${Colors.Default.Black};
  display: flex;
  padding: 3rem 7rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled.span`
  display: flex;

  gap: 1rem;
`;

const Nav = styled.nav`
  display: flex;

  gap: 1rem;
  > a:visited {
    color: ${Colors.Default.White};
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export default function Footer() {
  return (
    <FooterEl>
      <LeftColumn>
        <Img src={Logo} width="32px" />
        <Row>
          <Body as="a">Download Now</Body>
          <Body as="a">License</Body>
        </Row>
        <Nav>
          <Body as="a" href="#">
            About
          </Body>
          <Body as="a" href="#">
            Features
          </Body>
          <Body as="a" href="#">
            Pricing
          </Body>
          <Body as="a" href="#">
            Careers
          </Body>
          <Body as="a" href="#">
            Help
          </Body>
          <Body as="a" href="#">
            Privacy Policy
          </Body>
        </Nav>
        <Body as="small" style={{ color: Colors.Text.Gray300 }}>
          © 2020 Landify UI Kit. All rights reserved
        </Body>
      </LeftColumn>
      <RightColumn>
        <Subtitle2 style={{ color: Colors.Text.Gray300 }}>
          Get the App
        </Subtitle2>
        <Img src={AppStore} />
        <Img src={GooglePlay} />
      </RightColumn>
    </FooterEl>
  );
}
