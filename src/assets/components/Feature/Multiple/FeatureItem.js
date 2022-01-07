import styled from "styled-components";
import H5 from "../../styled/H5.styled";
import Body from "../../styled/Body.styled";
import Img from "../../styled/Img.styled";

const FeatureItemEl = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Text = styled(Body)`
  text-align: center;
`;

export default function FeatureItem({ item }) {
  const { icon, title, text } = item;
  return (
    <FeatureItemEl>
      <Img src={icon} />
      <H5>{title}</H5>
      <Text>{text}</Text>
    </FeatureItemEl>
  );
}
