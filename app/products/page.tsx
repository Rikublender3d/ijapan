"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsPage() {
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
              <h1 className="text-4xl md:text-5xl mb-4 font-bold">製品情報</h1>
              <p className="text-xl max-w-3xl mx-auto">
                革新的な技術で歯科医療の課題を解決する製品群
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20" id="products">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#1E3A8A] mb-8 text-center font-bold">
                製品一覧
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
                臨床現場のニーズに応える医療機器をご紹介します
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-slate-700 flex items-center justify-center text-white font-bold text-xl">
                  iRescuePro
                </div>
                <div className="p-8">
                  <h3 className="text-[#1E3A8A] mb-4 text-xl font-bold">
                    iRescuePro（アイレスキュープロ）
                  </h3>
                  <p className="mb-4 text-gray-600">インプラント除去治具</p>
                  <p className="mb-6 text-gray-600">
                    インプラント内で破断したアバットメントスクリューを安全かつ迅速に除去する画期的な医療器具です。
                  </p>

                  <h4 className="my-5 font-semibold text-[#1E3A8A]">
                    主な特徴：
                  </h4>
                  <ul className="ml-5 list-disc space-y-1 mb-6 text-gray-600">
                    <li>6サイズ対応（1.3mm〜1.8mm内径）</li>
                    <li>インプラント体を傷つけない設計</li>
                    <li>80%の症例で容易に除去可能</li>
                    <li>オートクレーブ滅菌対応</li>
                  </ul>

                  <div className="mt-5">
                    <Link
                      href="/lp"
                      className="inline-block bg-[#2563EB] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#1E40AF] transition-colors duration-300"
                    >
                      製品詳細・お問い合わせ
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-slate-600 flex items-center justify-center text-white font-bold text-xl">
                  開発中製品
                </div>
                <div className="p-8">
                  <h3 className="text-[#1E3A8A] mb-4 text-xl font-bold">
                    次世代製品（開発中）
                  </h3>
                  <p className="mb-4 text-gray-600">さらなる革新を目指して</p>
                  <p className="mb-6 text-gray-600">
                    現在、新たな歯科医療の課題解決に向けた製品開発を進めています。詳細については順次発表予定です。
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/#contact"
                      className="inline-block bg-[#2563EB] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#1E40AF] transition-colors duration-300"
                    >
                      開発情報のお問い合わせ
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
