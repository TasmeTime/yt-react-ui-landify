import styled from "styled-components";
import H4 from "../styled/H4.styled";
import Body from "../styled/Body.styled";
import Img from "../styled/Img.styled";

const StatItemEl = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

export default function StatItem({ item }) {
  const { icon, title, text } = item;
  return (
    <StatItemEl>
      <Img src={icon} />
      <span>
        <H4>{title}</H4>
        <Body>{text}</Body>
      </span>
    </StatItemEl>
  );
}
