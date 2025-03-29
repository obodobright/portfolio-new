import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://obodobright-one.vercel.app/"),
  title: {
    default: "Obodo Bright | Full Stack Developer",
    template: "%s | Obodo Bright",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
    "UI/UX Developer",
  ],
  authors: [{ name: "Obodo Bright" }],
  creator: "Obodo Bright",
  publisher: "Obodo Bright",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://obodobright-one.vercel.app/",
    siteName: "Obodo Bright Portfolio",
    title: "Obodo Bright | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Obodo Bright Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obodo Bright | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@bright_lumen",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://obodobright-one.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
