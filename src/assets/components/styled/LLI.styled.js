import styled from "styled-components";
import ArrowS from "../../images/icons/ArrowRightS.svg";
import Arrow from "../../images/icons/ArrowRight.svg";
import ArrowL from "../../images/icons/ArrowRightL.svg";
import Img from "./Img.styled";
import { Colors, TextStyles } from "../../Theme";

const LLIEl = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.Brand.Purple};

  :visited {
    color: ${Colors.Brand.Purple};
  }

  ${(p) => {
    switch (p.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Lable.Small);
      case "lg":
        return TextStyles.Bundler(TextStyles.Lable.Large);
      default:
        return TextStyles.Bundler(TextStyles.Lable.Medium);
    }
  }}

  > img {
    margin-left: 0.5rem;
  }
`;

export default function LLI({ children, size, href }) {
  return (
    <LLIEl href={href} size={size}>
      {children}
      {size === "sm" ? <Img src={ArrowS} /> : ""}
      {!size || size === "md" ? <Img src={Arrow} /> : ""}
      {size === "lg" ? <Img src={ArrowL} /> : ""}
    </LLIEl>
  );
}
