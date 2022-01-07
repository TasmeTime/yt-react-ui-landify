import styled from "styled-components";

const Img = styled.img`
  width: ${(p) => (p.width ? p.width : "")};
  height: ${(p) => (p.height ? p.height : "")};
`;
export default Img;
