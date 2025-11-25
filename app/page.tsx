import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full p-3 bg-white box-shadow-ls flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="IJapan LPサイト" width={50} height={50} />
          <h1 className="text-3xl font-semi-bold text-[#000]">
            IJapan
          </h1>
        </div>
        <nav className="gap-3">
          <ul className="flex gap-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-full">
        <section className="relative h-[100vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/sample.jpg"
              alt="IJapan LPサイト"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-full md:py-6 py-3 flex flex-col justify-center  items-center text-white text-center px-4 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold md:mb-6 mb-3 leading-tight">
              IJapan
            </h1>
            <p className="text-lg md:text-xl md:mb-8 mb-4 max-w-2xl leading-relaxed opacity-90">
              インプラントのネジ破折でお困りですか？<br />
              Iresqueなら簡単・安全に除去できます
            </p>
          </div>
        </section>
        <section className="py-16 px-4 bg-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">
              こんなお悩みありませんか？
            </h2>
            <div className="space-y-6">
              {[
                { title: "インプラントのネジ破折：治療が進められない", desc: "アバットメントスクリューが破折すると上部構造を固定できず、治療計画が中断します。早急な対応が必要です。" },
                { title: "発生頻度が無視できない", desc: "ネジ緩みは6〜7%、破折も報告で約2%とされます。誰にでも起こり得る問題です（臨床データで説明可能）。" },
                { title: "除去が極めて難しい", desc: "折れたスクリューの除去は特殊器具や熟練技術を要し、フリーハンドでの除去はインプラント損傷のリスクを高めます。" },
                { title: "放置でインプラント喪失の可能性", desc: "残留した破折ネジは感染や周囲炎を招き、最悪インプラント撤去や再手術が必要になります。時間的・金銭的負担が増大します。" },
                { title: "患者と術者のストレス増", desc: "患者の不安と術者のプレッシャーが増し、無理な処置は治療失敗や信頼低下につながる恐れがあります。" },
                { title: "既存器具の汎用性不足", desc: "メーカー製の除去器具はあるものの、汎用性や簡便性が不足し、緊急時に医院で即時対応しづらい場合があります。" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md ">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 text-blue-600">✓</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-700">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700">
              iJapan スクリューリムーバーキットについて
            </h2>
          </div>
        </section>
      </main>

    </div>
  );
}
