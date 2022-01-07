import styled from "styled-components";
import Icon1 from "../../../images/icons/01.svg";
import Icon2 from "../../../images/icons/02.svg";
import Icon3 from "../../../images/icons/03.svg";
import Icon4 from "../../../images/icons/04.svg";
import Icon5 from "../../../images/icons/05.svg";
import Icon6 from "../../../images/icons/08.svg";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead2.styled";
import FeatureItem from "./FeatureItem";

const Items = [
  {
    id: 1,
    icon: Icon1,
    title: "Robust workflow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Flexibility",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "User friendly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Multiple layouts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 5,
    icon: Icon5,
    title: "Better components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 6,
    icon: Icon6,
    title: "Well organised",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
];

const FeatureMEl = styled.article`
  padding: 3rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(Lead)`
  text-align: center;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  column-gap: 2rem;
  row-gap: 3rem;
`;

export default function FeatureM() {
  return (
    <FeatureMEl>
      <H2>Tailor-made features</H2>
      <SubTitle>
        Lorem ipsum is common placeholder text used to demonstrate the graphic
        elements of a document or visual presentation.
      </SubTitle>
      <ItemContainer>
        {Items.map((item) => {
          return <FeatureItem key={item.id} item={item} />;
        })}
      </ItemContainer>
    </FeatureMEl>
  );
}
