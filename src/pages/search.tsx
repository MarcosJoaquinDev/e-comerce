import { useRouter } from "next/router";
import { useListProduct } from "@/lib/hooks";
import { Layout } from "@/components/Layout";
import { Subtitle } from "@/ui/title";
import { StrongTextBody, TextBody } from "@/ui/text";
import { SeekerProducts } from "@/components/Seeker";
import ListProducts from "@/components/ListProducts";
import CategoriesBar from "@/components/Categories-bar";
import { useEffect, useState } from "react";
import { SecondaryButton } from "@/ui/button";

export default function SearchPage() {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  const res = useListProduct(router.query.q as string, offset);
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState(false);
  const [before, setBefore] = useState(false);

  useEffect(() => {
    if (res) {
      setNext(res.results - offset > res.products.length);
      setBefore(offset > 0);
      setProducts(res.products);
    }
  }, [res, offset]);

  return (
    <Layout title={"Busqueda de " + router.query.q}>
      <section
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <SeekerProducts />
      </section>
      <div style={{ marginLeft: "5px" }}>
        <Subtitle>Busqueda: {router.query.q}</Subtitle>
        <br />
        {products && <TextBody>Resultados:</TextBody>}
      </div>
      <br />
      <section style={{ display: "flex" }}>
        <CategoriesBar />
        {products && <ListProducts products={products} />}
      </section>
      {next && (
        <div style={{ width: "200px" }}>
          <SecondaryButton
            onClick={() => {
              setOffset(offset + 5);
            }}
          >
            <StrongTextBody>Siguiente</StrongTextBody>
          </SecondaryButton>
        </div>
      )}
      {before && (
        <div style={{ width: "200px" }}>
          <SecondaryButton
            onClick={() => {
              setOffset(offset - 5);
            }}
          >
            <StrongTextBody>Anterior</StrongTextBody>
          </SecondaryButton>
        </div>
      )}
      <br />
      <br />
    </Layout>
  );
}
