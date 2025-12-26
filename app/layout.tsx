import type { Metadata } from "next";
import "./globals.css";
import { Zen_Kaku_Gothic_New } from 'next/font/google';

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-kaku',
});



export const metadata: Metadata = {
  title: "iRescuePro - インプラント除去治具 | iJapan株式会社",
  description: "折れたインプラントネジをわずか数分で安全に除去。iJapan株式会社が開発した画期的なインプラント除去治具iRescueProの製品情報、導入事例、お問い合わせはこちら。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={zenKakuGothicNew.variable}>
      <body className="antialiased ${zenKakuGothicNew.className}">
        {children}
      </body>
    </html>
  );
}