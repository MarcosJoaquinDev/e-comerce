import styled from "styled-components";
import { PrimaryButton } from "../button";
import { StrongLargeText } from "../text";
import { TextField } from "../text-field";
import { Title } from "../title";

const ContainerForm = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
type FormLoginProps = {
  title: string;
  name: "email" | "code";
  placeh: string;
  textButton: string;
};

export function ContentFormLogin(props: FormLoginProps) {
  return (
    <ContainerForm>
      <Title>{props.title}</Title>
      <TextField name={props.name} placeholder={props.placeh} />
      <br />
      <div style={{ alignSelf: "end", width: "250px", marginRight: "20px" }}>
        <PrimaryButton>
          <StrongLargeText>{props.textButton}</StrongLargeText>
        </PrimaryButton>
      </div>
    </ContainerForm>
  );
}
export { ContainerForm };
