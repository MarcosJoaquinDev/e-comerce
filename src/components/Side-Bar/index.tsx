import { useUserData } from "@/lib/hooks";
import { Avatar } from "@/ui/avatar";
import Link from "next/link";
import styled from "styled-components";

const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Item = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const HeaderProfile = ({ username }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
        marginBottom: "30px",
        padding: "10px",
      }}
    >
      <Avatar>
        <img
          src="/usuario.png"
          alt="foto de perfil"
          style={{ width: "100%" }}
        />
      </Avatar>
      <h1>{username}</h1>
    </div>
  );
};
export const SideBarProfile = () => {
  const res: any = useUserData();
  return (
    <aside style={{ backgroundColor: "#161d5c", height: "400px" }}>
      <HeaderProfile username={res?.data.username} />
      <ListItem>
        <Link href="/profile/acount">
          <Item>
            <img src="/usuario.png" alt="" width={20} />
            <span>Cuenta</span>
          </Item>
        </Link>
        <Link href="/profile/shopping">
          <Item>
            <img src="/usuario.png" alt="" width={20} />
            <span>Compras</span>
          </Item>
        </Link>
      </ListItem>
    </aside>
  );
};
