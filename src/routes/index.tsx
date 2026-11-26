import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سِياج | منصة الإبلاغ الآمن عن الابتزاز الإلكتروني" },
      { name: "description", content: siteConfig.tagline },
      { property: "og:title", content: "سِياج | Siyaj" },
      { property: "og:description", content: siteConfig.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <ShieldCheck className="size-8" />
        </div>
        <h1 className="font-display text-5xl font-bold text-primary sm:text-6xl">{siteConfig.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{siteConfig.tagline}</p>
        <span className="mt-8 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
          قيد الإنشاء
        </span>
      </div>
    </main>
  );
}
