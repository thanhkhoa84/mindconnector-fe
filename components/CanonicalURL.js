import { useRouter } from "next/router";
import Head from "next/head";
const CanonicalURL = () => {
  const { asPath } = useRouter();
  const siteUrl = process.env.SITE_URL;
  const cleanPath = asPath.split("#")[0].split("?")[0];
  const canonicalUrl = `${siteUrl}` + (asPath === "/" ? "" : cleanPath);
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CanonicalURL;
