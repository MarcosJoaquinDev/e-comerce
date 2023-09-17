import { Layout } from "@/components/Layout";
import { Title, Subtitle } from "@/ui/title";
import type { GetStaticPropsContext } from "next";
import { getProductDetails } from "@/lib/api";
import BuyButton from "@/components/Buy-Button";

export default function ItemPage({ res }: any) {
  return (
    <Layout title={"Producto | " + res.description}>
      {res && (
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <img
              src={res.image}
              alt={res.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                viewTransitionName: `photo-${res.id}`,
              }}
            />
          </div>
          <aside
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "300px",
            }}
          >
            <Title>{res.title}</Title>
            <Subtitle>{res.description}</Subtitle>
            <Subtitle>Precio: ${res.price}</Subtitle>
            <BuyButton idProduct={res.id} />
          </aside>
        </section>
      )}
      <br />
      <br />
      <br />
    </Layout>
  );
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const path: any = context.params;
  const res = await getProductDetails(path.itemId as string);
  return { props: { res } };
}
