import styled from "styled-components";
import { BaseHeader } from "src/components/Header/base";
import { IconHome, IconLogin } from "@/ui/icon";
import { PrimaryButton } from "@/ui/button";
import { StrongLargeText } from "@/ui/text";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContainerButtonHeader = styled.div`
  width: 160px;
  @media (max-width: 768px) {
    width: 80px;
  }
`;
const LoginText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
const TextHeaderButton = styled(StrongLargeText)`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const MainHeader = () => {
  const pathname = usePathname();
  const signIn = pathname != "/sign-in";

  return (
    <BaseHeader>
      <Link href="/">
        <IconHome width={60} height={60} />
      </Link>
      <ContainerButtonHeader>
        {signIn ? (
          <Link href="/sign-in">
            <PrimaryButton>
              <TextHeaderButton>
                <LoginText>Login</LoginText>
                <IconLogin width={20} height={20} />
              </TextHeaderButton>
            </PrimaryButton>
          </Link>
        ) : (
          <Link href="/">
            <PrimaryButton>
              <TextHeaderButton>Volver</TextHeaderButton>
            </PrimaryButton>
          </Link>
        )}
      </ContainerButtonHeader>
    </BaseHeader>
  );
};
