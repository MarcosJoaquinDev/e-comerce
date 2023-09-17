import { TextBody } from "@/ui/text";
import Link from "next/link";

export default function CategoriesBar() {
  return (
    <div
      style={{
        maxWidth: "300px",
        padding: "5px",
      }}
    >
      <h2>Categorias</h2>
      <nav>
        <ul
          style={{
            listStyle: "none",
            textDecoration: "none",
            margin: "0",
            padding: "0px",
            paddingLeft: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Link href="/category/phones" style={{ textDecoration: "none" }}>
            <li>
              <TextBody>Celulares</TextBody>
            </li>
          </Link>
          <Link href="/category/tablets" style={{ textDecoration: "none" }}>
            <li>
              <TextBody>Tablets</TextBody>
            </li>
          </Link>
          <Link href="/category/noteboks" style={{ textDecoration: "none" }}>
            <li>
              <TextBody>Notebooks</TextBody>
            </li>
          </Link>
          <Link href="/category/monitors" style={{ textDecoration: "none" }}>
            <li>
              <TextBody>Monitores</TextBody>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
