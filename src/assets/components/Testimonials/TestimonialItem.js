import styled from "styled-components";
import Lead from "../styled/Lead.styled";
import Lead2 from "../styled/Lead2.styled";
import Subtitle from "../styled/Subtitle.styled";
import QuoteIcon from "../../images/icons/Quote.svg";
import { Colors, Shadows } from "../../Theme";
import Img from "../styled/Img.styled";

const TestimonialItemEl = styled.figure`
  background-color: ${Colors.Default.White};
  grid-column: ${(p) => p.gridColumn || ""};
  grid-row: ${(p) => p.gridRow || ""};
  margin-top: ${(p) => p.mt || ""};
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: ${Shadows.Dark};
`;

const Content = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: flex-start;
`;

const BlockQuote = styled.blockquote`
  margin: 0.4rem 0 1rem 0;
`;

const Author = styled.span``;

const Person = styled(Subtitle)`
  color: ${Colors.Text.Gray900};
  display: block;
`;
const JobTitle = styled(Lead2)`
  color: ${Colors.Text.Gray700};
`;

export default function TestimonialItem({ item, mt, gridRow, gridColumn }) {
  const { logo, text, name, jobTitle } = item;

  return (
    <TestimonialItemEl mt={mt} gridRow={gridRow} gridColumn={gridColumn}>
      <Img src={logo} />
      <Content>
        <Img src={QuoteIcon} width="16px" height="14px" />
        <span>
          <BlockQuote>
            <p>{text}</p>
          </BlockQuote>
          <Author>
            <Person>{name}</Person>
            <JobTitle>{jobTitle}</JobTitle>
          </Author>
        </span>
      </Content>
    </TestimonialItemEl>
  );
}
