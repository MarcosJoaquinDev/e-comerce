import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetUserData, useUserData } from "@/lib/hooks";

export const useUserInfo = () => {
  const [userData, setUserData] = useState<any>(null);
  const result = useSetUserData(userData);
  const acutalData = useUserData();
  const nav = useRouter();
  useEffect(() => {
    if (!acutalData) return;
    if (acutalData.data.adress) {
      nav.push("/");
    }
  }, [acutalData]);
  useEffect(() => {
    if (!result) return;
    if (result.data) {
      nav.push("/");
    }
  }, [result]);
  return { setUserData };
};
