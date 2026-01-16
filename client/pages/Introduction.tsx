import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white"
        style={{
          backgroundImage: 'url(/images/hcm1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-slideInUp" style={{ animation: 'slideInUp 1.2s ease-out 0.5s both' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8">
              Nhóm 4
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tư Tưởng Hồ Chí Minh Về Độc Lập Dân Tộc và CNXH
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Khám phá di sản tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội — con đường dẫn đến tự do và hạnh phúc cho toàn dân.
            </p>
            <div className="mt-10">
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">

          {/* Section I */}
          <section className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">I. Tư Tưởng HCM về Độc Lập Dân Tộc</h2>
                <p className="text-lg text-gray-600 mt-1">Khám phá nền tảng tư tưởng về quyền dân tộc</p>
              </div>
            </div>

            <div className="space-y-12">
              {/* 1. Vấn đề độc lập dân tộc */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">1. Vấn đề độc lập dân tộc</h3>

                {/* A. Card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 animate-fadeInLeft" style={{ animation: 'fadeInLeft 1s ease-out 0.4s both' }}>
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">A. Độc lập, tự do là quyền thiêng liêng của mọi dân tộc</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Năm 1919, Hồ Chí Minh nêu yêu sách đòi quyền bình đẳng, tự do cho dân tộc Việt Nam, đặt nền móng tư tưởng về quyền dân tộc.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}>
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Người tiếp thu và phát triển tư tưởng nhân quyền tiến bộ của Cách mạng Mỹ và Pháp.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 1s both' }}>
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Năm 1945, Người khẳng định quyền độc lập, tự do của dân tộc Việt Nam; tư tưởng này xuyên suốt toàn bộ hoạt động cách mạng của Người.</span>
                    </li>
                  </ul>
                </div>

                {/* B. Card */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 animate-fadeInRight" style={{ animation: 'fadeInRight 1s ease-out 0.4s both' }}>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">B. Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Hồ Chí Minh tiếp thu các tư tưởng tiến bộ về tự do, bình đẳng của nhân loại.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}>
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Trong Chánh cương vắn tắt của Đảng, Người xác định mục tiêu cách mạng là xóa bỏ áp bức, bóc lột, bảo đảm quyền lợi và đời sống của nhân dân.</span>
                    </li>
                  </ul>
                </div>

                {/* C. Card */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 animate-fadeInLeft" style={{ animation: 'fadeInLeft 1s ease-out 0.4s both' }}>
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">C. Độc lập dân tộc phải thật sự, hoàn toàn và triệt để</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Độc lập dân tộc phải bảo đảm chủ quyền và quyền tự quyết trong đối nội, đối ngoại.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}>
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Độc lập được thực hiện toàn diện trên các lĩnh vực chính trị, kinh tế, văn hóa, xã hội.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section II */}
          <section className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">II. Về Cách Mạng Giải Phóng Dân Tộc</h2>
                <p className="text-lg text-gray-600 mt-1">Con đường cách mạng vô sản và vai trò lãnh đạo của Đảng</p>
              </div>
            </div>

            <div className="space-y-12">
              {/* A. Table Modernized */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">A. CM giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản</h3>
                <div className="overflow-hidden rounded-2xl border border-gray-200 animate-fadeInLeft" style={{ animation: 'fadeInLeft 1s ease-out 0.4s both' }}>
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">Quan điểm</th>
                        <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">Thứ tự con đường cách mạng</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-blue-50 transition-colors animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
                        <td className="px-6 py-4 font-semibold text-blue-700">Mác & Ăngghen</td>
                        <td className="px-6 py-4 text-gray-700">Giải phóng giai cấp → Giải phóng dân tộc → Giải phóng xã hội → Giải phóng con người</td>
                      </tr>
                      <tr className="hover:bg-green-50 transition-colors animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}>
                        <td className="px-6 py-4 font-semibold text-green-700">Hồ Chí Minh</td>
                        <td className="px-6 py-4 text-gray-700">Giải phóng dân tộc → Giải phóng xã hội → Giải phóng giai cấp → Giải phóng con người</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 1s both' }}>
                        <td className="px-6 py-4 font-semibold text-purple-700">Quốc tế Cộng sản</td>
                        <td className="px-6 py-4 text-gray-700">Chống đế quốc và chống phong kiến phải được thực hiện đồng thời.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B. Card */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">B. Cách mạng giải phóng dân tộc ở Việt Nam phải do Đảng Cộng sản lãnh đạo</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 animate-fadeInRight" style={{ animation: 'fadeInRight 1s ease-out 0.4s both' }}>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.6s both' }}>
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Đảng Cộng sản là nhân tố quyết định để giai cấp công nhân hoàn thành sứ mệnh lịch sử.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}>
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Hồ Chí Minh khẳng định: "trước hết phải có Đảng cách mệnh", Đảng vững thì cách mạng mới thành công.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out 1s both' }}>
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Đảng vừa mang bản chất giai cấp công nhân, vừa là Đảng của nhân dân lao động và dân tộc Việt Nam.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Kết Luận</h3>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Tư tưởng Hồ Chí Minh về độc lập dân tộc luôn gắn liền với quyền lợi và hạnh phúc của nhân dân; phương hướng cách mạng và đoàn kết toàn dân là những chìa khóa dẫn tới thành công.
            </p>
          </section>

          {/* Footer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.5s both' }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                to="/content"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Trang tiếp theo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-sm text-gray-500">© 2024 Tư Tưởng Hồ Chí Minh - Nhóm 4</p>
            </div>
          </div>
        </div>
      </main>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}