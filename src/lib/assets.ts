import imageMetadata from '../data/imageMetadata.json';

const baseUrl = import.meta.env.BASE_URL || '/';

type ImageMetadata = { width: number; height: number; type: string };
const images: Record<string, ImageMetadata> = imageMetadata;

export function getImageMetadata(path: string) {
  const filename = path.slice(path.lastIndexOf('/') + 1);
  const metadata = images[filename];
  if (!metadata) throw new Error(`Missing image metadata for ${filename}.`);
  return metadata;
}

export function publicAsset(path: string) {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return `${normalizedBase}${normalizedPath}`;
}
