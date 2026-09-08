import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/content";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — A Home Is Built on Trust",
  description:
    "Deevaya's official affiliate disclosure statement and Amazon Associates compliance policy.",
};

export default function AffiliateDisclosurePage() {
  const page = getPageBySlug("affiliate-disclosure");
  if (!page) notFound();

  return (
    <LegalPageLayout
      title="Affiliate Disclosure"
      subtitle="Transparency, reader trust, and our commitment to honest home recommendations."
      content={page.content}
    />
  );
}
