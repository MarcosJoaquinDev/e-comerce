import styled from "styled-components";

const LargeText = styled.p`
  margin: 0;
  font-size: 20px;
  color: var(--fnt-plata);
  font-weight: var(--fnt-light);
  //font-family: "Nanum Myeongjo", serif;
  font-family: Arial, Helvetica, sans-serif;
`;
const StrongLargeText = styled(LargeText)`
  font-weight: var(--fnt-bold);
  color: white;
`;
const TextBody = styled(LargeText)`
  font-size: 16px;
`;
const StrongTextBody = styled(StrongLargeText)`
  font-size: 24px;
`;

export { LargeText, StrongLargeText, TextBody, StrongTextBody };
