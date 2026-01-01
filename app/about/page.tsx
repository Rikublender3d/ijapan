"use client";

import { motion } from "framer-motion";
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
                臨床現場のニーズに応える医療機器を開発し、歯科医療の質の向上に貢献します
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

            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[#1E3A8A] mb-5 text-2xl font-bold">
                  私たちのミッション
                </h3>
                <p className="mb-5 text-gray-600">
                  iJapan株式会社は、歯科医療の現場で本当に必要とされる医療機器の開発・製造を行う企業です。
                </p>

                <p className="mb-5 text-gray-600">
                  現役の歯科医師である井汲憲治CEOが、長年の臨床経験から感じた「現場の課題」を解決するため、実用性と安全性を追求した製品開発を行っています。
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
                      現役歯科医師による現場目線の製品開発
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
                      高品質な医療機器の製造技術
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
                <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center text-gray-600">
                  会社イメージ画像
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
                代表取締役挨拶
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-12 items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 overflow-hidden"
              >
                井汲憲治 CEO
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3"
              >
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-2">
                  井汲 憲治（いくみ けんじ）
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  代表取締役CEO・歯科医師・歯学博士
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  私は現役の歯科医師として長年インプラント治療に携わってきました。その中で、既存の医療機器では解決できない課題に数多く直面し、「現場が本当に必要としている医療機器を作りたい」という強い想いからiJapan株式会社を設立いたしました。
                </p>

                <h4 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
                  主な経歴・資格
                </h4>
                <ul className="list-none my-5 space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">歯学博士</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      インプラント治療専門医
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      日本インプラント臨床研究会 会長
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      ICOI（国際インプラント学会）認定医
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">
                      昭和大学でのインプラント研究
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2563EB] mr-2">▶</span>
                    <span className="text-gray-600">20年以上の臨床経験</span>
                  </li>
                </ul>

                <div className="bg-white p-8 rounded-xl shadow-lg mt-8 italic">
                  <h4 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
                    代表メッセージ
                  </h4>
                  <p className="mb-4 text-gray-700">
                    「医療現場の声を形にする」ことが私たちの使命です。一人でも多くの患者様に、より良い歯科医療を提供できるよう、現場のニーズに応える製品開発を続けてまいります。
                  </p>

                  <p className="text-gray-700">
                    私たちの製品が、全国の歯科医療従事者の皆様のお役に立ち、ひいては患者様の笑顔につながることを心より願っております。
                  </p>
                </div>
              </motion.div>
            </div>
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
                企業情報
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "会社概要",
                  items: [
                    { label: "社名", value: "iJapan株式会社" },
                    { label: "設立", value: "XXXX年X月" },
                    { label: "代表取締役", value: "井汲 憲治" },
                    { label: "資本金", value: "XXXX万円" },
                    { label: "従業員数", value: "XX名" },
                    {
                      label: "事業内容",
                      value: "歯科医療機器の開発・製造・販売",
                    },
                  ],
                },
                {
                  title: "事業所",
                  items: [
                    { label: "本社", value: "" },
                    { label: "", value: "〒XXX-XXXX" },
                    { label: "", value: "東京都XXX区XXXXXXX" },
                    { label: "TEL", value: "03-XXXX-XXXX" },
                    { label: "FAX", value: "03-XXXX-XXXX" },
                  ],
                },
                {
                  title: "認証・許可",
                  items: [
                    { label: "", value: "医療機器製造販売業許可" },
                    { label: "", value: "医療機器製造業許可" },
                    { label: "", value: "ISO 13485認証" },
                    { label: "", value: "各種医療機器認証" },
                  ],
                },
                {
                  title: "主要取引先",
                  items: [
                    { label: "", value: "全国歯科医院・病院" },
                    { label: "", value: "大学病院" },
                    { label: "", value: "歯科医療機器販売店" },
                    { label: "", value: "海外ディストリビューター" },
                  ],
                },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <h3 className="text-[#1E3A8A] mb-5 pb-3 border-b-2 border-[#2563EB] text-xl font-bold">
                    {info.title}
                  </h3>
                  <ul className="list-none space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="py-1 border-b border-gray-100"
                      >
                        {item.label && (
                          <strong className="text-[#1E3A8A]">
                            {item.label}：
                          </strong>
                        )}
                        <span className="text-gray-600">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
