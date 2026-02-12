"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-br from-slate-700 to-blue-500 text-white py-32 text-center mt-20"
          id="home"
        >
          <div className="max-w-6xl mx-auto px-5">
            <h1 className="text-5xl md:text-6xl mb-5">iJAPAN LLC</h1>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              歯科医療の未来を創造する
              <br />
              革新的な医療機器の開発・製造企業
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#2563EB] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1E40AF] transition-colors duration-300"
            >
              製品情報を見る
            </Link>
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
                会社概要
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
                臨床現場のニーズに応える医療機器を開発し、歯科医療の質の向上に貢献します
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-5 text-gray-600">
                  iJAPAN LLC
                  (iJAPAN合同会社)は、歯科医療の現場で本当に必要とされる医療機器の開発・製造を行う企業です。
                </p>

                <p className="mb-5 text-gray-600">
                  井汲憲治CEOをはじめとする各分野のリーダーが、“現場の課題”を解決するため、実用性と安全性を追求した革新的な医療機器・ソフトウエアのを製品開発を行っています。
                </p>

                <p className="mb-5 text-gray-600">
                  私たちは単なる製品の製造にとどまらず、歯科医療従事者と患者様の双方にとって価値のあるソリューションを提供し続けることを使命としています。
                </p>

                <h3 className="text-[#1E3A8A] mb-5 text-2xl font-bold">
                  私たちの強み
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      各分野の歯科医師・エンジニアによる現場目線の医療機器・ソフトウエアの開発
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      臨床経験に基づく実用性重視の設計
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      革新的で高品質な医療機器・ソフトウエアの開発
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      継続的な製品改良とサポート体制
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-96 md:rounded-xl overflow-hidden">
                  <Image
                    src="/site_2.jpeg"
                    alt="会社イメージ"
                    fill
                    className="object-contain object-left md:object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation Cards Section */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div>
              {[
                {
                  title: "会社概要",
                  sub_title: "About iJAPAN LLC",
                  image: "/site_3.jpeg",
                  description:
                    "私たちのミッション・強み・代表挨拶・企業情報など、iJAPAN LLCについて詳しくご紹介します。",
                  href: "/about",
                },
                {
                  title: "製品情報",
                  image: "/site_4.jpeg",
                  description:
                    "革新的な技術で歯科医療の課題を解決する製品群をご紹介します。iRescueProをはじめとする製品の詳細をご覧いただけます。",
                  href: "/products",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`flex flex-col md:flex-row relative py-10 md:my-15 my-5 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    style={{ minHeight: "360px" }}
                  >
                    {/* Image - SP: 上に配置・余白付きで画像全体表示 / PC: 従来どおり */}
                    <div
                      className={`w-full order-first md:order-none block md:absolute ${index % 2 === 1 ? "md:top-0 md:left-0" : "md:top-0 md:right-0"} md:w-[52%] md:h-full`}
                    >
                      <div className="w-full mx-auto max-w-md md:max-w-none aspect-[4/3] md:aspect-auto md:h-full rounded-xl md:rounded-sm overflow-hidden relative">
                        <Image
                          src={card.image}
                          alt="会社イメージ"
                          fill
                          className="object-contain md:object-cover rounded-xl md:rounded-sm"
                          sizes="(max-width: 768px) 100vw, 52vw"
                        />
                      </div>
                    </div>
                    {/* Text Card - SP: 画像との間に隙間を開けて角丸が見えるように */}
                    <div className="relative bg-white shadow-md md:rounded-sm rounded-xl md:rounded-t-sm p-8 md:p-10 w-full md:w-[52%] md:mx-0 flex flex-col justify-between z-10 mt-3 md:mt-0">
                      <div>
                        <h3 className="text-3xl font-bold text-black mb-6">
                          {card.title}
                        </h3>
                        {card.sub_title ? (
                          <h4 className="text-2xl font-bold text-black mb-6">
                            {card.sub_title}
                          </h4>
                        ) : (
                          ""
                        )}
                        <p className="text-gray-700 leading-relaxed mb-8">
                          {card.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <Link
                          href={card.href}
                          className="text-black font-medium inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                        >
                          さらに見る <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Banner */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm md:block hidden"
          >
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-lg shadow-2xl p-6 text-white relative">
              <button
                onClick={handleCloseBanner}
                className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors cursor-pointer"
                aria-label="閉じる"
              >
                <IoClose className="w-5 h-5" />
              </button>
              <div className="pr-6">
                <h3 className="text-xl font-bold mb-2">iRescuePro</h3>
                <p className="text-sm mb-4 opacity-90">
                  インプラント除去治具の詳細情報はこちら
                </p>
                <Link
                  href="/lp"
                  className="inline-block bg-white text-[#2563EB] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm"
                >
                  製品詳細を見る →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Banner */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            style={{ height: "120px" }}
          >
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] h-full text-white relative flex items-center px-4">
              <button
                onClick={handleCloseBanner}
                className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors cursor-pointer"
                aria-label="閉じる"
              >
                <IoClose className="w-5 h-5" />
              </button>
              <div className="flex-1 pr-8">
                <h3 className="text-lg font-bold mb-1">iRescuePro</h3>
                <p className="text-xs mb-3 opacity-90">
                  インプラント除去治具の詳細情報はこちら
                </p>
                <Link
                  href="/lp"
                  className="inline-block bg-white text-[#2563EB] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-xs"
                >
                  製品詳細を見る →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
