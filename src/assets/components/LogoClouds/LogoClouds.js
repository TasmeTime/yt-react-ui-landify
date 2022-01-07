import styled from "styled-components";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import HubspotLogo from "../../images/HubspotLogo.svg";
import GoogleLogo from "../../images/GoogleLogo.svg";
import MicrosoftLogo from "../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../images/WalmartLogo.svg";
import FedExLogo from "../../images/FedExLogo.svg";
import Img from "../styled/Img.styled";

const LogoCloudsEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  row-gap: 2rem;
`;

const Divier = styled.span`
  background: linear-gradient(
    90deg,
    rgba(192, 204, 218, 0.1) 0%,
    rgba(192, 204, 218, 0.6) 50.38%,
    rgba(192, 204, 218, 0.1) 100%
  );
  width: 90%;
  height: 0.15rem;
`;

const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;

export default function LogoClouds() {
  return (
    <LogoCloudsEl>
      <Divier />
      <LogoContainer>
        <Img src={AirbnbLogo} />
        <Img src={HubspotLogo} />
        <Img src={GoogleLogo} />
        <Img src={MicrosoftLogo} />
        <Img src={WalmartLogo} />
        <Img src={FedExLogo} />
      </LogoContainer>
      <Divier />
    </LogoCloudsEl>
  );
}
