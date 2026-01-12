import Header from "../components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className="w-2 h-2 rounded-full bg-secondary" />
    </div>
    <div className="text-sm sm:text-xl text-foreground font-semibold leading-relaxed">
      {children}
    </div>
  </div>
);

export default function Content2() {
  return (
    <div className="relative min-h-screen bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/images/hcm3.webp')" ,backgroundSize: "1700px",}}
    >
      {/* Overlay làm nhạt ảnh nền */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* Nội dung */}
      <div className="relative z-10">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Section I - Introduction */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="rounded-2xl p-8 sm:p-12">
            <div className="animate-fade-up">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white text-2xl flex-shrink-0 shadow-md">
                  📚
                </div>
                <div>
                  <p className="text-sm sm:text-4xl font-bold text-secondary uppercase tracking-wide">
                    III. Tư tưởng HCM về mối quan hệ giữa độc lập dân tộc và CN xã hội
                  </p>
                </div>
              </div>
              <div className="pl-0 sm:pl-18 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
                 1. Độc lập dân tộc là tiền đề để tiến lên CNXH
                </h2>
            
                <BulletPoint>
                  Mục tiêu trước mắt của cách mạng Việt Nam là giải phóng dân tộc, giành độc lập.
                </BulletPoint>
                <BulletPoint>
                  Giải phóng dân tộc là điều kiện để tiến lên CNXH và CNCS.
                </BulletPoint><BulletPoint>
                  Độc lập dân tộc gắn với nội dung dân tộc và dân chủ, hàm chứa định hướng CNXH.
                </BulletPoint><BulletPoint>
                  Cách mạng giải phóng dân tộc Việt Nam đi theo con đường cách mạng vô sản, mang bản chất và định hướng xã hội chủ nghĩa.
                </BulletPoint>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
               2. CNXH là điều kiện bảo đảm độc lập dân tộc vững chắc
                </h2>
            
                <BulletPoint>
                  CNXH, CNCS là con đường giải phóng triệt để dân tộc và người lao động.
                </BulletPoint>
                <BulletPoint>
                  CNXH xây dựng xã hội công bằng, bình đẳng, không áp bức, bóc lột.
                </BulletPoint><BulletPoint>
                  Tạo nền tảng kinh tế, văn hóa, đạo đức phát triển, bảo vệ độc lập và thúc đẩy đất nước.
                </BulletPoint>
                 <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
             3. Điều kiện bảo đảm độc lập dân tộc gắn liền với CNXH
                </h2>
            
                <BulletPoint>
                  Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản.
                </BulletPoint>
                <BulletPoint>
                  Củng cố khối đại đoàn kết toàn dân, nền tảng là liên minh công – nông.
                </BulletPoint><BulletPoint>
                  Đoàn kết, gắn bó chặt chẽ với cách mạng thế giới.
                </BulletPoint>
                
               
              </div>
              <div className="mb-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white text-2xl flex-shrink-0 shadow-md">
                  📚
                </div>
                <div>
                  <p className="text-sm sm:text-4xl font-bold text-secondary uppercase tracking-wide">
                    IV. Vận dụng tư tưởng HCM về độc lập dân tộc gắn liền với CNXH trong sự nghiệp CM VN giai đoạn hiện nay
                  </p>
                </div>
              </div>
              <div className="pl-0 sm:pl-18 space-y-4">
        
            
                <BulletPoint>
                  Kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội theo con đường Hồ Chí Minh đã xác định.
                </BulletPoint>
                <BulletPoint>
                  Phát huy dân chủ xã hội chủ nghĩa:
                  <BulletPoint>
                  Thực hiện đầy đủ quyền làm chủ của nhân dân.
                </BulletPoint>
                <BulletPoint>
                  Hoàn thiện pháp luật, bảo đảm quyền con người.
                </BulletPoint>
                <BulletPoint>
                  Tăng cường pháp chế, đề cao trách nhiệm công dân và đạo đức xã hội.
                </BulletPoint>
                </BulletPoint><BulletPoint>
                  Củng cố, nâng cao hiệu lực và hiệu quả hoạt động của toàn bộ hệ thống chính trị để bảo đảm dân chủ được thực hiện thực chất.
                </BulletPoint><BulletPoint>
                  Đẩy mạnh đấu tranh phòng, chống suy thoái về tư tưởng chính trị, đạo đức, lối sống; ngăn chặn “tự diễn biến”, “tự chuyển hóa” gắn với xây dựng, chỉnh đốn Đảng.
                </BulletPoint>
                
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Button */}
        <section className="mb-20 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold hover:shadow-2xl transition-all transform hover:scale-105 duration-200 text-lg shadow-lg"
          >
            Sang trang khác
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
             © 2024 Tư Tưởng Hồ Chí Minh • Độc lập dân tộc gắn liền với chủ nghĩa xã hội
          </p>
        </div>
      </footer>
    </div>
    </div>
  );
}
