import { useListProduct } from "@/lib/hooks";
import { SecondaryButton } from "@/ui/button";
import { IconSearch } from "@/ui/icon";
import { StrongTextBody } from "@/ui/text";
import { TextField } from "@/ui/text-field";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const SeekerForm = styled.form`
  width: 500px;
  @media (max-width: 575px) {
    width: 325px;
  }
`;
export function SeekerProducts() {
  const [query, setQuery] = useState<string>("");
  const navigate = useRouter();
  const res = useListProduct(query, 0);

  const handle = (e: any) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };
  useEffect(() => {
    if (query) {
      navigate.push("/search?q=" + query);
    }
  }, [query]);
  return (
    <SeekerForm onSubmit={handle}>
      <TextField name="query" placeholder="Zapatillas" />
      <br />
      <SecondaryButton>
        <StrongTextBody>
          <IconSearch width={15} />
          <span style={{ marginLeft: "30px" }}>Search</span>
        </StrongTextBody>
      </SecondaryButton>
    </SeekerForm>
  );
}
