import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesIndexPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/business");
  });
  return <div></div>;
}
