import type { ImageMetadata } from 'astro';

// ponytail: stock photos in src/assets/placeholders keyed by entry id; set `image:` in an entry's frontmatter to use a real photo.
const files = import.meta.glob<{ default: ImageMetadata }>('./assets/placeholders/*.jpg', { eager: true });

export const placeholder = (seed: string) =>
  (files[`./assets/placeholders/${seed}.jpg`] ?? files['./assets/placeholders/chapeco-sobre.jpg']).default;
