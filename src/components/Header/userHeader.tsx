import { useEffect, useState } from "react";
import styled from "styled-components";
import { BaseHeader } from "./base";
import { Sidebar } from "./sidebar";
import { IconHome, IconLogin, IconMenu } from "@/ui/icon";
import { StrongLargeText, TextBody } from "@/ui/text";
import { useUserData } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserButtonHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UserMenuHeader = styled.button`
  background: none;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`;
const MenuBurger = ({ handle }: any) => {
  return (
    <UserMenuHeader onClick={() => handle(true)}>
      <Link href="/">
        <IconMenu width={45} />
      </Link>
    </UserMenuHeader>
  );
};
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
const LogOutButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 30px;
  padding: 2px;
  box-shadow: 0 2px 10px 0 var(--fnt-azul);
  background-color: var(--fnt-azul);
  border: none;
  border-radius: 8px;
`;
const LogOutText = styled.span`
  font-size: 12px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UserHeader = () => {
  const [bar, setBar] = useState(false);
  const [userName, setUserName] = useState("");
  const user = useUserData();
  const navigation = useRouter();
  useEffect(() => {
    if (user?.data) {
      const { username } = user.data;
      setUserName(username);
    }
  }, [user]);
  const logOut = () => {
    localStorage.removeItem("token");
    if (window.location.pathname === "/") {
      navigation.refresh();
    } else {
      navigation.push("/");
    }
  };
  return (
    <>
      {bar && <Sidebar handle={setBar} />}
      <BaseHeader>
        <Link href="/">
          <IconHome width={60} height={60} />
        </Link>
        <UserButtonHeader>
          <Link href="/profile">
            <StrongLargeText>{userName}</StrongLargeText>
          </Link>
          <LogOutButton onClick={logOut}>
            <TextHeaderButton>
              <LogOutText>Log out</LogOutText>
              <IconLogin width={20} height={20} />
            </TextHeaderButton>
          </LogOutButton>
        </UserButtonHeader>
        <MenuBurger handle={setBar} />
      </BaseHeader>
    </>
  );
};
