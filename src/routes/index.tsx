import { createFileRoute } from "@tanstack/react-router";
import vslHtml from "../vsl.html?raw";

// The sales page is a prebuilt static site; serve its HTML as-is at "/".
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(vslHtml, { headers: { "content-type": "text/html; charset=utf-8" } }),
    },
  },
  head: () => ({
    meta: [
      { title: "+200 Atividades Criativas para Fazer em Casa" },
      { name: "description", content: "Mais de 200 atividades criativas em PDF para crianças de 3 a 8 anos." },
      { property: "og:title", content: "+200 Atividades Criativas para Fazer em Casa" },
      { property: "og:description", content: "Menos Telas, Mais Diversão! Kits Básico e Completo com bônus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
