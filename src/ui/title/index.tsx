import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  color: white;
  font-weight: var(--fnt-bold);
  font-family: "Nanum Myeongjo", serif;
  text-shadow: 0 0 5px #fff;
`;
const Subtitle = styled(Title)`
  font-size: 32px;
`;
export { Title, Subtitle };
