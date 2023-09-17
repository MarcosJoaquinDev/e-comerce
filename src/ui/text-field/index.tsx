import styled from "styled-components";
import { StrongTextBody } from "src/ui/text";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  gap: 5px;
`;
const Input = styled.input`
  height: 45px;
  width: 100%;
  border: solid 0.1px var(--fnt-plata);
  border-radius: 8px;
  background-color: #04031fe3;
  color: var(--fnt-plata);
  font-size: 18px;
  font-family: "Dosis", sans-serif;
  padding: 5px 10px;
`;

const TextField = ({ textLabel = "", name = "", placeholder = "" }: any) => {
  return (
    <div>
      {textLabel && (
        <Label>
          <StrongTextBody>{textLabel}</StrongTextBody>
        </Label>
      )}
      <Input name={name} placeholder={placeholder} />
    </div>
  );
};
export { TextField };
