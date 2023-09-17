import styled from "styled-components";
import { StrongLargeText, LargeText } from "src/ui/text";
type CardProps = {
  title?: string;
  price?: number;
  img?: string;
  id?: string;
};
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 328px;
  background-color: var(--fnt-carbon);
  box-shadow: 1px 1px 1px black;
  transition: all 500ms;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 200px;
  }
  :hover {
    box-shadow: 10px 10px 10px black;
    transition: all 500ms;
    background-position-y: top;
  }
`;
export default function CardProduct({
  id,
  title = "Mock",
  price = 120.8,
  img = "https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022-O.webp",
}: CardProps) {
  return (
    <ContainerCard>
      <img
        style={{
          width: "100%",
          objectFit: "cover",
          maxHeight: "300px",
          backgroundColor: "white",
          borderRadius: "5% 5% 0 0",
          viewTransitionName: `photo-${id}`,
        }}
        alt="picture of iphone"
        src={img}
      />
      <div>
        <StrongLargeText>{title}</StrongLargeText>
        <LargeText>${price}</LargeText>
      </div>
    </ContainerCard>
  );
}
