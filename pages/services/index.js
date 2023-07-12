import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function services() {
  const { push } = useRouter();

  useEffect(() => {
    push("/business");
  }, []);
  return <div></div>;
}
