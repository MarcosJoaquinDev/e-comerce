import { Layout } from "@/components/Layout";
import { SideBarProfile } from "@/components/Side-Bar";
import { useUserData } from "@/lib/hooks";
import { StrongLargeText } from "@/ui/text";
import { Title } from "@/ui/title";

export default function Acount() {
  const { data } = useUserData();
  return (
    <Layout title="Ecomerce | Profile">
      <section style={{ display: "flex", width: "100%" }}>
        <SideBarProfile />
        <main style={{ backgroundColor: "#152167", width: "100%" }}>
          <Title>Mi cuenta</Title>
          <StrongLargeText>Usuario: {data.username}</StrongLargeText>
          <StrongLargeText>Email: {data.email}</StrongLargeText>
          <StrongLargeText>Direccion: {data.adress}</StrongLargeText>
          <StrongLargeText>Telefono: {data.phone}</StrongLargeText>
        </main>
      </section>
    </Layout>
  );
}
