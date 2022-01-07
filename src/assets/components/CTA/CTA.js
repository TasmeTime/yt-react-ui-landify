import styled from "styled-components";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";
import PhoneMockUp from "../../images/PhoneMockup2.svg";
import PhoneMockUp2 from "../../images/PhoneMockup3.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import Subtitle2 from "../styled/Subtitle2.styled";
import Img from "../styled/Img.styled";
import { Colors, Shadows } from "../../Theme";

const CTAEL = styled.article`
  padding: 0 7rem;
  background-color: ${Colors.Brand.Turquoise};
  display: flex;
  gap: 3rem;
  overflow: hidden;
`;

const LefColumn = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${Lead} {
    margin-bottom: 2.5rem;
  }
`;

const GetApp = styled(Subtitle2)`
  display: block;
  margin-bottom: 0.5rem;
`;

const RightColumn = styled.div`
  flex: 1;
  position: relative;
`;

const Image1 = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-20%);
  filter: drop-shadow(${Shadows.MobileMockUp});
`;

const Image2 = styled(Img)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(5%, 25%);
  filter: drop-shadow(${Shadows.MobileMockUp});
`;

export default function CTA() {
  return (
    <CTAEL>
      <LefColumn>
        <H2>Manage your projects from your mobile</H2>
        <Lead>
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procastinating. Stay on track and complete
          on time!
        </Lead>
        <span>
          <GetApp>Get the App</GetApp>
          <span>
            <Img src={GooglePlay} style={{ marginRight: "1rem" }} />
            <Img src={AppStore} />
          </span>
        </span>
      </LefColumn>
      <RightColumn>
        <Image1 src={PhoneMockUp} />
        <Image2 src={PhoneMockUp2} />
      </RightColumn>
    </CTAEL>
  );
}
