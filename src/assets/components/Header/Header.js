import styled from "styled-components";
import Logo from "../../images/DarkLogo.svg";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";
import Img from "../styled/Img.styled";
import { Colors, TextStyles } from "../../Theme";

const HeaderEl = styled.header`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const RightPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar = styled.nav`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  color: ${Colors.Text.Gray900};
  ${TextStyles.Bundler(TextStyles.Lable.Medium)}
`;
const NavItem = styled.a`
  :visited {
    color: ${Colors.Text.Gray900};
  }
`;

export default function Header() {
  return (
    <HeaderEl>
      <LeftPart>
        <LogoContainer>
          <Img src={Logo} />
        </LogoContainer>
        <NavBar>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Products</NavItem>
          <NavItem href="#">Pricing</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem href="#">Jobs</NavItem>
          <NavItem href="#">More</NavItem>
        </NavBar>
      </LeftPart>
      <RightPart>
        <Img src={GooglePlay} />
        <Img src={AppStore} />
      </RightPart>
    </HeaderEl>
  );
}
