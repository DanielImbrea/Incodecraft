/** Bump when replacing public/og-image.png to bust Meta/WhatsApp link preview cache. */
export const OG_IMAGE_VERSION = "4";

export function getOgImageUrl(siteUrl: string): string {
  return `${siteUrl}/og-image.png?v=${OG_IMAGE_VERSION}`;
}

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export function getOgImageMeta(siteUrl: string, alt: string) {
  const url = getOgImageUrl(siteUrl);
  return {
    url,
    secureUrl: url,
    width: OG_IMAGE_SIZE.width,
    height: OG_IMAGE_SIZE.height,
    alt,
    type: "image/png" as const,
  };
}
