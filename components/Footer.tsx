const CONTACT = {
  tel: "03-6869-6046",
  email: "tokyo7.ijapan@gmail.com",
  address: "〒108-0013 東京都港区浜松町2丁目2番15号 浜松町ダイヤビル2F",
};

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* お問い合わせ - LPと連動 */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4 text-center">お問い合わせ</h3>
          <p className="text-center text-slate-300 text-sm mb-6">
            製品に関するご質問、お見積り、資料請求など、お気軽にご連絡ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
            <div>
              <p className="text-slate-400 mb-1">お電話</p>
              <a
                href={`tel:${CONTACT.tel.replace(/-/g, "")}`}
                className="text-white hover:text-blue-300 transition-colors"
              >
                {CONTACT.tel}
              </a>
            </div>
            <div>
              <p className="text-slate-400 mb-1">メール</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white hover:text-blue-300 transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p className="text-slate-400 mb-1">所在地</p>
              <p className="text-slate-200">{CONTACT.address}</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-600 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} iJAPAN LLC. All rights reserved.
          </p>
          <p className="mt-1">医療機器の研究・開発・製造・EC販売</p>
        </div>
      </div>
    </footer>
  );
}
