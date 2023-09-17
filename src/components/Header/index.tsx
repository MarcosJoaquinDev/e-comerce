import { UserHeader } from "./userHeader";
import { MainHeader } from "./main";
import { useEffect, useState } from "react";

export function Header() {
  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    function checkToken() {
      return localStorage.getItem("token") !== null;
    }
    setHasToken(checkToken());
  }, [hasToken]);
  return <>{hasToken ? <UserHeader /> : <MainHeader />}</>;
}
