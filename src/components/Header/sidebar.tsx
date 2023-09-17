import { IconMenuQuit } from "@/ui/icon";
import { TextBody } from "@/ui/text";
import styled from "styled-components";

const BaseSidebar = styled.div`
  width: 300px;
  height: 100%;
  background-color: #000000d4;
  position: fixed;
  right: 0px;
`;
const ListBar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;
const ItemBar = styled.li`
  padding: 10px 0;
  :hover {
    border-bottom: solid 0.1px var(--fnt-azul);
  }
`;
const LogOut = styled(TextBody)`
  color: #ff0000b3;
  text-align: center;
`;

export const Sidebar = ({ handle }: any) => {
  return (
    <BaseSidebar>
      <ListBar>
        <ItemBar>Home</ItemBar>
        <ItemBar>Proflie</ItemBar>
        <ItemBar>Search</ItemBar>
        <ItemBar onClick={() => handle(false)}>
          {" "}
          <IconMenuQuit width={20} />{" "}
        </ItemBar>
      </ListBar>
      <a href="/ui" target="_blank">
        <LogOut>Log out</LogOut>
      </a>
    </BaseSidebar>
  );
};
