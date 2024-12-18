"use client";
import localFont from "next/font/local";
import { metadata } from "@/lib/metadata";
import { SpellsProvider } from "@/contexts/SpellsContext";
import "./styles/globals.scss";

const magicSchool = localFont({
  src: "@/fonts/MagicSchool.woff",
  variable: "--font-magicschool",
  weight: "400",
});

const aquilineTwo = localFont({
  src: "@/fonts/aquilineTwo.woff",
  variable: "--font-aquilinetwo",
  weight: "400",
});

const lumos = localFont({
  src: "@/fonts/lumos.woff",
  variable: "--font-lumos",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.map((icon, index) => (
          <link
            key={index}
            rel={icon.rel}
            type={icon.type}
            href={icon.url}
            media={icon.media}
          />
        ))}
      </head>
      <body
        className={`${magicSchool.variable} ${aquilineTwo.variable} ${lumos.variable}`}
      >
        <SpellsProvider>{children}</SpellsProvider>
      </body>
    </html>
  );
}
