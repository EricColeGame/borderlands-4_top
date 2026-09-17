export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "codes", path: "/codes", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
