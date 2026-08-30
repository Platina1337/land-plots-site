import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl =
  process.env.SITE_URL?.trim() || "https://platina1337.github.io/land-plots-site/";

export default defineConfig({
  site: siteUrl,
  output: "static",
  integrations: [sitemap()],
});
