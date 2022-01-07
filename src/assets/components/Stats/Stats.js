import styled from "styled-components";
import Icon1 from "../../images/icons/01.svg";
import Icon2 from "../../images/icons/02.svg";
import Icon3 from "../../images/icons/03.svg";
import Icon4 from "../../images/icons/04.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import StatItem from "./StatItem";

const Items = [
  { id: 1, icon: Icon1, title: "10,000+", subTitle: "Downloads per day" },
  { id: 2, icon: Icon2, title: "2 Million", subTitle: "Users" },
  { id: 3, icon: Icon3, title: "500+", subTitle: "Clients" },
  { id: 4, icon: Icon4, title: "140", subTitle: "Countries" },
];

const StatsEl = styled.article`
  padding: 3rem 7rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;

export default function Stats() {
  return (
    <StatsEl>
      <span>
        <H2>
          Our 18 years of
          <br /> achievements
        </H2>
        <Lead>With our super powers we have reached this</Lead>
      </span>
      <Counts>
        {Items.map((item) => {
          return <StatItem key={item.id} item={item} />;
        })}
      </Counts>
    </StatsEl>
  );
}
