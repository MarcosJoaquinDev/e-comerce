import { Main } from "next/document";
import styled from "styled-components";

const Spiner = styled.span`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(0deg, rgba(19, 23, 226, 0.582) 33%, #0c7797 100%);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(315deg, rgba(2, 0, 36, 1) 0%, #1e379c);
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export function Loading() {
  return (
    <main
      style={{
        margin: "auto",
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spiner />
    </main>
  );
}
