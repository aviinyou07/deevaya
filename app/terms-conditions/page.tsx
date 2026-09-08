import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/content";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Official website terms of use, content guidelines, intellectual property, and limitations of liability for Deevaya.",
};

export default function TermsConditionsPage() {
  const page = getPageBySlug("terms-conditions");
  if (!page) notFound();

  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="The rules, permissions, and guidelines for visiting and using Deevaya."
      content={page.content}
    />
  );
}
