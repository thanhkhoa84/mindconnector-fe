import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProgramsIndexPage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/student");
  });
  return <div></div>;
}
