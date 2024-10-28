/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/vanillajs" />

declare module '*.jpg' {
  const content: import('astro').ImageMetadata
  export default content
}

declare module '*.png' {
  const content: import('astro').ImageMetadata
  export default content
}

declare module '*.svg' {
  const content: import('astro').ImageMetadata
  export default content
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
