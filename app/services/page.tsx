"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaMicroscope } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
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
              <h1 className="text-4xl md:text-5xl mb-4 font-bold">事業内容</h1>
              <p className="text-xl max-w-3xl mx-auto">
                歯科医療機器の企画・開発から製造・販売まで一貫したサービスを提供
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                事業内容
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                私たちのサービス
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                臨床現場のニーズに応える医療機器の開発から、お客様へのサポートまで、一貫したサービスを提供しています
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaMicroscope />,
                  title: "製品企画・開発",
                  desc: "臨床現場の課題を解決する医療機器の企画・開発を行います。現役歯科医師の視点から、本当に必要とされる製品を生み出します。",
                  features: [
                    "臨床ニーズの調査・分析",
                    "製品コンセプトの立案",
                    "プロトタイプ開発",
                    "臨床試験の実施",
                  ],
                },
                {
                  icon: <MdFactory />,
                  title: "製造・品質管理",
                  desc: "高品質な医療機器の製造を行い、厳格な品質管理体制のもと、安全で信頼性の高い製品をお届けします。",
                  features: [
                    "ISO 13485認証取得",
                    "厳格な品質管理体制",
                    "高精度な製造技術",
                    "品質保証システム",
                  ],
                },
                {
                  icon: <MdLocalShipping />,
                  title: "販売・流通",
                  desc: "全国の歯科医院・病院への直販および正規ディーラーを通じた販売網により、迅速で確実な製品供給を行います。",
                  features: [
                    "全国販売ネットワーク",
                    "直販・ディーラー経由",
                    "迅速な配送体制",
                    "在庫管理システム",
                  ],
                },
                {
                  icon: <MdSchool />,
                  title: "教育・サポート",
                  desc: "製品の正しい使用方法の指導から、技術的サポートまで、導入後も継続的にお客様をサポートします。",
                  features: [
                    "操作トレーニング",
                    "技術的サポート",
                    "オンライン講習会",
                    "マニュアル提供",
                  ],
                },
                {
                  icon: <FaWrench />,
                  title: "アフターサービス",
                  desc: "製品保証、メンテナンス、部品交換など、長期的にご愛用いただけるよう充実したアフターサービスを提供します。",
                  features: [
                    "製品保証制度",
                    "メンテナンスサービス",
                    "部品交換対応",
                    "修理サービス",
                  ],
                },
                {
                  icon: <MdLightbulb />,
                  title: "技術コンサルティング",
                  desc: "歯科医療機器に関する技術相談や、カスタマイズのご要望にもお応えし、お客様のニーズに最適化したソリューションを提案します。",
                  features: [
                    "技術相談対応",
                    "カスタマイズ提案",
                    "導入支援",
                    "最適化ソリューション",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="text-5xl mb-6 text-[#2563EB] flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E3A8A] text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    {service.desc}
                  </p>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-sm font-semibold text-[#1E3A8A] mb-3">
                      主なサービス内容
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="text-[#2563EB] mr-2">▶</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                サービスフロー
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                サービス提供の流れ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                お客様のニーズから製品導入まで、一貫したサポートを提供します
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "ご相談・ヒアリング",
                  desc: "お客様のニーズや課題をお聞きします",
                },
                {
                  step: "02",
                  title: "提案・見積もり",
                  desc: "最適なソリューションをご提案します",
                },
                {
                  step: "03",
                  title: "導入・トレーニング",
                  desc: "製品導入と使用方法の指導を行います",
                },
                {
                  step: "04",
                  title: "アフターサポート",
                  desc: "継続的なサポートを提供します",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center relative"
                >
                  <div className="w-16 h-16 bg-[#2563EB] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 w-5 h-0.5 bg-gray-300 z-100">
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-gray-300 border-b-[5px] border-b-transparent z-100"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-[#1E3A8A] mb-6 font-bold">
                お気軽にお問い合わせください
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                製品に関するご質問、導入に関するご相談など、専門スタッフが丁寧に対応いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-block bg-[#2563EB] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1E40AF] transition-colors duration-300"
                >
                  製品情報を見る
                </Link>
                <Link
                  href="/#contact"
                  className="inline-block bg-white text-[#2563EB] border-2 border-[#2563EB] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300"
                >
                  お問い合わせ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
