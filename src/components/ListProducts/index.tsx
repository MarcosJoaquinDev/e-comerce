import Link from "next/link";
import CardProduct from "../Card";
import styled from "styled-components";
type ProductsProps = {
  id: string;
  price: number;
  title: string;
  image: string;
  description: string;
};
const ContainerCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-evenly;
  padding: 30px;
`;
export default function ListProducts({ products }: any) {
  return (
    <ContainerCard>
      {products
        ? products.map((p: ProductsProps) => (
            <Link href={"/item/" + p.id} key={p.id}>
              <li style={{ listStyle: "none" }}>
                <CardProduct
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  img={p.image}
                />
              </li>
            </Link>
          ))
        : ""}
    </ContainerCard>
  );
}
