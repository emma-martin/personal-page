import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata, type Viewport } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Martin | Frontend Engineer",
  description:
    "Emma Martin is a frontend engineer with 5+ years of experience in building user-friendly web apps and creating data-driven solutions.",
  keywords: [
    "Frontend Engineer",
    "JavaScript",
    "TypeScript",
    "Vue",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "Emma Martin" }],
  creator: "Emma Martin",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        {metadata && (
          <>
            <title>
              {typeof metadata.title === "string"
                ? metadata.title
                : "Emma Martin | Frontend Engineer"}
            </title>
            {metadata.description && (
              <meta name="description" content={metadata.description} />
            )}
          </>
        )}
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="min-h-screen text-foreground font-mono">
            <div className="max-w-4xl mx-auto px-4 pb-8">
              <Header />
              <main className="md:my-14 my-8">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
