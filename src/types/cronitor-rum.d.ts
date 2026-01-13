declare module "@cronitorio/cronitor-rum" {
  export function load(siteId: string): void;
  export function track(event: string): void;
}
