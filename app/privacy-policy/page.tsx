import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/content";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Deevaya's privacy policy, data practices, cookie usage, analytics, and user protection rights.",
};

export default function PrivacyPolicyPage() {
  const page = getPageBySlug("privacy-policy");
  if (!page) notFound();

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, protect, and respect your personal information."
      content={page.content}
    />
  );
}
