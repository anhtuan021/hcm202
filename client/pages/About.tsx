import Header from "../components/Header";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

const InfoBox = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-primary animate-fadeInLeft" style={{ animation: 'fadeInLeft 1s ease-out forwards' }}>
    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
      {icon}
      {title}
    </h3>
    <div className="text-lg text-foreground/80 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white"
        style={{
          backgroundImage: 'url(/images/hcm4.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-slideInUp" style={{ animation: 'slideInUp 1.2s ease-out 0.5s both' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Về Chúng Tôi
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Khám phá tầm nhìn, giá trị và công cụ đằng sau website{" "}
              <strong>"TƯ TƯỞNG HCM VỀ ĐỘC LẬP DÂN TỘC VÀ CNXH"</strong>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Tính Năng Chính</h2>
            <p className="text-xl text-gray-600">Những thành phần quan trọng tạo nên website học thuật của chúng tôi</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={
                <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              }
              title="Giao Diện Tương Tác"
              description="Trình bày kiến thức qua giao diện web tương tác, cuộn mượt và trực quan, dễ tiếp cận với mọi người."
            />
            <FeatureCard
              icon={
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              }
              title="Kiến Thức Chính Xác"
              description="Các kiến thức được tổng hợp từ các nguồn uy tín, đảm bảo tính chính xác và cập nhật về giáo trình kinh tế chính trị Mác – Lênin."
            />
          </div>
        </section>

        {/* Tools & Support Section */}
        <section className="mb-20">
          <div className="text-center mb-16 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Công Cụ AI Hỗ Trợ</h2>
            <p className="text-xl text-gray-600">Các công cụ hiện đại giúp tối ưu hóa quy trình phát triển</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT Card */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-primary">ChatGPT</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Hỗ trợ <strong>tạo code</strong>, <strong>tối ưu logic</strong>,{" "}
                <strong>kiểm tra lỗi</strong>,{" "}
                <strong>viết mô tả tài liệu</strong> và{" "}
                <strong>phát triển nội dung học thuật</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-sm text-foreground/70 mb-2">
                  <strong>Ví dụ — Xây dựng nội dung trình bày Tư tưởng Hồ Chí Minh</strong>
                </p>
                <p className="text-sm mb-2">
                  <strong>PROMPT:</strong> Soạn nội dung Chương III: Tư tưởng Hồ Chí Minh về
                  độc lập dân tộc gắn liền với chủ nghĩa xã hội; trình bày theo dạng bullet
                  point, bảng so sánh (Mác–Ăngghen, Quốc tế Cộng sản, Hồ Chí Minh), văn phong
                  ngắn gọn, dễ thuyết trình.
                </p>
                <p className="text-sm mb-2">
                  <strong>KẾT QUẢ AI:</strong> Sinh nội dung lý luận mạch lạc, hệ thống hóa
                  quan điểm của Hồ Chí Minh; tạo bảng so sánh rõ ràng về con đường cách mạng.
                </p>
              </div>
            </div>

            {/* Builder.io Card */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
              <div className="flex items-center gap-4 mb-6">
                <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Builder.io</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Hỗ trợ <strong>tạo UI</strong>, <strong>thiết kế layout</strong>
                , <strong>xem preview trực quan</strong> và{" "}
                <strong>xuất mã HTML/CSS/React</strong> giúp nhóm tối ưu giao
                diện nhanh hơn.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
                <p className="text-sm text-foreground/70 mb-2">
                  <strong>Ví dụ — Thiết kế giao diện trình bày Tư tưởng Hồ Chí Minh</strong>
                </p>
                <p className="text-sm mb-2">
                  <strong>PROMPT:</strong> Thiết kế giao diện web trình bày nội dung Tư tưởng
                  Hồ Chí Minh: tiêu đề chương, mục lớn, bullet point và bảng so sánh; phong
                  cách trang trọng, dễ đọc, phù hợp bài thuyết trình học thuật.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Integrity & References */}
        <section className="mb-20 space-y-8">
          <div className="text-center mb-16 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Tài Liệu & Cam Kết Học Thuật</h2>
            <p className="text-xl text-gray-600">Đảm bảo tính chính xác, minh bạch và trách nhiệm</p>
          </div>

          <InfoBox
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            }
            title="Tài Liệu Tham Khảo"
          >
            <p className="mb-4">
              Toàn bộ nội dung học thuật trên website được tổng hợp và trình bày
              dựa trên giáo trình chính thống:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 196 – 214.
              </li>
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 214 – 220.
              </li>
            </ul>
          </InfoBox>

          <InfoBox
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            }
            title="Cam Kết Học Thuật"
          >
            <p>
              Nhóm sinh viên cam kết rằng website được phát triển với sự hỗ trợ
              của công cụ AI (ChatGPT, Builder.io), nhưng{" "}
              <strong>
                mọi nội dung học thuật, luật chơi, cân bằng số liệu và kiểm tra
                đầu cuối
              </strong>{" "}
              đều do
              <strong>
                {" "}
                nhóm sinh viên trực tiếp thực hiện và chịu trách nhiệm
              </strong>
              .
            </p>
          </InfoBox>

          <InfoBox
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            }
            title="Quy Trình Kiểm Chứng Thông Tin"
          >
            <p className="mb-4">
              Để đảm bảo tính chính xác, minh bạch và học thuật của dự án, nhóm
              thực hiện quy trình kiểm chứng như sau:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>
                Đối chiếu toàn bộ nội dung AI sinh ra với tài liệu gốc trong
                giáo trình.
              </li>
              <li>
                Hiệu chỉnh và xác nhận lại các khái niệm kinh tế – chính trị
                quan trọng.
              </li>
              <li>
                Kiểm tra số liệu, trích dẫn, biểu đồ và tính hợp lý của ví dụ
                minh họa.
              </li>
              <li>
                Kiểm duyệt toàn bộ nội dung và giao diện lần cuối trước khi công
                bố.
              </li>
            </ol>
          </InfoBox>
        </section>
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
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
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