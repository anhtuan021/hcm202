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
  <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
    <div className="flex items-center gap-6 mb-8">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-purple-600 text-white shadow-lg">
        {icon}
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

export default function Content2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white"
        style={{
          backgroundImage: 'url(/images/hcm3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-slideInUp" style={{ animation: 'slideInUp 1.2s ease-out 0.5s both' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8">
              Phần III - IV
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Quan Hệ Độc Lập Dân Tộc Và CNXH
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Khám phá mối liên hệ sâu sắc giữa độc lập dân tộc và chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">

          {/* Section III */}
          <SectionCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            }
            title="III. Tư Tưởng HCM Về Mối Quan Hệ Độc Lập Dân Tộc Và CNXH"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                1. Độc lập dân tộc là tiền đề để tiến lên CNXH
              </h3>
              <div className="space-y-3 pl-0">
                <BulletPoint>Mục tiêu trước mắt của cách mạng Việt Nam là giải phóng dân tộc, giành độc lập.</BulletPoint>
                <BulletPoint>Giải phóng dân tộc là điều kiện để tiến lên CNXH và CNCS.</BulletPoint>
                <BulletPoint>Độc lập dân tộc gắn với nội dung dân tộc và dân chủ, hàm chứa định hướng CNXH.</BulletPoint>
                <BulletPoint>Cách mạng giải phóng dân tộc Việt Nam đi theo con đường cách mạng vô sản, mang bản chất và định hướng xã hội chủ nghĩa.</BulletPoint>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                2. CNXH là điều kiện bảo đảm độc lập dân tộc vững chắc
              </h3>
              <div className="space-y-3 pl-0">
                <BulletPoint>CNXH, CNCS là con đường giải phóng triệt để dân tộc và người lao động.</BulletPoint>
                <BulletPoint>CNXH xây dựng xã hội công bằng, bình đẳng, không áp bức, bóc lột.</BulletPoint>
                <BulletPoint>Tạo nền tảng kinh tế, văn hóa, đạo đức phát triển, bảo vệ độc lập và thúc đẩy đất nước.</BulletPoint>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                3. Điều kiện bảo đảm độc lập dân tộc gắn liền với CNXH
              </h3>
              <div className="space-y-3 pl-0">
                <BulletPoint>Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản.</BulletPoint>
                <BulletPoint>Củng cố khối đại đoàn kết toàn dân, nền tảng là liên minh công – nông.</BulletPoint>
                <BulletPoint>Đoàn kết, gắn bó chặt chẽ với cách mạng thế giới.</BulletPoint>
              </div>
            </div>
          </SectionCard>

          {/* Section IV */}
          <SectionCard
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="IV. Vận Dụng Tư Tưởng HCM Giai Đoạn Hiện Nay"
          >
            <div className="space-y-3 pl-0">
              <BulletPoint>Kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội theo con đường Hồ Chí Minh đã xác định.</BulletPoint>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-4">
                <h4 className="font-semibold text-blue-800 mb-3">Phát huy dân chủ xã hội chủ nghĩa:</h4>
                <div className="space-y-2 ml-2">
                  <BulletPoint>Thực hiện đầy đủ quyền làm chủ của nhân dân.</BulletPoint>
                  <BulletPoint>Hoàn thiện pháp luật, bảo đảm quyền con người.</BulletPoint>
                  <BulletPoint>Tăng cường pháp chế, đề cao trách nhiệm công dân và đạo đức xã hội.</BulletPoint>
                </div>
              </div>

              <BulletPoint>Củng cố, nâng cao hiệu lực và hiệu quả hoạt động của toàn bộ hệ thống chính trị để bảo đảm dân chủ được thực hiện thực chất.</BulletPoint>
              
              <BulletPoint>Đẩy mạnh đấu tranh phòng, chống suy thoái về tư tưởng chính trị, đạo đức, lối sống; ngăn chặn "tự diễn biến", "tự chuyển hóa" gắn với xây dựng, chỉnh đốn Đảng.</BulletPoint>
            </div>
          </SectionCard>

          {/* Navigation Button */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.5s both' }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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