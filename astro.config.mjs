import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [react(), bookshop()],
});
