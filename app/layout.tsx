import type { Metadata } from "next";
import "./globals.css";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "iJapan株式会社 - 歯科医療機器の開発・製造",
  description:
    "臨床現場のニーズに応える医療機器を開発し、歯科医療の質の向上に貢献します。iJapan株式会社は革新的な歯科医療機器の開発・製造企業です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={zenKakuGothicNew.variable}>
      <body className={`antialiased ${zenKakuGothicNew.className}`}>
        {children}
      </body>
    </html>
  );
}
