import { Layout } from "src/components/Layout";
import { Subtitle, Title } from "src/ui/title";
import styled from "styled-components";
import CardProduct from "@/components/Card";
import { SeekerProducts } from "@/components/Seeker";
import { useListProduct } from "@/lib/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next/types";
import { BASE_URL_API } from "@/lib/const";

const MainHome = styled.main`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
`;
const ContainerFeatured = styled.section`
  height: 570px;
  flex-direction: column;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c3279a0;
  padding: 10px 30px;
  @media (max-width: 500px) {
    height: 800px;
  }
`;
const FeaturedProducts = styled.section`
  display: flex;
  align-items: center;
  gap: 300px;
  @media (max-width: 768px) {
    gap: 50px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
type ProductsProps = {
  id: string;
  price: number;
  title: string;
  image: string;
  description: string;
};
export default function HomePage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="APX | Comerce">
      <MainHome>
        <Title style={{ textAlign: "center" }}>Find for Products</Title>
        <SeekerProducts />
      </MainHome>
      <ContainerFeatured>
        <Subtitle>Featured Products</Subtitle>
        {products && (
          <FeaturedProducts>
            <Link href={"/item/" + products[0].id}>
              <CardProduct
                title={products[0].title}
                price={products[0].price}
                img={products[0].image}
              />
            </Link>
            <Link href={"/item/" + products[1].id}>
              <CardProduct
                title={products[1].title}
                price={products[1].price}
                img={products[1].image}
              />
            </Link>
          </FeaturedProducts>
        )}
      </ContainerFeatured>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL_API + "/search?q=iphone");
  const data = await res.json();
  return { props: { products: data.products } };
}
