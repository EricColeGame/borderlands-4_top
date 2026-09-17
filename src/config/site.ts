export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Borderlands 4 Wiki",
  shortName: "Borderlands 4",
  logoText: "B4",
  tagline: "Builds, Weapons & Guides",
  description: "Borderlands 4 Wiki provides weapon guides, Vault Hunter builds, skill trees, gameplay tips, and loot information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://borderlands-4.top",
  gameUrl: "https://borderlands.com/",
  heroVideoId: "26vY2GMfYTw", // Borderlands 4 Official First Look Trailer
  social: {
    discord: "https://discord.gg/borderlands",
    youtube: "https://www.youtube.com/@Borderlands",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
