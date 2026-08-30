import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl =
  process.env.SITE_URL?.trim() || "https://platina1337.github.io/land-plots-site/";
const base = process.env.BASE_PATH?.trim() || "/";

export default defineConfig({
  site: siteUrl,
  base,
  output: "static",
  integrations: [sitemap()],
});
