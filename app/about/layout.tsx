import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 / About iJAPAN LLC",
  description:
    "私たちのミッション・強み・代表挨拶・企業情報など、iJAPAN LLC について詳しくご紹介します。",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
