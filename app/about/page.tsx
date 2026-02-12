"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-700 to-blue-500 text-white py-24 text-center mt-20">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl mb-4 font-bold">会社概要</h1>
              <p className="text-xl max-w-3xl mx-auto">
                臨床現場の&quot;困った&quot;を、世界標準の技術に変える。
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20" id="about">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#1E3A8A] mb-8 text-center font-bold">
                私たちについて
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
              {/* SP: テキストを先に表示 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-1"
              >
                <h3 className="text-[#1E3A8A] mb-5 text-2xl font-bold">
                  Mission（ミッション）
                </h3>
                <p className="mb-4 text-gray-600">
                  臨床現場の&quot;困った&quot;を、世界標準の技術に変える。
                </p>
                <p className="mb-5 text-gray-600">
                  iJAPAN
                  は、歯科・医療の臨床現場から生まれた課題に真正面から向き合い、科学的根拠と実践的な設計思想に基づいた革新的ソリューションを提供します。私たちは、治療の質と安全性を高め、医療従事者と患者双方の未来に貢献します。
                </p>
                <p className="mb-6 text-gray-500 text-sm italic border-l-4 border-[#2563EB] pl-4">
                  Transforming clinical challenges into global standards.
                  <br />
                  iJAPAN develops innovative medical solutions rooted in real
                  clinical needs, combining scientific evidence with practical
                  design to elevate the quality and safety of care worldwide.
                </p>

                <h3 className="text-[#1E3A8A] mb-5 text-2xl font-bold">
                  Strengths（iJAPAN の強み）
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2 shrink-0">▶</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        臨床発・現場直結のプロダクト開発
                      </strong>{" "}
                      —
                      開発の起点は常に実際の治療現場。術者の操作性・安全性・再現性を最優先。&quot;理論先行&quot;ではなく&quot;臨床検証主導&quot;。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2 shrink-0">▶</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        世界市場を前提とした設計思想
                      </strong>{" "}
                      — 日本品質 × グローバルスタンダード。国際展開（US /
                      EU）を見据えた製品設計。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2 shrink-0">▶</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        エビデンスと知的財産を重視
                      </strong>{" "}
                      —
                      特許・知財戦略を製品価値の中核に配置。学術・教育との連動を重視。
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2 shrink-0">▶</span>
                    <span className="text-gray-600">
                      <strong className="text-gray-800">
                        少数精鋭による機動力
                      </strong>{" "}
                      —
                      意思決定が速く、改良・改善サイクルが早い。パートナー企業との協業を前提とした設計。
                    </span>
                  </li>
                </ul>
              </motion.div>
              {/* SP: 画像を下に・縦横切れないように / PC: 従来どおり */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-2 md:order-2"
              >
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-96 rounded-xl overflow-hidden ">
                  <Image
                    src="/site_2.jpeg"
                    alt="iJAPAN 会社イメージ"
                    fill
                    className="object-contain md:object-cover md:object-left rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-20 bg-gray-50" id="ceo">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#1E3A8A] mb-8 text-center font-bold">
                Message from the CEO（代表挨拶）
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
                <div>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    医療現場には、教科書やガイドラインだけでは解決できない課題が数多く存在します。私自身、臨床の最前線に立つ中で、&quot;本当に必要なのに、世の中に存在しない医療器具&quot;に何度も直面してきました。
                  </p>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    iJAPAN
                    は、そのような臨床の声を出発点に、確かな理論と実践的な設計を融合させ、世界で通用する医療技術へと昇華させることを使命としています。
                  </p>
                  <p className="text-[#1E3A8A] font-semibold">— 井汲憲治 CEO</p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Many clinical challenges cannot be solved by textbooks or
                    guidelines alone. Through years of hands-on clinical
                    experience, I repeatedly encountered problems that truly
                    needed solutions—yet had none.
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    iJAPAN was founded to transform such unmet clinical needs
                    into globally applicable medical technologies, grounded in
                    both theory and practice. As a focused and agile company, we
                    strive to make meaningful contributions to the advancement
                    of healthcare worldwide.
                  </p>
                  <p className="text-[#1E3A8A] font-semibold mb-3">
                    Noriharu Ikumi CEO
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-700 mb-2">
                  井汲憲治CEOの記事がNewsweek誌（2025年8月５日号）に掲載されました。
                </p>
                <p className="text-gray-600 text-sm">
                  The professional activities of Noriharu Ikumi, DDS, PhD were
                  featured in Newsweek magazine Japan (Edition, August 5, 2025
                  issue), highlighting his contributions and insights into the
                  future of the dental field.
                </p>
              </div>
              <div className="mt-6 p-5  border-l-4 border-[#2563EB] bg-blue-50/50 text-gray-700 text-sm leading-relaxed">
                <p className="mb-4">
                  The article highlights Dr. Noriharu Ikumi as a pioneering and
                  forward-thinking implant dentist committed to advancing
                  patient health and longevity. Recognizing that restoring oral
                  function plays a critical role in extending healthy life
                  expectancy, he has consistently introduced innovative
                  technologies into implant treatment.
                </p>
                <p className="mb-4">
                  From the early adoption of CT-based diagnostics to the
                  implementation of digital planning and guided surgery, Dr.
                  Ikumi has emphasized precision, safety, and minimally invasive
                  procedures. His approach integrates advanced technology with
                  careful clinical judgment, aiming to improve predictability
                  while reducing patient burden.
                </p>
                <p>
                  Driven by a challenger&apos;s spirit, he continues to explore
                  emerging fields such as digital dentistry and AI, seeking to
                  elevate implant treatment to a higher standard and ultimately
                  enhance patients&apos; quality of life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20" id="company">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#1E3A8A] mb-8 text-center font-bold">
                Company Information（会社情報）
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {/* SP: カード表示（スクロールなし） */}
              <div className="md:hidden space-y-3">
                {[
                  { label: "会社名", ja: "iJAPAN 合同会社", en: "iJAPAN LLC" },
                  {
                    label: "法人形態",
                    ja: "合同会社",
                    en: "Godo Kaisha (Japan)",
                  },
                  {
                    label: "代表者",
                    ja: "代表社員 井汲憲治",
                    en: "Noriharu Ikumi",
                  },
                  {
                    label: "事業内容",
                    ja: "医療機器の研究・開発・製造・EC販売",
                    en: "Development and EC distribution of medical devices",
                  },
                  {
                    label: "主な分野",
                    ja: "歯科・インプラント関連機器",
                    en: "Dental and implant-related technologies",
                  },
                  { label: "設立", ja: "2025年", en: "2025" },
                  {
                    label: "所在地",
                    ja: "〒108-0013 東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F",
                    en: "2F, Hamamatsucho Daiya Building, 2-2-15 Hamamatsucho, Minato-ku, Tokyo 105-0013",
                  },
                  { label: "電話", ja: "03-6869-6046", en: "+81-3-6869-6046" },
                  {
                    label: "メール",
                    ja: "tokyo7.ijapan@gmail.com",
                    en: "tokyo7.ijapan@gmail.com",
                  },
                  {
                    label: "対応エリア",
                    ja: "日本 / 北米（予定）/ 欧州（予定）",
                    en: "Japan, North America and Europe (planned)",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-medium text-[#1E3A8A] mb-2">
                      {row.label}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">{row.ja}</p>
                    <p className="text-gray-500 text-xs">{row.en}</p>
                  </div>
                ))}
              </div>
              {/* PC: テーブル */}
              <div className="hidden md:block rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#1E3A8A] text-white">
                      <th className="px-6 py-4 font-bold w-28">項目</th>
                      <th className="px-6 py-4 font-bold">日本語</th>
                      <th className="px-6 py-4 font-bold">English</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        会社名
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        iJAPAN 合同会社
                      </td>
                      <td className="px-6 py-3 text-gray-600">iJAPAN LLC</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        法人形態
                      </td>
                      <td className="px-6 py-3 text-gray-700">合同会社</td>
                      <td className="px-6 py-3 text-gray-600">
                        Godo Kaisha (Japan)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        代表者
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        代表社員 井汲憲治
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        Noriharu Ikumi
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        事業内容
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        医療機器の研究・開発・製造・EC販売
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        Development and EC distribution of medical devices
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        主な分野
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        歯科・インプラント関連機器
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        Dental and implant-related technologies
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        設立
                      </td>
                      <td className="px-6 py-3 text-gray-700">2025年</td>
                      <td className="px-6 py-3 text-gray-600">2025</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        所在地
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        〒108-0013 東京都港区浜松町2丁目2番15号
                        浜松町ダイヤビル2F
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        2F, Hamamatsucho Daiya Building, 2-2-15 Hamamatsucho,
                        Minato-ku, Tokyo 105-0013
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        電話
                      </td>
                      <td className="px-6 py-3 text-gray-700">03-6869-6046</td>
                      <td className="px-6 py-3 text-gray-600">
                        +81-3-6869-6046
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        メール
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        tokyo7.ijapan@gmail.com
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        tokyo7.ijapan@gmail.com
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 text-gray-500 font-medium">
                        対応エリア
                      </td>
                      <td className="px-6 py-3 text-gray-700">
                        日本 / 北米（予定）/ 欧州（予定）
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        Japan, North America and Europe (planned)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
