import { useState } from "react";
import styled from "styled-components";
import { useGenerateCode } from "@/lib/hooks";
import { CodeForm, EmailForm } from "@/components/Register/Login";
import { Loading } from "@/ui/loading";
const MainForm = styled.main`
  margin-bottom: 30px;
  height: 500px;
`;
export const RegisterUser = () => {
  const [email, setEmail] = useState<string>("");
  const codeSend = useGenerateCode(email);

  return (
    <MainForm>
      {!email && <EmailForm handle={setEmail} />}
      {email && !codeSend && <Loading />}
      {codeSend && <CodeForm email={email} />}
    </MainForm>
  );
};
