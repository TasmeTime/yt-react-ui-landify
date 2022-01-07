import styled from "styled-components";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import HubspotLogo from "../../images/HubspotLogo.svg";
import BookMyShowLogo from "../../images/BookMyShowLogo.svg";
import QuoteIcon from "../../images/icons/Quote.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import { Colors } from "../../Theme";
import TestimonialItem from "./TestimonialItem";

const Items = [
  {
    id: 1,
    logo: AirbnbLogo,
    text: "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
    name: "Jane Cooper",
    jobTitle: "CEO, Airbnb",
  },
  {
    id: 2,
    logo: HubspotLogo,
    text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
    name: "Floyd Miles",
    jobTitle: "Vice President, GoPro",
  },
  {
    id: 3,
    logo: BookMyShowLogo,
    text: "Landify saved our time in designing my company page.",
    name: "Kristin Watson",
    jobTitle: "Co-Founder, BookMyShow",
  },
];

const TestimonialsEl = styled.article`
  background-color: ${Colors.Brand.Turquoise100};
  display: grid;
  padding: 6rem 7rem;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
`;
const Title = styled(H2)`
  ${Colors.Text.Gray900};
  z-index: 1;
  position: relative;
`;
const SubTitle = styled(Lead)`
  ${Colors.Text.Gray900};
`;

const TextContainer = styled.span`
  grid-column: 3 / span 4;
  grid-row: 1/3 span;
  position: relative;

  :before {
    content: "";
    z-index: 0;
    position: absolute;
    background: url(${QuoteIcon});
    transform: translate(-50%, -50%);
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 104px;
  }
`;

export default function Testimonials() {
  return (
    <TestimonialsEl>
      <TextContainer>
        <Title>Real Stories from Real Customers</Title>
        <SubTitle>Get inspired by these stories.</SubTitle>
      </TextContainer>
      <TestimonialItem
        item={Items[0]}
        gridColumn="7/ span 4"
        gridRow="1/ span 4"
      />
      <TestimonialItem
        item={Items[1]}
        gridColumn="4/ span 3"
        gridRow="4/ span 4"
      />
      <TestimonialItem
        mt="1rem"
        item={Items[2]}
        gridColumn="7/ span 4"
        gridRow="5/ span 3"
      />
    </TestimonialsEl>
  );
}
