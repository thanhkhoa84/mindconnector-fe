import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import CanonicalURL from "./CanonicalURL";
import { getStrapiMedia } from "@/lib/media";

const Seo = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };

  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: seoWithDefaults.metaTitle
      ? `${seoWithDefaults.metaTitle} | ${siteName}`
      : siteName,
    // Get full image URL
    shareImage: seoWithDefaults.metaImage
      ? getStrapiMedia(seoWithDefaults.metaImage)
      : null,
  };

  return (
    <>
      <Head>
        {fullSeo.metaTitle && (
          <>
            <title>{fullSeo.metaTitle}</title>
            <meta property="og:title" content={fullSeo.metaTitle} />
            <meta name="twitter:title" content={fullSeo.metaTitle} />
          </>
        )}
        {fullSeo.metaDescription && (
          <>
            <meta name="description" content={fullSeo.metaDescription} />
            <meta property="og:description" content={fullSeo.metaDescription} />
            <meta
              name="twitter:description"
              content={fullSeo.metaDescription}
            />
          </>
        )}
        {fullSeo.shareImage ? (
          <>
            <meta property="og:image" content={fullSeo.shareImage} />
            <meta name="twitter:image" content={fullSeo.shareImage} />
            <meta name="image" content={fullSeo.shareImage} />
          </>
        ) : (
          <>
            <meta
              property="og:image"
              content={`/img/mind-connector-social-share.png`}
            />
            <meta
              name="twitter:image"
              content={`/img/mind-connector-social-share.png`}
            />
            <meta
              name="image"
              content={`/img/mind-connector-social-share.png`}
            />
          </>
        )}
        {fullSeo.article && <meta property="og:type" content="article" />}
        {fullSeo.keywords && (
          <meta name="keywords" content={fullSeo.keywords} />
        )}
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="website" />
      </Head>
      <CanonicalURL />
    </>
  );
};

export default Seo;
