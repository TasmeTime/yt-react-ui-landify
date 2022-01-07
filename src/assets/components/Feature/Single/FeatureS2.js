import styled from "styled-components";
import BulbImage from "../../../images/Bulb.svg";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import Img from "../../styled/Img.styled";

const FeatureS2El = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 7rem;
  gap: 2rem;
`;
const Content = styled.div`
  display: flex;
  column-gap: 3rem;

  > h3 {
    flex: 1;
  }
  > span {
    flex: 1;
  }
`;

export default function FeatureS2() {
  return (
    <FeatureS2El>
      <Content>
        <H3>Enter the world of all fashion trends</H3>
        <Lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          scelerisque at quam congue posuere libero in sit quam. Consequat,
          scelerisque non tincidunt sit lectus senectus.
        </Lead>
      </Content>
      <Img src={BulbImage} />
    </FeatureS2El>
  );
}
