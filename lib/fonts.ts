import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";

// Display face — condensed, industrial. Used for headlines and labels,
// evoking shipping crates and warehouse signage.
export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

// Body face — quiet, readable.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

// Utility face — clause numbers, prices, reference codes.
// Reads like a manifest or shipping label.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const fontVariables = `${oswald.variable} ${inter.variable} ${plexMono.variable}`;
