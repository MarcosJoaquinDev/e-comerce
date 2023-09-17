import { TextBody } from "@/ui/text";
import styled from "styled-components";

const BaseFooter = styled.footer`
  width: 100%;
  height: 60px;
  position: absolute;
  box-shadow: 0 0px 15px 1px white;
  background-color: var(--fnt-azul-oscuro);
`;
export function Footer() {
  return (
    <BaseFooter>
      <TextBody>Copyright by MarcosJoaquinDev</TextBody>
    </BaseFooter>
  );
}
