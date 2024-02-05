// Astro-Config-Datei
import { defineConfig } from "astro/config";

// Tailwind CSS importieren
import tailwind from "@astrojs/tailwind";

// Astro-Plugins importieren
// MDX-Plugin für Markdown + JSX
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
   // Markdown-Plugin konfigurieren
   markdown: {
      shikiConfig: {
         theme: "one-dark-pro",
         wrap: true,
      },
   },
   // Astro-Plugins registrieren
   integrations: [
      tailwind({
         config: {
            applyBaseStyles: false,
         },
      }),
      mdx(), icon(),
   ],
});
