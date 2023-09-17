import { SecondaryButton } from "@/ui/button";
import { StrongLargeText } from "@/ui/text";
import { useRouter } from "next/navigation";

export default function BuyButton({ idProduct }: any) {
  const navigate = useRouter();
  const handle = () => {
    const token = localStorage.getItem("token");
    token ? navigate.push("/checkout/" + idProduct) : navigate.push("/sign-in");
  };
  return (
    <SecondaryButton onClick={handle}>
      <StrongLargeText>Comprar</StrongLargeText>
    </SecondaryButton>
  );
}
