import Header from "../components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4 animate-fadeIn" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
    <div className="flex-shrink-0 mt-1.5">
      <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="text-lg text-foreground font-semibold leading-relaxed">
      {children}
    </div>
  </div>
);

const SectionCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
    <div className="flex items-center gap-6 mb-8">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-purple-600 text-white shadow-lg">
        {icon}
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-8">
      {children}
    </div>
  </section>
);

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 text-white"
        style={{
          backgroundImage: 'url(/images/hcm2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-slideInUp" style={{ animation: 'slideInUp 1.2s ease-out 0.5s both' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8">
              Phần II
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tư Tưởng Hồ Chí Minh Về CNXH
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Khám phá tư tưởng HCM về chủ nghĩa xã hội và xây dựng nền tảng CNXH ở Việt Nam
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">

          {/* Section A */}
          <SectionCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            }
            title="1. Tư Tưởng HCM Về CNXH"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                A. Quan Niệm Của HCM Về CNXH
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">CN xã hội là ở giai đoạn đầu của CN công sản</h4>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-6">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">Nội dung</th>
                      <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">Chủ nghĩa xã hội</th>
                      <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">Chủ nghĩa cộng sản</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-5 text-lg font-semibold text-primary">Giống nhau</td>
                      <td className="px-6 py-5 text-gray-700" colSpan={2}>
                        Sức sản xuất phát triển cao, tư liệu sản xuất thuộc sở hữu chung, không còn áp bức bóc lột con người.
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-5 text-lg font-semibold text-primary">Khác nhau</td>
                      <td className="px-6 py-5 text-gray-700">Vẫn còn tồn tại một số vết tích của xã hội cũ.</td>
                      <td className="px-6 py-5 text-gray-700">Hoàn toàn không còn bất kỳ vết tích nào của xã hội cũ.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                B. Tiến Lên CNXH Là Tất Yếu Khách Quan
              </h3>
              <div className="space-y-3">
                <BulletPoint>Theo Hồ Chí Minh, tiến lên CNXH là quá trình tất yếu, tuân theo các quy luật khách quan của sản xuất.</BulletPoint>
                <BulletPoint>Tùy điều kiện lịch sử, mỗi quốc gia có con đường và bước đi khác nhau: các nước tư bản phát triển đi thẳng lên CNXH; các nước chưa phát triển tư bản có thể tiến lên CNXH sau khi đánh đổ đế quốc và phong kiến.</BulletPoint>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                C. Một Số Đặc Trưng Cơ Bản Của Xã Hội CNXH
              </h3>
              <div className="space-y-3">
                <BulletPoint>Xã hội dân chủ, nhân dân là chủ thể làm chủ.</BulletPoint>
                <BulletPoint>Kinh tế phát triển, tư liệu sản xuất chủ yếu thuộc sở hữu chung, bảo đảm lợi ích xã hội.</BulletPoint>
                <BulletPoint>Xây dựng CNXH là sự nghiệp của nhân dân dưới sự lãnh đạo của Đảng Cộng sản.</BulletPoint>
              </div>
            </div>
          </SectionCard>

          {/* Section B */}
          <SectionCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="2. Tư Tưởng HCM Về Xây Dựng CNXH Ở VN"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                A. Tính Chất, Đặc Điểm Và Nhiệm Vụ Của Thời Kỳ Quá Độ
              </h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="flex gap-3 mb-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-800"><strong>Tính chất:</strong> Thời kỳ cải biến xã hội sâu sắc, phức tạp, lâu dài; tiến lên CNXH phải từng bước, không thể nóng vội.</span>
                  </div>
                  <div className="flex gap-3 mb-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-800"><strong>Đặc điểm:</strong> Xuất phát từ nền nông nghiệp lạc hậu, đi thẳng lên CNXH, không qua giai đoạn tư bản chủ nghĩa.</span>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-800"><strong>Nhiệm vụ:</strong> Xóa bỏ tàn tích xã hội cũ, xây dựng các yếu tố mới trên mọi lĩnh vực (chính trị, kinh tế, văn hóa, xã hội).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                B. Nguyên Tắc Xây Dựng CNXH Trong Thời Kỳ Quá Độ
              </h3>
              <div className="space-y-3">
                <BulletPoint>Kiên định chủ nghĩa Mác – Lênin, độc lập dân tộc gắn với CNXH.</BulletPoint>
                <BulletPoint>Tăng cường đoàn kết quốc tế, gắn cách mạng Việt Nam với phong trào tiến bộ thế giới.</BulletPoint>
                <BulletPoint>Vận dụng CNXH sáng tạo, phù hợp điều kiện Việt Nam, tránh giáo điều.</BulletPoint>
                <BulletPoint>Kết hợp xây dựng với đấu tranh để bảo vệ và phát triển sự nghiệp cách mạng.</BulletPoint>
              </div>
            </div>
          </SectionCard>

          {/* Navigation Button */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.5s both' }}>
            <Link
              to="/content2"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Trang tiếp theo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-600 text-sm font-medium">
            © 2024 Tư Tưởng Hồ Chí Minh • Độc lập dân tộc gắn liền với chủ nghĩa xã hội
          </p>
        </div>
      </footer>

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
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}