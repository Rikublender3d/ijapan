"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { CiRuler } from "react-icons/ci";
import { FaVirusSlash } from "react-icons/fa";
import { LuSmilePlus } from "react-icons/lu";
import { FaGlobe, FaWaveSquare } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Squash as Hamburger } from "hamburger-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
            setIsMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="flex justify-between items-center py-2 md:py-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons.png"
                alt="iJAPAN合同会社"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
            <ul
              className={`nav-menu md:flex md:gap-8 list-none absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row p-5 md:p-0 shadow-lg md:shadow-none ${isMenuOpen ? "flex" : "hidden"}`}
            >
              <li>
                <a
                  href="#home"
                  className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="#problem"
                  className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  課題
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  製品情報
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  メリット
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-block bg-[#2563EB] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300"
              >
                お問い合わせ
              </a>
              <button
                className="mobile-menu-toggle md:hidden bg-transparent border-none cursor-pointer p-3 hover:bg-gray-100 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section
          className="bg-white pb-24 pt-15 md:pt-5 md: pb-5  mt-20 md:py-24"
          id="home"
        >
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                  iJAPAN LLC
                </div>
                <h1 className="text-3xl md:text-5xl mb-6 font-bold text-[#1E3A8A] leading-tight">
                  そのアバットメント
                  <br />
                  スクリュー破折、
                  <br />
                  あなたはインプラントを救えますか？
                </h1>
                <p className="text-md md:text-md text-gray-600 mb-8 leading-relaxed">
                  アバットメントスクリューの破折は、術者にとって最も避けたいトラブルの一つです。
                  <br />
                  <br />
                  このページを御覧になっている先生の多くは、インプラント治療のベテランであり、過去にアバットメントスクリューの除去に苦慮された経験をお持ちのことと思います。
                  <br />
                  <br />
                  2026年に販売がスタートしたiRescuePro（アイレスキュープロ）は破折スクリューを短時間に安全に除去し、インプラント体を温存するために開発されたシステムです。10年の臨床経験によって成熟された設計により、再手術を回避し患者負担と術者ストレスを最小限に抑えます。
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300 text-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  資料請求・お問い合わせ
                </a>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-[260px] sm:h-[320px] md:aspect-[3/4] md:h-auto md:min-h-[380px] md:max-h-[520px] rounded-2xl md:rounded-3xl overflow-hidden">
                  <Image
                    src="/lp_top.png"
                    alt="iRescuePro インプラント除去治具"
                    fill
                    className="object-contain rounded-2xl md:rounded-3xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Boxes */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-[#2563EB] p-8 rounded-2xl text-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">迅速対応</h3>
                <p className="text-blue-100">
                  緊急時にも迅速に対応いたします。ご注文をいただいた原則1営業日後に、当社よりiRescueProシステムを発送いたします。
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#2563EB] p-8 rounded-2xl text-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  10年以上の臨床評価実績
                </h3>
                <p className="text-blue-100">
                  長年の臨床経験に基づいて開発されたシステムであり、全国の大学病院・口腔外科・歯科医院での採用実績があります。
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#2563EB] p-8 rounded-2xl text-white"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-white text-base font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">高い臨床成績</h3>
                <p className="text-blue-100">
                  臨床モニターでの成功率は９６%（推奨適応症対象）。インプラント体を傷付けずに短時間で破折アバットメントスクリューを除去できます。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white" id="problem">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                課題について
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold leading-tight">
                アバットメント
                <br />
                スクリュー破折の
                <br />
                問題点
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                アバットメントスクリューが破折するとインプラント治療の予後に重大な支障をきたします。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                破折したスクリューの除去は極めて難しく、適切な器具を用いない場合には、スクリュー除去をより困難にしたり、インプラント内部を傷つけて修復不可能としてしまうリスクがあります。
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                最悪の場合は、インプラント本体を撤去せざるを得なくなるケースもあります。
              </p>
              <a
                href="#product"
                className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                解決策を見る
              </a>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-[#2563EB] flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-3 mt-3 text-[#1E3A8A]">
                  発生頻度
                </h3>
                <div className="text-gray-600 space-y-3 flex-grow">
                  <p>
                    ①
                    アバットメントスクリューの緩みは比較的高頻度に発生し、報告によっては約6〜7％に及ぶとされています。
                  </p>
                  <p>
                    一方で、アバットメントスクリューの破折は稀なトラブルと考えられてきましたが、研究報告ではアバットメントスクリューの破折率は約2％とされています。
                  </p>
                  <p>
                    しかしながら、完全に回避することは難しく、経験年数や術者を問わず、誰にでも起こり得る合併症の一つです。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-[#2563EB] flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-3 mt-3 text-[#1E3A8A]">
                  従来法の難しさ
                </h3>
                <div className="text-gray-600 space-y-3 flex-grow">
                  <p>
                    破折スクリューの除去は、従来きわめて困難な処置の一つです。
                  </p>
                  <p>
                    破折スクリュー内部に加工を施す除去キットでは、患者さんに不快な振動を与え、インプラント内部を損傷する危険性があります。
                  </p>
                  <p>
                    また、短針やピンセットを用いた方法では所要時間が読めず、実際に多大な時間を要します。
                  </p>
                  <p>
                    いずれも、直径数ミリの狭小な視野での操作は高い熟練度を要求し、術者に大きな精神的・身体的負担を強いる処置となります。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-[#2563EB] flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-3 mt-3 text-[#1E3A8A]">
                  患者・術者双方のストレス
                </h3>
                <div className="text-gray-600 space-y-3 flex-grow">
                  <p>
                    アバットメントスクリュー破折は患者への不安を与えますし、ドクターにとっても、&quot;どう対処したらいいのか&quot;というプレッシャーになります。
                  </p>
                  <p>
                    適切なツールがない状況で無理に除去を試みれば、治療の失敗や信用低下にもつながりかねません。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="py-20 bg-gray-50" id="knowledge">
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
                知っておくべきこと
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                あなたはこのことを知っていますか？
              </h2>
            </motion.div>

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  icon: <FiMapPin className="w-12 h-12 text-[#2563EB]" />,
                  title: "スクリューは「ほぼ同じ場所」で折れる",
                  desc: "アバットメントスクリューの破折は、偶然ではありません。多くの症例で、応力が集中しやすいスクリューの特定の部位において破折が生じることが知られています。",
                },
                {
                  icon: <FaArrowsRotate className="w-12 h-12 text-[#2563EB]" />,
                  title: "折れたスクリューの「ほとんど」は回転可能である",
                  desc: "破折後もスクリューの多くはインプラント内部で完全に固着しているわけではなく、回転可能な状態にあります。つまり、多くの症例において適切なアプローチとツールがあれば、非侵襲的に除去できる可能性が十分に残されているのです。",
                },
                {
                  icon: <FaWaveSquare className="w-12 h-12 text-[#2563EB]" />,
                  title: "スクリューの破折面は「波状の粗面」である",
                  subTitle: "破断面イメージ",
                  desc: "スクリューの破折面は、滑らかな断面ではなく、疲労破壊に特有の波状で粗い形態を示します。この微細な凹凸は、適切に利用すれば把持や回転操作のための有効な手がかりとなります。",
                },
                {
                  icon: <CiRuler className="w-12 h-12 text-[#2563EB]" />,
                  title: "スクリューのシャフト径はインプラントによって異なる",
                  desc: "アバットメントスクリューのシャフト径は、インプラントメーカーやシステムごとに僅かに異なります。",
                },
                {
                  icon: <FaGlobe className="w-12 h-12 text-[#2563EB]" />,
                  title: "スクリューの破折は「世界的な臨床的課題」となっている",
                  desc: "スクリュー破折は特定の患者や術者に限った問題ではありません。世界中の臨床現場で共通して直面している機械的合併症であり、グローバルに解決策が求められている課題です。",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A] mb-3">
                      {item.title}
                    </h3>
                    {item.subTitle && (
                      <p className="text-sm text-[#4FD1C7] font-medium mb-2">
                        {item.subTitle}
                      </p>
                    )}
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Screw Removal Was Difficult */}
        <section className="py-20 bg-white" id="why-difficult">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                では、なぜスクリューの除去は難しかったの？
              </h2>
            </motion.div>

            <div className="space-y-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    スクリューは「ほぼ同じ場所」で折れる
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  スクリューが破折する部位は、実はほぼ決まっています。それは
                  &quot; インプラント内のネジ上端部 &quot;
                  です。そのため、破折直後のスクリュー断面は、内ネジ上端とほぼ同じ高さに位置していることがほとんどです。
                </p>
                <p className="text-gray-600">
                  本来、この位置での破折は スクリュー除去にとって極めて有利
                  な状況です。ところが、初期対応を誤ることで、破折スクリューをインプラント内部へ押し込んでしまい、結果として除去を著しく困難にしているケースが少なくありません。
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    <FaArrowsRotate className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    折れたスクリューの「ほとんど」は回転可能である
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  インプラントの内ネジとアバットメントスクリューの外ネジの間には、設計上ごくわずかなクリアランスが存在します。そのため、破折したスクリューの多くは
                  強固に固着しているわけではなく、わずかなトルクで回転可能
                  な状態にあります。
                </p>
                <p className="text-gray-600">
                  一方で、破折スクリュー内部に加工を施してから除去する方法も知られています。しかし、この手法は
                  大きなトルクが必要な特殊なケースに限って有効
                  であり、実際の臨床現場で遭遇する多くの症例においては、現実的かつ効率的な方法とは言えません。
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    <FaWaveSquare className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    スクリューの破折面は「波状の粗面」である
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  アバットメントスクリューの破折面は、ナイフで切ったような平滑面ではありません。疲労破壊に特有の
                  波状で粗い断面 を呈しています。
                </p>
                <p className="text-gray-600">
                  この微細な凹凸に短針の先端を引っかけることで、破折スクリューをある程度回転させることは可能です。しかし、短針による操作は
                  非常に手間と時間を要する非効率な作業
                  であり、術者にとって大きなストレスとなってきました。
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    <CiRuler className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    スクリューのシャフト径はインプラントによって異なる
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  アバットメントスクリューのシャフト径は、およそ
                  1.5mm前後から2.0mm前後
                  ですが、メーカーやインプラントシステムごとに微妙な差異があります。
                </p>
                <p className="text-gray-600">
                  そのため、破折スクリューの除去器具には
                  特定メーカーに依存しない、高い汎用性を備えた設計
                  が不可欠です。にもかかわらず、これまで
                  患者と術者の双方にとって効率的かつ現実的なスクリュー除去システムは存在していませんでした。
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    <FaGlobe className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">
                    スクリューの破折は「世界的な臨床的課題」となっている
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  インプラントが使用不能に至る原因として、①インプラント周囲炎、②アバットメントスクリューの破折、③インプラント体の破折
                  が、いわゆる「トップ3」として広く認識されています。特にアバットメントスクリューの破折に関しては、スクリューさえ交換できればインプラントは本来の機能を回復できる
                  という事実を臨床家は理解しています。
                </p>
                <p className="text-gray-600">
                  しかし、その「交換」が決して簡単ではないために、世界中のドクターが長年にわたりこの問題に苦しんできました。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* iRescuePro Solves These Problems */}
        <section className="py-20 bg-gray-50" id="solutions">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                iRescueProはこれらの問題を解決します
              </h2>
            </motion.div>

            <div className="space-y-16">
              {[
                {
                  icon: <FiMapPin className="w-10 h-10 text-[#2563EB]" />,
                  title: "スクリューは「ほぼ同じ場所」で折れる",
                  paragraphs: [
                    "iRescueProは、特殊な先端形状により「グリップ機能」と「スパイク機能」を併せ持つクラス１医療機器です＊。この設計により、破折位置を問わずにさまざまな症例に対応することが可能です。(＊国内外特許申請済)",
                    "特に、インプラントの内ネジ上端部で発生したスクリュー破折症例においては、極めて短時間での除去を実現します。繰り返しになりますが、臨床上、スクリュー破折の多くはこの部位で発生していることが知られています。",
                  ],
                },
                {
                  icon: <FaArrowsRotate className="w-10 h-10 text-[#2563EB]" />,
                  title: "折れたスクリューの「ほとんど」は回転可能である",
                  paragraphs: [
                    "先端のグリップ機能とスパイク機能により、破折スクリューを上方へわずかに挺出させながら、同時にシャフト側面を確実に把持します。その結果、破折したスクリューは指によるごく弱い回転力だけで、スムーズに除去することが可能です。",
                    "一見「全く動かない」と判断されるスクリューであっても、多くの症例では、超音波振動を付与することで固着が解除され、可動性が回復します。その結果、iRescueProが適応となります。一方、スクリューが複雑に破折し、インプラント体と機械的に固着・変形している症例においては、iRescueProの適応外となります。",
                  ],
                },
                {
                  icon: <FaWaveSquare className="w-10 h-10 text-[#2563EB]" />,
                  title: "スクリューの破折面は「波状の粗面」である",
                  paragraphs: [
                    "破折したスクリューの断面は、平滑ではなく微細な凹凸を伴う波状の粗面を呈しています。iRescueProの先端のスパイク形状は、この凹凸を確実な足がかりとして捉え、逆回転トルクを効率よく伝達します。",
                    "そのため、多くの症例において、インプラント内ネジの深部に位置する破折スクリューを上方へ移動させることが可能です。",
                  ],
                },
                {
                  icon: <CiRuler className="w-10 h-10 text-[#2563EB]" />,
                  title: "スクリューのシャフト径はインプラントによって異なる",
                  paragraphs: [
                    "iRescueProは、6種類のサイズバリエーションを備えています。これにより、特定のメーカーに依存することなく、市販されているほぼすべてのインプラントシステムに対応可能です。",
                    "また、インプラントの種類が不明な症例であっても、即座に対応できる点は、臨床現場における大きな利点です。",
                  ],
                },
                {
                  icon: <FaGlobe className="w-10 h-10 text-[#2563EB]" />,
                  title: "スクリューの破折は「世界的な臨床的課題」となっている",
                  paragraphs: [
                    "アバットメントスクリューの破折は、国やメーカーを問わず発生する世界的な問題です。",
                    "iRescueProはインプラントシステムを選ばない汎用設計であるため、世界中のスクリュー破折症例に対する実践的なソリューションとなることが期待されます。",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col md:flex-row gap-8 md:gap-12 items-start bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#F0F9FF] border border-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
                      {item.title}
                    </h3>
                    <div className="space-y-4">
                      {item.paragraphs.map((p, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Point Section */}
        <section className="py-20 bg-white" id="key-point">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                ここがポイント
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                手順が複雑な除去システムは、初期対応を誤ることで、破折スクリューをインプラント深部へ押し込み、内ネジを破壊してせっかくの状態を悪化させてしまうリスクがあります。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                一方、スクリュー破折直後は、破折片がまだ可動性を保っていることが多く、この初期段階での対応が、その後の除去の難易を大きく左右します。
              </p>
              <p className="text-gray-600 leading-relaxed">
                したがって、スクリュー破折に遭遇した際のファーストコンタクトとして、まずは
                iRescuePro の使用をお勧めします。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="py-20 bg-gray-50" id="product">
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
                製品情報
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                iRescuePro（アイレスキュープロ）の概要
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                破折したアバットメントスクリューを安全かつ迅速に除去する医療器具
              </p>
            </motion.div>

            <div className="grid gap-12 items-center mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Image
                  src="/kit.jpg"
                  alt="iRescuePro インプラント除去治具キット（6本セット）"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-3xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-6">
                  iRescuePro（アイレスキュープロ）
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  インプラント内で破断したアバットメントスクリューを安全かつ迅速に除去する医療器具です。井汲憲治CEO歯科医師が長年の臨床経験をもとに開発した、現場の声に応えた製品となっております。
                </p>

                <div className="bg-white p-6 rounded-2xl mb-6 border border-gray-100">
                  <h4 className="font-semibold mb-3 text-[#1E3A8A]">
                    基本構成
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>専用ドリル（折れたネジに溝を付与）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>エキストラクター（ネジを回収）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>ハンドル、各種サイズアダプター</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold mb-3 text-[#1E3A8A]">
                    適応ケース
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>
                        インプラント体内部で破折したアバットメントスクリューの除去
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>
                        アバットメント自体の破折やネジ山のなめり等、関連トラブルにも対応
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div> */}
            </div>

            {/* <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">
                  汎用性
                </h3>
                <p className="text-gray-600">
                  国内外主要インプラントシステムへの対応をしております。多くのメーカーのネジ規格に適合するアダプターを備えています。
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">
                  承認・認証
                </h3>
                <p className="text-gray-600">
                  一般医療機器として認証取得済み。ISO
                  13485認証取得により、品質管理体制が確立されています。
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* iRescuePro Case Video Section */}
        <section className="py-20 bg-gray-50" id="video">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                症例動画
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                iRescuePro症例動画
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/dNE9tBFE0qg?si=QLD-qZSk_xWp7mNu"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">
                製品の特長
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                製品の特長
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                高度な設計と優れた操作性により、経験の浅い術者でも短時間で正確な除去を実現
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <IoAdd />,
                  title: "インプラントを傷つけない除去",
                  desc: "インプラント体内部のネジ溝を傷つけずに折れたスクリューのみを摘出可能。高度に設計された器具により、インプラント本体を再利用できる状態で残せます。",
                },
                {
                  icon: <FaArrowsRotate style={{ transform: "scaleX(-1)" }} />,
                  title: "シンプルなハンド操作",
                  desc: "エンジンを使ったドリル作業ではないため、誤って内ネジをキズつけてしまう心配はありません。また、不快な音や振動もないため、患者さんは安心して除去処置を受けられます。",
                },
                {
                  icon: <CiRuler />,
                  title: "マルチサイズ対応",
                  desc: "6種類で1セットとなっており、これだけで国内外ほぼ全てのインプラントシステムに対応しています。カラーコード化されていてサイズの識別が簡単です。",
                },
                {
                  icon: <FaVirusSlash />,
                  title: "高品質素材と滅菌対応",
                  desc: "高強度・高耐食性のステンレス素材でオートクレーブ滅菌に対応。複数回の使用でも安定的な性能を発揮します。",
                },
                {
                  icon: <LuSmilePlus />,
                  title: "シンプルなワンステップ手技",
                  desc: "面倒な複数の器具の操作は必要ありません。手指による回転操作のワンスッテプで完結します。",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E3A8A]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Banner */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="relative bg-[#2563EB] rounded-3xl p-12 text-center text-white"
            >
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                資料請求・お問い合わせ
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                iRescueProの症例パンフレットを無料でお送りいたします。ご質問も気軽にお問い合わせください。
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                お問い合わせ
              </a>
            </motion.div>
          </div>
        </section>

        {/* Urgent Order Banner */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="relative bg-[#2563EB] rounded-3xl p-12 text-center text-white"
            >
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                すぐに製品が必要な方
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                iRescuePro（＋パンフレット）を至急お送りいたします（原則翌営業日発送）。
              </p>
              <a
                href="https://buy.stripe.com/fZu3cx9Y4a8S5zu7bm4ko01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                ご注文はここから
              </a>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50" id="benefits">
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
                導入メリット
              </div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">
                導入メリット
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                本製品の使用により、患者様とドクターに大きなメリットをもたらします
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "インプラントを温存できる",
                  desc: "本製品の使用により、インプラントを温存できる可能性が高まります。折れたスクリューだけを除去してインプはそのまま活かせるため、新たなインプラントを使用する必要がなくなります。",
                },
                {
                  title: "患者様の負担の軽減",
                  desc: "インプラント撤去・再埋入などの追加外科手術が不要となるケースが増え、患者様の肉体的負担を軽減できます。",
                },
                {
                  title: "治療時間を短縮できる",
                  desc: "施術時間を大幅短縮できます。難航すれば何回も通院が必要だった破折除去が、その日のうちに完了する可能性が高く、緊急時の治療がスムーズに進行します。",
                },
                {
                  title: "緊急事態への即時対応が可能",
                  desc: "インプラント治療中の想定外トラブルにも即座に対応できる体制が整います。クリニックに本製品を常備しておけば、ネジ破折が起きてもその場で対応できます。まさに「備えあれば憂いなし」です。",
                },
                {
                  title: "施術の安全性向上",
                  desc: "本製品を用いることで、より安全な処置が可能です。破折したスクリューに加工をくわえる力まかせの場合よりも遥かにリスクが低く、インプラントの内ネジを守りながら除去できるためトラブルを防ぎます。",
                },
                {
                  title: "専門性のアピール",
                  desc: "「インプラントネジ破折除去」という難易度の高い処置を可能にすることで、貴院の高度医療提供体制をアピールできます。他院との差別化につながり、インプラント治療に力を入れているクリニックとしてブランディング向上に寄与できます。",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50" id="cases">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">
                導入事例
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                全国の歯科医院・大学病院で高い評価と信頼を得ています
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "ケース1：スクリュー破折除去に成功しインプラント温存",
                  patient: "50代男性・上顎大臼歯部",
                  result:
                    "約2分でスクリュー摘出に成功。インプラント体は無傷で残り、新しいアバットメントを装着して補綴再装着できました。患者は追加手術を回避でき、大きな安心感を得ています。",
                },
                {
                  title: "ケース2：導入後の成功率向上",
                  patient: "インプラント専門クリニック",
                  result:
                    "本導入後1年間で破折スクリュー２症例全てにおいてインプラント体の保存に成功。破折スクリューの症例に初めて遭遇した副院長は、そばで３分ほどの簡単な操作でスクリューを除去できたのを見ていて驚いていました。",
                },
                {
                  title: "ケース3：緊急対応で即日問題解決",
                  patient: "上顎右側５番のインプラント",
                  result:
                    "“5年前に入れたインプラントが取れた”　とのことで患者が来院。本製品で即座に折れたネジの除去を完了。その場で、新しいアバットメントスクリューに交換してクラウンを装着することができ、患者さんのダメージを最小限に抑えることができました。",
                },
              ].map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-700">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <strong>症例：</strong>
                        {caseStudy.patient}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" id="faq">
          <div className="max-w-4xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">
                よくある質問
              </h2>
              <p className="text-lg text-gray-600">
                製品に関するよくあるご質問にお答えします
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "どのインプラントシステムに対応していますか？",
                  a: "本製品は汎用性が高く、国内外インプラントメーカーのインプラントに対応しています。iRescueProセットは様々なネジ径のアバットメントスクリューの破折面に適合します。他院で治療した種類のわからないインプラントにも即座に対応できます。",
                },
                {
                  q: "ネジが深い位置で折れてしまった場合でも使用できますか？",
                  a: "多くの場合使用可能です。折れたネジが少しでも露出していれば即座に除去が可能です。完全に沈んでいる場合でも、iRescuePro先端のスパイク機能によりスクリューを上方に移動させ、グリップ機能により除去することが可能です（特許技術）。ただし、内ネジの破損症例や強く固着している症例には適応となりません（全破折症例の数％）",
                },
                {
                  q: "インプラント体を傷つける危険はありませんか？",
                  a: "エンジンを使用しない手指による作業のためインプラント体を傷付けません。",
                },
                {
                  q: "手術時間はどれくらい短縮できますか？",
                  a: "ほとんどの症例において、2分から5分以内で除去可能です。超音波スケーラーにより内ネジに微小動揺を与えてから、除去する場合にはその分の時間（数分）が余分にかかります。",
                },
                {
                  q: "操作は簡単ですか？",
                  a: "とてもシンプルで簡単です。付属パンフレットの操作手順に従えば簡単に除去操作ができます。",
                },
                {
                  q: "IRescueProはどこの国で作っていますか？",
                  a: "設計から加工まで全て日本国内で行われています。Made in Japanならではの安全基準と精密加工技術で作られています。全てのiRescueProには品質管理のためのレーザーマーキング処理が施されています。",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 md:px-8 py-4 md:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span className="font-semibold text-slate-700">
                      Q{index + 1}. {faq.q}
                    </span>
                    <span className="ml-4 flex items-center justify-center w-8 h-8 srounded-full  text-gray-600 text-lg">
                      {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-7 pt-4">
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Case: Removal Gets Harder */}
        <section className="py-20 bg-white" id="common-case">
          <div className="max-w-4xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-[#1E3A8A] mb-6 font-bold">
                よくある「除去が難しくなってしまう」ケース
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                「最初は、よくあるスクリュー破折だと思っていました。」
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                超音波チップや探針で触れてみたものの、思ったように動かず、気がつけば破折片はインプラント内部へ。その結果、
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>操作時間は延び</li>
                <li>内ネジ損傷のリスクが高まり</li>
                <li>最終的にはインプラント撤去を検討する事態に――</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                「最初に選ぶ器具が違っていれば」
              </p>
              <p className="text-gray-600 leading-relaxed">
                そう感じた経験は、決して少なくありません。多くの除去トラブルは、技術不足ではなく「最初の選択」によって起こります。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Purchase Info Section */}
        <section className="py-20 bg-gray-50" id="purchase">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">
                購入案内
              </h2>
              <p className="text-lg text-gray-600">
                iRescueProのご購入に関する情報をご案内いたします。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-2 text-slate-700">
                  iRescuePro
                </h3>
                <p className="text-3xl font-bold text-blue-500 mb-2">
                  198,000円（税込）
                </p>
                <p className="text-gray-600 mb-2">
                  インプラント内破折スクリュー除去専用器具
                </p>
                <p className="text-gray-600 mb-4 font-medium">
                  破折スクリュー除去の&quot;ファーストコンタクト&quot;として
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>※本製品は繰り返し使用可能な器具です</li>
                  <li>※1症例のトラブル回避で十分に投資回収が可能です</li>
                  <li>
                    ※製造ロット・供給状況により、今後価格が変更される場合があります
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-slate-700">
                    資料請求・お問い合わせ
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    iRescueProの症例パンフレットを無料でお送りいたします。ご質問も気軽にお問い合わせください。
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    お問い合わせ
                  </a>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-700">
                    ご注文はここから
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    すぐに製品が必要な方。iRescuePro（＋パンフレット）を至急お送りいたします（原則翌営業日発送）。
                  </p>
                  <a
                    href="https://buy.stripe.com/fZu3cx9Y4a8S5zu7bm4ko01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    ご注文はここから
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Comparison Table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[600px] bg-white rounded-xl shadow-lg border border-gray-100 text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-4 px-4 font-semibold text-slate-700">
                      比較項目
                    </th>
                    <th className="py-4 px-4 font-semibold text-slate-700">
                      一般的なスクリュー除去器具
                    </th>
                    <th className="py-4 px-4 font-semibold text-[#1E3A8A]">
                      iRescuePro
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      想定されている使用タイミング
                    </td>
                    <td className="py-3 px-4">固着後・深部破折</td>
                    <td className="py-3 px-4">初期対応のファーストチョイス</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      操作手順
                    </td>
                    <td className="py-3 px-4">複雑・工程が多い</td>
                    <td className="py-3 px-4">シンプル・短時間</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      破折片への影響
                    </td>
                    <td className="py-3 px-4">押し込みリスクあり</td>
                    <td className="py-3 px-4">押し込まず把持・回転</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      インプラント内ネジへの影響
                    </td>
                    <td className="py-3 px-4">損傷リスクあり</td>
                    <td className="py-3 px-4">内ネジを温存</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      使用対象
                    </td>
                    <td className="py-3 px-4">特定メーカー向けが多い</td>
                    <td className="py-3 px-4">ほぼ全てのインプラントに対応</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-slate-700">
                      使用頻度
                    </td>
                    <td className="py-3 px-4">限定的</td>
                    <td className="py-3 px-4">
                      &quot;まず最初に使う&quot;べき器具
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700">
                      コンセプト
                    </td>
                    <td className="py-3 px-4">除去そのもの</td>
                    <td className="py-3 px-4">スピーディー・失敗回避</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="contact">
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 font-bold text-[#1E3A8A]">
                お問い合わせ・資料請求
              </h2>
              <p className="text-lg text-gray-600">
                製品に関するご質問、お見積り、資料請求など、お気軽にお問い合わせください
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">
                  ① お電話でのお問い合わせ
                </h4>
                <p className="font-bold text-lg text-[#1E3A8A]">03-6869-6046</p>
                <p className="text-sm text-gray-600 mt-1">
                  受付時間　平日10:00〜17:00
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">
                  ② メールでのお問い合わせ
                </h4>
                <p className="font-bold text-lg text-[#1E3A8A]">
                  customer@tokyo-ijapan.com
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  24時間受付（返信は営業時間）
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">
                  ③ 本社所在地
                </h4>
                <p className="text-sm text-[#1E3A8A]">
                  iJAPAN合同会社
                  <br />
                  〒105-0013 東京都港区浜松町２丁目２番15号
                  <br />
                  浜松町ダイヤビル２F
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-10 text-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons.png"
                alt="iJAPAN合同会社"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto mx-auto"
              />
            </Link>
          </div>
          <p className="text-gray-600">&copy; 2026 iJAPAN合同会社</p>
        </div>
      </footer>
    </div>
  );
}
