import localFont from "next/font/local";
import { metadata } from "@/lib/metadata";
import ClientSpellsProvider from "@/contexts/ClientSpellsProvider";
import "./styles/globals.scss";

const magicSchool = localFont({
  src: "./fonts/MagicSchool.woff",
  variable: "--font-magicschool",
  weight: "400",
});

const aquilineTwo = localFont({
  src: "./fonts/AquilineTwo.woff",
  variable: "--font-aquilinetwo",
  weight: "400",
});

const lumos = localFont({
  src: "./fonts/Lumos.woff",
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
        <ClientSpellsProvider>{children}</ClientSpellsProvider>
      </body>
    </html>
  );
}
