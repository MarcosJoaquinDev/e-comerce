import { Layout } from "@/components/Layout";
import { SideBarProfile } from "@/components/Side-Bar";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Profile() {
  const navigation = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigation.push("/sign-in");
    }
  }, []);
  return (
    <Layout title="Ecomerce | Profile">
      <section style={{ display: "flex", width: "100%" }}>
        <SideBarProfile />
        <main style={{ backgroundColor: "#152167", width: "100%" }}>
          <h1>Welcome</h1>
        </main>
      </section>
    </Layout>
  );
}
