import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/content";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer — General Information & Product Advice",
  description:
    "General information disclaimer regarding decorating tips, product representations, and external website links.",
};

export default function DisclaimerPage() {
  const page = getPageBySlug("disclaimer");
  if (!page) notFound();

  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="General information, styling advice boundaries, and product representations."
      content={page.content}
    />
  );
}
