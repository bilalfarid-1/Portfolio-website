import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Muhammad Bilal Farid",
  metadataBase: new URL("https://bilalfarid.dev/contact"),
  description:
    "Get in touch with Muhammad Bilal Farid for full-stack engineering, machine learning solutions, and contract projects.",
  openGraph: {
    title: "Contact | Muhammad Bilal Farid",
    url: "https://bilalfarid.dev/contact",
    description:
      "Get in touch with Muhammad Bilal Farid for full-stack engineering, machine learning solutions, and contract projects.",
  },
};

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Contact & Connect"
        description="Have an upcoming project, need high-throughput APIs or predictive machine learning models built, or want to explore collaborative opportunities? Reach out anytime via email or WhatsApp."
      />
      <ContactContent />
    </main>
  );
}
