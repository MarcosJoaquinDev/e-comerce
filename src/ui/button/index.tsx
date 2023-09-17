import styled from "styled-components";

const PrimaryButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 45px;
  padding: 5px;
  box-shadow: 0 2px 10px 0 var(--fnt-azul);
  background-color: var(--fnt-azul);
  border: none;
  border-radius: 8px;
`;
const SecondaryButton = styled(PrimaryButton)`
  box-shadow: 0 4px 14px 0 var(--fnt-azul-oscuro);
  background-color: #17721c;
`;

const OutlinedButton = styled(SecondaryButton)`
  box-shadow: none;
  color: var(--fnt-azul);
  background-color: #08091ae3;
  border: solid 0.1px var(--fnt-plata);
`;
export { PrimaryButton, SecondaryButton, OutlinedButton };
