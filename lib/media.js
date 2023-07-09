import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

// export function getStrapiMedia(url) {
//   if (url == null) {
//     return null;
//   }

//   // Return the full URL if the media is hosted on an external provider
//   if (url.startsWith("http") || url.startsWith("//")) {
//     return url;
//   }

//   // Otherwise prepend the URL path with the Strapi URL
//   return `${getStrapiURL()}${url}`;
// }
