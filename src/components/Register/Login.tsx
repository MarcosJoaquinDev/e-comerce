import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGenerateToken } from "@/lib/hooks";
import { ContentFormLogin } from "@/ui/form";

export const EmailForm = ({ handle }: any) => {
  const setEmail = (e: any) => {
    e.preventDefault();
    handle(e.target.email.value);
  };
  return (
    <form onSubmit={setEmail}>
      <ContentFormLogin
        title="Ingresa tu mail"
        name="email"
        placeh="example@gmail.com"
        textButton="Enviar"
      />
    </form>
  );
};
export const CodeForm = ({ email }: any) => {
  const [code, setCode] = useState(0);
  const res = useGenerateToken(email, code);
  const [title, setTitle] = useState("Ingresa tu codigo");
  const navigate = useRouter();
  useEffect(() => {
    if (res && res.hasOwnProperty("token")) {
      localStorage.setItem("token", res.token);
      navigate.push("/profile/info");
    }
    if (res && res.hasOwnProperty("Error")) {
      setTitle(res["Error"]);
    }
  }, [res]);
  const sendCode = (e: any) => {
    e.preventDefault();
    setCode(parseInt(e.target.code.value));
  };
  return (
    <form onSubmit={sendCode}>
      <ContentFormLogin
        title={title}
        name="code"
        placeh="12345"
        textButton="Ingresar"
      />
    </form>
  );
};
