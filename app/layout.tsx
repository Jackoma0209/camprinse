import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: "CampRinse Dog Rinse Kit | Mud Stays Outside",
  description:
    "Stop muddy dogs wrecking your car, van and home. CampRinse is the portable dog rinse kit for UK walks — rinse paws at the boot. Also great for boots, beach, bikes and camping.",
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#17342c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(site.organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(site.websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
