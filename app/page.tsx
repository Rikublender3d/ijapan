'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoRemove } from "react-icons/io5";
import { FiTool } from "react-icons/fi";
import { FaArrowsRotate } from "react-icons/fa6";
import { CiRuler } from "react-icons/ci";
import { FaVirusSlash } from "react-icons/fa";
import { LuSmilePlus } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Reusable animation wrapper component
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            setIsMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-[#1E3A8A]">iJapan</div>
            </div>
            <ul className={`nav-menu md:flex md:gap-8 list-none absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row p-5 md:p-0 shadow-lg md:shadow-none ${isMenuOpen ? 'flex' : 'hidden'}`}>
              <li><a href="#home" className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>ホーム</a></li>
              <li><a href="#problem" className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>課題</a></li>
              <li><a href="#product" className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>製品情報</a></li>
              <li><a href="#benefits" className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>メリット</a></li>
              <li><a href="#contact" className="text-gray-700 font-medium hover:text-[#4FD1C7] transition-colors duration-300 block py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>お問い合わせ</a></li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:inline-block bg-[#2563EB] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300">
                お問い合わせ
              </a>
              <button
                className="mobile-menu-toggle md:hidden bg-transparent border-none cursor-pointer p-3 hover:bg-gray-100 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="hamburger w-8 h-6 flex flex-col justify-between">
                  <span className={`hamburger-line block w-full h-1 bg-gray-700 transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`hamburger-line block w-full h-1 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`hamburger-line block w-full h-1 bg-gray-700 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-white py-24 mt-20" id="home">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[#4FD1C7] text-sm font-semibold mb-4">iJapan株式会社</div>
                <h1 className="text-5xl md:text-5xl mb-6 font-bold text-[#1E3A8A] leading-tight">信頼できる<br />インプラント除去治具</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  折れたインプラントネジをわずか数分で安全に除去。<br />インプラントのネジ破折でお困りですか？簡単・安全に除去できます。<br />高度な設計で施術時間を大幅短縮。平均10-15分で完了し、再手術不要で患者さんへの負担を軽減します。
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                <div className="relative w-full h-96 rounded-3xl overflow-hidden">
                  <Image src="/dentist.png" alt="iRescuePro インプラント除去治具キット" fill className="object-cover object-top rounded-3xl" priority />
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
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
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24時間対応</h3>
                <p className="text-blue-100">緊急時にも迅速に対応いたします。お問い合わせは24時間受け付けております。</p>
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
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">15年以上の実績</h3>
                <p className="text-blue-100">長年の臨床経験に基づいて開発された製品であり、全国の歯科医院で採用実績があります。</p>
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
                <h3 className="text-xl font-bold mb-2">高品質なケア</h3>
                <p className="text-blue-100">臨床モニター成功率98%の実績。インプラント体を傷つけずに安全に除去できます。</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white" id="problem">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gray-200 rounded-3xl overflow-hidden">
                  <Image src="/neji.png" alt="iRescuePro インプラント除去治具キット" fill className="object-cover object-top rounded-3xl" priority />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-[#4FD1C7] text-sm font-semibold mb-4">課題について</div>
                <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold leading-tight">インプラントネジ破折の<br />臨床的課題</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  インプラント治療中または経過中にアバットメントスクリューが破折すると、治療に重大な支障をきたします。<br />また、折れたスクリューの除去は極めて難しく、適切な器具なしに超音波スケーラー等で除去を試みると、インプラント内部を傷つけてしまうリスクがあります。<br />内部に残留した破折ネジを放置すると、細菌感染やインプラント周囲炎の原因にもなり、最悪埋入したインプラント本体を撤去せざるを得なくなるケースもあります。
                </p>
                <a href="#product" className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  解決策を見る
                </a>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold mb-4 mt-2 text-[#1E3A8A]">発生頻度</h3>
                <p className="text-gray-600 mb-4">インプラントのネジ緩みは比較的頻繁（6～7%）に起こる一方、ネジ自体の破折も無視できません。研究報告ではアバットメントスクリューの破折は約2%とされています。</p>
                <p className="text-gray-600">しかし、完全に避けることは難しく、誰にでも起こり得ます。</p>
              </div>

              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold mb-4 mt-2 text-[#1E3A8A]">従来の除去の難しさ</h3>
                <p className="text-gray-600 mb-4">折れたスクリューの除去は極めて難しく、適切な器具なしに超音波スケーラー等で除去を試みると、インプラント内部を傷つけてしまうリスクがあります。</p>
                <p className="text-gray-600">肉眼で直径わずか数ミリの部位を操作するのは難易度が高く、術者に大きな負担がかかります。</p>
              </div>

              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <h3 className="text-xl font-semibold mb-4 mt-2 text-[#1E3A8A]">放置すればインプラント喪失につながる</h3>
                <p className="text-gray-600 mb-4">内部に残留した破折ネジを放置すると、細菌感染やインプラント周囲炎の原因にもなり、最悪埋入したインプラント本体を撤去せざるを得なくなるケースもあります。</p>
                <p className="text-gray-600">これは患者にとって再手術等が必要になることを意味し、金銭的負担も増えてしまいます。</p>

              </div>

              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold mb-4 mt-2 text-[#1E3A8A]">患者・術者双方のストレス</h3>
                <p className="text-gray-600 mb-4">ネジ破折は患者にも不安と痛みを与えますし、歯科医師にとっても「どう対処するか」というプレッシャーになります。</p>
                <p className="text-gray-600">適切なツールがない状況で無理に除去を試みれば、治療失敗や信頼低下にもつながりかねません。</p>
              </div>
            </div>
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
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">製品情報</div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">製品概要</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                折れたインプラントネジを安全かつ迅速に摘出する医療器具
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-gray-200">
                  <Image src="/product.png" alt="iRescuePro インプラント除去治具キット" fill className="object-cover rounded-3xl padding-xl" priority />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-[#1E3A8A] mb-6">iRescuePro（アイレスキュープロ）</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  インプラント内で破断したアバットメントスクリューを安全かつ迅速に除去する医療器具です。井汲憲治CEO歯科医師が長年の臨床経験をもとに開発した、現場の声に応えた製品となっております。
                </p>

                <div className="bg-white p-6 rounded-2xl mb-6 border border-gray-100">
                  <h4 className="font-semibold mb-3 text-[#1E3A8A]">基本構成</h4>
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
                  <h4 className="font-semibold mb-3 text-[#1E3A8A]">適応ケース</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>インプラント体内部で破折したアバットメントスクリューの除去</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2563EB] mr-2">▶</span>
                      <span>アバットメント自体の破折やネジ山のなめり等、関連トラブルにも対応</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">汎用性</h3>
                <p className="text-gray-600">国内外主要インプラントシステムへの対応をしております。多くのメーカーのネジ規格に適合するアダプターを備えています。</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">承認・認証</h3>
                <p className="text-gray-600">一般医療機器として認証取得済み。ISO 13485認証取得により、品質管理体制が確立されています。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">製品の特長</div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">製品の特長</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                高度な設計と優れた操作性により、経験の浅い術者でも短時間で正確な除去を実現
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <IoRemove />,
                  title: 'インプラントを傷つけない除去',
                  desc: 'インプラント体内部のネジ溝を傷つけずに折れたスクリューのみを摘出可能。高度に設計された器具により、インプラント本体を再利用できる状態で残せます。'
                },
                {
                  icon: <FiTool />,
                  title: '高精度ドリルと専用チップ',
                  desc: '折れたネジに新たな溝や下穴を作る専用ドリルは高い切削力と耐久性を備えています。滑りにくい特殊コーティングや刃先形状により、硬いチタン製のネジ片にも確実に食い込みます。'
                },
                {
                  icon: <FaArrowsRotate style={{ transform: 'scaleX(-1)' }} />,
                  title: '逆回転によるスクリュー緩除',
                  desc: 'ドリルおよびエキストラクターは反時計回り（逆回転）で操作する設計になっています。これによりネジ残存片を緩めながら徐々に回収でき、固着したスクリューでも無理な力をかけず除去が可能です。'
                },
                {
                  icon: <CiRuler />,
                  title: 'マルチサイズ対応',
                  desc: '複数径のツールを同梱し、様々なサイズ・種類のインプラントスクリュー破折に対応。細径（M1.6相当）から太径（M2.0相当）まで幅広い症例に対処できます。'
                },
                {
                  icon: <FaVirusSlash />,
                  title: '高品質素材と滅菌対応',
                  desc: '全ての器具は高強度・高耐食性ステンレス製で、オートクレーブ滅菌に対応。繰り返し使用による摩耗に強く、錆にもなりにくいため長期にわたり清潔かつ安定した性能を発揮します。'
                },
                {
                  icon: <LuSmilePlus />,
                  title: 'シンプルな2ステップ手技',
                  desc: '複雑な操作は不要で2ステップの簡単手順で除去できます。まず専用ドリルでネジ片に溝を付与し、次にエキストラクターを差し込んでゆっくり回転除去するだけ。'
                },
                {
                  icon: <FaEye />,
                  title: '視野確保しやすいデザイン',
                  desc: '器具はマイクロスコープや拡大鏡下で操作しやすいよう細身な形状になっています。視認性を高めるマーキングも施されており、狭い部位での作業でも術野を遮らず確実な操作が行えます。'
                },
                {
                  icon: <FaShieldAlt />,
                  title: 'ダメージを最小限に抑える',
                  desc: 'インプラント体や周囲骨への負荷を抑えるため、トルクコントロール機構やストッパー機能を搭載。専用のハンドルを用いることで、過剰な力が加わらない安全設計になっています。'
                },
                {
                  icon: <FaMicroscope />,
                  title: '多用途なレスキュー器具',
                  desc: 'スクリュー破折以外の関連トラブルにも対応可能。アバットメント自体の破折、スクリューヘッドのなめり、ドライバー先端の破損など、様々な失敗ケースでも活躍します。'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E3A8A]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">今すぐ資料請求・お問い合わせ</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                製品に関するご質問、お見積り、資料請求など、お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                お問い合わせ
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
              <div className="text-[#4FD1C7] text-sm font-semibold mb-4">導入メリット</div>
              <h2 className="text-4xl md:text-5xl text-[#1E3A8A] mb-6 font-bold">導入メリット</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                本製品の使用により、患者様と歯科医師の双方に大きなメリットをもたらします
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'インプラント体を温存できる',
                  desc: '本製品の使用によりインプラント本体を温存できる可能性があります。折れたネジだけを除去してフィクスチャー（インプラント体）はそのまま活かせるため、新たにインプラントを埋め込む必要がなくなります。'
                },
                {
                  title: '患者様の負担の軽減',
                  desc: 'インプラント撤去・再埋入などの追加外科手術が不要となるケースが増え、患者様の肉体的負担を軽減できます。'
                },
                {
                  title: '治療時間を短縮できる',
                  desc: '施術時間を大幅短縮できます。難航すれば何回も通院が必要だった破折除去が、その日のうちに完了する可能性もあり、全体の治療計画がスムーズに進行します。'
                },
                {
                  title: '緊急事態への即時対応が可能',
                  desc: 'インプラント治療中の想定外トラブルにも即座に対応できる体制が整います。クリニックに本製品を常備しておけば、ネジ破折が起きてもその場で対応できます。'
                },
                {
                  title: '施術の安全性向上',
                  desc: '本製品を用いることで術者による、より安全な処置が可能です。力任せによる場合よりも遥かにリスクが低く、インプラント周囲組織を守りながら確実に除去できるため、トラブルを防ぎます。'
                },
                {
                  title: '専門性のアピール',
                  desc: '「インプラントネジ破折除去」という難易度の高い処置を可能にすることで、貴院の高度医療提供体制をアピールできます。他院との差別化につながり、インプラント治療に力を入れているクリニックとしてブランディング向上に寄与できます。'
                }
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
                  <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1E40AF] transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                導入相談・資料請求はこちら
              </a>
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
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">導入事例</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                全国の歯科医院・大学病院で高い評価と信頼を得ています
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: 'ケース1：スクリュー破折除去に成功しインプラント温存',
                  patient: '50代男性・上顎大臼歯部',
                  result: '約10分でスクリュー摘出に成功。インプラント体は無傷で残り、新しいアバットメントを装着して補綴再装着できました。患者は追加手術を回避でき、大きな安心感を得ています。'
                },
                {
                  title: 'ケース2：導入後の成功率向上',
                  patient: 'インプラント専門クリニック',
                  result: '本製品導入後1年間で破折スクリュー5症例すべてにおいてインプラント体の保存に成功。院長は「従来は対応できなかった難症例に対処できるようになり、臨床の幅が広がった」と評価しています。'
                },
                {
                  title: 'ケース3：緊急対応で即日問題解決',
                  patient: '下顎ブリッジ支台のインプラント',
                  result: '術後にネジ破折が判明し、患者は噛めない状態に。本製品により当日中に折れたネジの除去を完了。その場で仮のネジを装着し咬合を回復させ、患者の生活への支障を最小限に抑えました。'
                }
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
                      <h3 className="text-xl font-semibold mb-3 text-slate-700">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-2"><strong>症例：</strong>{caseStudy.patient}</p>
                      <p className="text-gray-600 leading-relaxed">{caseStudy.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-20" id="ceo">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">開発者・CEO</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-12 items-start mt-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="relative w-full h-80 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 overflow-hidden"
              >
                井汲憲治 CEO
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#4FD1C7] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">+</span>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3"
              >
                <h3 className="text-3xl font-bold text-slate-700 mb-2">井汲 憲治（いくみ けんじ）</h3>
                <p className="text-gray-600 text-lg mb-6">代表取締役CEO・歯科医師・歯学博士</p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  私は現役の歯科医師として長年インプラント治療に携わってきました。<br />その中で、既存の医療機器では解決できない課題に数多く直面し、「現場が本当に必要としている医療機器を作りたい」という強い想いからiJapan株式会社を設立いたしました。
                </p>

                <h4 className="text-lg font-semibold mb-4 text-slate-700">主な経歴・資格</h4>
                <ul className="list-none my-5 space-y-2 mb-8">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">歯学博士</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">インプラント治療専門医</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">日本インプラント臨床研究会 会長</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">ICOI（国際インプラント学会）認定医</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">昭和大学でのインプラント研究</span></li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">▶</span><span className="text-gray-600">20年以上の臨床経験</span></li>
                </ul>

                <div className="bg-blue-50 p-8 rounded-xl border-blue-500">
                  <h4 className="text-lg font-semibold mb-4 text-slate-700">代表メッセージ</h4>
                  <p className="mb-4 text-gray-700  leading-relaxed">
                    「医療現場の声を形にする」ことが私たちの使命です。一人でも多くの患者様に、より良い歯科医療を提供できるよう、現場のニーズに応える製品開発を続けてまいります。
                  </p>
                  <p className="text-gray-700  leading-relaxed">
                    私たちの製品が、全国の歯科医療従事者の皆様のお役に立ち、ひいては患者様の笑顔につながることを心より願っております。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50" id="testimonials">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">専門家の声・ユーザーの声</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                実際にご使用いただいている歯科医師の皆様からの評価
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: '本ツールは画期的で、安全かつ確実にスクリューを除去できる。インプラント治療の予後管理に必携だ',
                  author: '○○大学歯学部インプラント科 教授',
                  name: '△△先生'
                },
                {
                  quote: '導入後はスクリュー破折への不安が激減しました。スタッフ全員が扱える簡便さもありがたいです',
                  author: '○○歯科医院 院長',
                  name: '◯◯先生'
                },
                {
                  quote: '他の方法では除去できなかった折れネジを本キットで無傷で取り出せました。患者様にインプラントを残せて本当によかった',
                  author: '△△市 △△歯科',
                  name: '◯◯先生'
                },
                {
                  quote: '臨床モニター20施設での検証において、折れネジ摘出成功率98%を記録。参加歯科医師の95%が「有用性が高い」と回答',
                  author: '臨床モニター結果',
                  name: ''
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="text-4xl text-blue-500 mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-700">{testimonial.author}</p>
                    {testimonial.name && <p className="text-gray-600">{testimonial.name}</p>}
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
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">よくある質問</h2>
              <p className="text-lg text-gray-600">
                製品に関するよくあるご質問にお答えします
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: 'どのインプラントシステムに対応していますか？',
                  a: '本製品は汎用性が高く、国内外主要メーカーのインプラントに対応しています。付属のアダプターにより様々なインプラントのネジ径・ネジ山形状に適合します。対応メーカーリストは取扱説明書および当社サイトに掲載しておりますのでご確認ください。'
                },
                {
                  q: 'ネジが深い位置で折れてしまった場合でも使用できますか？',
                  a: '多くの場合使用可能です。折れたネジがわずかでも露出していれば専用エキストラクターで把持できますし、完全に沈んでいる場合でも専用ドリルで新たな溝を作り除去できます。ただし骨と一体化しているような極端なケースでは難しい場合もあり、その際は別途ご相談ください。'
                },
                {
                  q: 'インプラント体を傷つける危険はありませんか？',
                  a: '適切な手順で使用すればインプラントのネジ溝を傷付けずに除去可能な設計です。ドリルにストッパーが付いており、深さをコントロールできます。ただし力のかけすぎや誤使用は危険ですので、事前に添付文書を熟読し、必要に応じてトレーニングを受けてください。'
                },
                {
                  q: '手術時間はどれくらい短縮できますか？',
                  a: '症例によりますが、従来法（超音波スケーラーでの除去等）に比べて大幅に時間を短縮できるケースが多いです。平均的な破折ネジであれば、本製品使用により除去時間はおよそ10～15分程度で完了するとのデータがあります（従来は30分以上かかる場合も）。'
                },
                {
                  q: '不器用でも使いこなせますか？',
                  a: '基本的なインプラント治療の知識と手先の器用さがあれば特別な技術は不要です。操作自体はシンプルですが、精密作業のため事前練習をお勧めします。当社提供のデモ動画やトレーニング用モデルをご活用いただくと、安全に習熟できます。'
                },
                {
                  q: '購入後のトレーニングやサポートは受けられますか？',
                  a: 'はい、ご安心ください。当社では購入クリニック向けに操作トレーニング動画をオンライン配信しています。またご希望に応じてウェビナー形式のライブ講習会や、メーカー担当者による訪問指導（エリア限定）も実施しております。技術的なお問い合わせには専門スタッフが電話・メールで随時対応するサポート体制を整えています。'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
                >
                  <h3 className="text-xl font-semibold mb-3 text-slate-700">Q{index + 1}. {faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl text-slate-700 mb-4 font-bold">購入案内</h2>
              <p className="text-lg text-gray-600">
                製品のご購入に関する情報をご案内いたします
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">価格情報</h3>
                <p className="text-3xl font-bold text-blue-500 mb-4">¥XXX,XXX<span className="text-lg text-gray-600">（税別）</span></p>
                <p className="text-gray-600 mb-4">キット一式（専用ドリル、エキストラクター、ハンドル、各種アダプター含む）</p>
                <p className="text-sm text-gray-500">※初回購入特典として無料オンライン講習受講可</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">購入ルート</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>当社公式オンラインショップで24時間購入可能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>歯科ディーラー経由でのお取り寄せ可</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>電話・FAX注文の場合は所定の発注書をご利用ください</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">配送・納期</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>全国送料無料でお届け</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>平日正午までの注文は当日発送</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>通常2～3日でお手元に届きます</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-700">支払い方法</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>クレジットカード（主要ブランド対応）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>銀行振込（前払い）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▶</span>
                    <span>代引き（現金着払い）</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <a href="#contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
                お問い合わせ・資料請求はこちら
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white" id="contact">
          <div className="max-w-4xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl mb-4 font-bold text-[#1E3A8A]">お問い合わせ・資料請求</h2>
              <p className="text-lg text-gray-600">
                製品に関するご質問、お見積り、資料請求など、お気軽にお問い合わせください
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">📞 お電話でのお問い合わせ</h4>
                <p className="font-bold text-lg text-[#1E3A8A]">0120-XXX-XXX</p>
                <p className="text-sm text-gray-600">受付時間：平日 9:00-18:00</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">📧 メールでのお問い合わせ</h4>
                <p className="font-bold text-lg text-[#1E3A8A]">info@ijapan.co.jp</p>
                <p className="text-sm text-gray-600">24時間受付（返信は営業時間内）</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="mb-2 text-[#1E3A8A] font-semibold">🏢 本社所在地</h4>
                <p className="text-sm text-[#1E3A8A]">〒XXX-XXXX<br />東京都XXX区XXXXXXX</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="bg-white py-10 text-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[#1E3A8A]">&copy; 2025 iJapan株式会社. All rights reserved.</p>
          <p className="mt-2 text-gray-600">歯科医療機器の開発・製造・販売</p>
        </div>
      </motion.footer>
    </div >
  );
}
