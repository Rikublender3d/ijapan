"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/dNE9tBFE0qg?si=QLD-qZSk_xWp7mNu";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="w-full">
        <section className="bg-gradient-to-br from-slate-700 to-blue-500 text-white py-24 text-center mt-20">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl mb-4 font-bold">製品情報</h1>
              <p className="text-xl max-w-3xl mx-auto">
                革新的な技術で歯科医療の課題を解決する製品群
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50/50" id="products">
          <div className="max-w-7xl mx-auto px-5 space-y-16 md:space-y-24">
            {/* iRescuePro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Images */}
                <div className="p-6 md:p-8 order-2 md:order-1 flex flex-col justify-center">
                  <div className="w-full mb-5">
                    <Image
                      src="/site_5.jpeg"
                      alt="iRescuePro 製品写真"
                      width={1200}
                      height={900}
                      className="w-full h-auto rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="w-full max-w-[200px] mx-auto md:mx-0">
                    <Image
                      src="/site_6.jpeg"
                      alt="iRescuePro ロゴ"
                      width={200}
                      height={100}
                      className="w-full h-auto rounded-xl"
                      sizes="200px"
                    />
                  </div>
                </div>
                {/* Right: Copy + Video */}
                <div className="p-6 md:p-10 flex flex-col justify-center order-1 md:order-2 border-t md:border-t-0 md:border-l border-gray-100">
                  <Link
                    href="/lp"
                    className="text-2xl md:text-3xl font-bold text-[#1E3A8A] hover:opacity-80 transition-opacity mb-5 inline-block leading-tight"
                  >
                    iRescuePro（アイレスキュープロ）
                  </Link>
                  <ul className="space-y-4 text-gray-600 mb-8 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] shrink-0 mt-0.5">・</span>
                      <span>
                        インプラント内で破折したアバットメントスクリューを素早く、安全に取り除くための医療器具です。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] shrink-0 mt-0.5">・</span>
                      <span>
                        10年以上に及ぶ実際の臨床現場での試行錯誤から最適にデザインされました。
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] shrink-0 mt-0.5">・</span>
                      <span>
                        特定のブランドではなく、ほぼ全てのインプラントシステムに対応しているため、メーカーが特定できないインプラントでも使用可能です。
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/lp"
                    className="inline-flex items-center gap-2 w-fit bg-[#2563EB] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors text-sm md:text-base"
                  >
                    製品詳細・LP へ<span className="opacity-90">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100"
            >
              <p className="text-sm font-medium text-gray-600 mb-3">紹介動画</p>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="iRescuePro 動画"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>

            {/* iOptimus */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8 md:p-12 border border-gray-100"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-[#1E3A8A]">
                  iOptimus（アイオプティマス）
                </h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  開発中
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                インプラントの治療計画立案ソフトウエアにおける最適化モジュール（開発中）
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
