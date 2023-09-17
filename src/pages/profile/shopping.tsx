import CardProduct from "@/components/Card";
import { Layout } from "@/components/Layout";
import { SideBarProfile } from "@/components/Side-Bar";
import { useEffect, useState } from "react";

export default function Shopping() {
  // convertir en una server page
  const [orders, setOrders] = useState<any>([]);
  useEffect(() => {
    const orders = async () => {
      const res = await fetch(
        "https://backend-e-comerce.vercel.app/api/me/orders",
        {
          method: "GET", // or 'PUT'
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      const { orders } = await res.json();
      setOrders(orders);
    };
    orders();
  }, []);

  return (
    <Layout title="Ecomerce | Profile">
      <section style={{ display: "flex", width: "100%" }}>
        <SideBarProfile />
        <main style={{ backgroundColor: "#152167", width: "100%" }}>
          <h1>Mis compras</h1>
          <ul>
            {Array.isArray(orders)
              ? orders.map((p: any, index) => (
                  <li style={{ width: "120px" }}>
                    <CardProduct
                      id={index.toString()}
                      title={p.product.title}
                      price={p.product.price}
                      img={p.product.img}
                    />
                  </li>
                ))
              : null}
          </ul>
        </main>
      </section>
    </Layout>
  );
}
