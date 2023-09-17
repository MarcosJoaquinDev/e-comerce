import CategoriesBar from "@/components/Categories-bar";
import { Layout } from "@/components/Layout";
import ListProducts from "@/components/ListProducts";
import { SecondaryButton } from "@/ui/button";
import { StrongTextBody } from "@/ui/text";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function Categories({ products, offset, results }: any) {
  const router = useRouter();
  const category = router.query.categoryId as string;
  const filterCat = category.match(/([^&]+)&/) as any;
  const showNext = offset + 5 < results;
  const showBefore = offset > 0;
  return (
    <Layout>
      <section style={{ display: "flex" }}>
        <CategoriesBar />
        {products && <ListProducts products={products} />}
      </section>
      <div
        style={{
          width: "400px",
          padding: "20px",
          gap: "15px",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        {showBefore && (
          <SecondaryButton
            onClick={() => {
              const newOffset = offset - 5;
              const nextPage = "&offset=" + newOffset;
              if (!filterCat) {
                router.push("/category/" + category + nextPage);
              } else {
                router.push("/category/" + filterCat[1] + nextPage);
              }
            }}
          >
            <StrongTextBody>Anterior</StrongTextBody>
          </SecondaryButton>
        )}
        {showNext && (
          <SecondaryButton
            onClick={() => {
              const newOffset = offset + 5;
              const nextPage = "&offset=" + newOffset;
              if (!filterCat) {
                router.push("/category/" + category + nextPage);
              } else {
                router.push("/category/" + filterCat[1] + nextPage);
              }
            }}
          >
            <StrongTextBody>Siguiente</StrongTextBody>
          </SecondaryButton>
        )}
      </div>
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
  const { categoryId } = context.params as any;
  const query = categoryId.replace("&", "?");
  const res = await fetch(
    "https://backend-e-comerce.vercel.app/api/products/categories/" + query
  );
  const { products, offset, results } = await res.json();

  return { props: { products, offset, results } };
}
