import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CanonicalURL = () => {
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const siteUrl = process.env.SITE_URL;
    const { asPath } = useRouter();
    const cleanPath = asPath.split("#")[0].split("?")[0];
    const canonicalUrl = `${siteUrl}` + (asPath === "/" ? "" : cleanPath);
    setCanonicalUrl(canonicalUrl);
  }, [setCanonicalUrl]);

  console.log(canonicalUrl);

  return <link rel="canonical" href={canonicalUrl} />;
};

export default CanonicalURL;
