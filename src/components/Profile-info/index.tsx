import { useUserInfo } from "@/lib/custom";
import { SecondaryButton } from "@/ui/button";
import { ContainerForm } from "@/ui/form";
import { StrongTextBody } from "@/ui/text";
import { TextField } from "@/ui/text-field";
import { Subtitle } from "@/ui/title";

export default function Info() {
  const { setUserData } = useUserInfo();
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    const target: any = e.target;
    const formData = {
      username: target.username.value,
      phone: parseInt(target.phone.value),
      adress: target.direction.value,
    };
    setUserData(formData);
  };
  return (
    <ContainerForm>
      <Subtitle>Ingresa tus datos</Subtitle>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handle}
      >
        <TextField
          textLabel="Nombre de usuario"
          name="username"
          placeholder="Juan.."
        />
        <TextField
          textLabel="Direccion"
          name="direction"
          placeholder="Av J .b justo 123"
        />
        <TextField textLabel="Telefono" name="phone" placeholder="1223-3456" />
        <SecondaryButton>
          <StrongTextBody>Continuar</StrongTextBody>
        </SecondaryButton>
      </form>
    </ContainerForm>
  );
}
