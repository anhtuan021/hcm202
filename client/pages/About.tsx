import Header from "../components/Header";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="p-8">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="relative min-h-screen bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/images/hcm4.webp')" ,backgroundSize: "1700px",}}
    >
      {/* Overlay làm nhạt ảnh nền */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* Nội dung */}
      <div className="relative z-10">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Khám phá tầm nhìn, giá trị và công cụ đằng sau website{" "}
            <strong>"TƯ TƯỞNG HCM VỀ ĐỘC LẬP DÂN TỘC VÀ CNXH"</strong>
          </p>
        </section>


        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            ✨ Tính Năng
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🎨"
              title="Giao Diện Tương Tác"
              description="Trình bày kiến thức qua giao diện web tương tác, cuộn mượt và trực quan, dễ tiếp cận với mọi người."
            />
            <FeatureCard
              icon="📚"
              title="Kiến Thức Chính Xác"
              description="Các kiến thức được tổng hợp từ các nguồn uy tín, đảm bảo tính chính xác và cập nhật về giáo trình kinh tế chính trị Mác – Lênin."
            />
          </div>
        </section>

        {/* Tools & Support Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            🛠️ Công Cụ AI Hỗ Trợ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT Card */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🤖</div>
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

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
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
    quan điểm của Hồ Chí Minh; tạo bảng so sánh rõ ràng về con đường cách mạng,
    mối quan hệ chống đế quốc – chống phong kiến, CNXH và CNCS.
  </p>
  <p className="text-sm">
    <strong>CHỈNH SỬA:</strong> Điều chỉnh câu chữ theo giáo trình, rút gọn để
    phù hợp slide, nhấn mạnh ý trọng tâm phục vụ thuyết trình.
  </p>
</div>

            </div>

            {/* Builder.io Card */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    Builder.io
                  </h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Hỗ trợ <strong>tạo UI</strong>, <strong>thiết kế layout</strong>
                , <strong>xem preview trực quan</strong> và{" "}
                <strong>xuất mã HTML/CSS/React</strong> giúp nhóm tối ưu giao
                diện nhanh hơn.
              </p>

              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
  <p className="text-sm text-foreground/70 mb-2">
    <strong>Ví dụ — Thiết kế giao diện trình bày Tư tưởng Hồ Chí Minh</strong>
  </p>
  <p className="text-sm mb-2">
    <strong>PROMPT:</strong> Thiết kế giao diện web trình bày nội dung Tư tưởng
    Hồ Chí Minh: tiêu đề chương, mục lớn, bullet point và bảng so sánh; phong
    cách trang trọng, dễ đọc, phù hợp bài thuyết trình học thuật.
  </p>
  <p className="text-sm mb-2">
    <strong>KẾT QUẢ AI:</strong> Tạo layout rõ ràng, chia section hợp lý, bảng
    so sánh nổi bật, font chữ lớn, màu sắc trung tính phù hợp nội dung chính
    trị – tư tưởng.
  </p>
  <p className="text-sm">
    <strong>CHỈNH SỬA:</strong> Tăng cỡ chữ cho slide, thêm icon minh họa nhẹ,
    căn chỉnh khoảng cách và tối ưu hiển thị trên desktop và mobile.
  </p>
</div>

            </div>
          </div>
        </section>

        

        {/* Academic Integrity & References */}
        <section className="mb-20 p-10 sm:p-14 bg-background/40 rounded-2xl shadow-inner">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            📘 Tài Liệu Tham Khảo, Cam Kết & Kiểm Chứng
          </h2>

          {/* 1️⃣ Tài liệu tham khảo */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              📚 Tài Liệu Tham Khảo
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Toàn bộ nội dung học thuật trên website được tổng hợp và trình bày
              dựa trên giáo trình chính thống:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-foreground/80">
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 196 – 214.
              </li>
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 214 – 220.
              </li>
            </ul>
          </div>

          {/* 2️⃣ Cam kết học thuật */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🧭 Cam Kết Học Thuật
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
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
          </div>

          {/* 3️⃣ Quy trình kiểm chứng */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              🔍 Quy Trình Kiểm Chứng Thông Tin
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Để đảm bảo tính chính xác, minh bạch và học thuật của dự án, nhóm
              thực hiện quy trình kiểm chứng như sau:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-4 text-foreground/80">
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
             © 2024 Tư Tưởng Hồ Chí Minh • Độc lập dân tộc gắn liền với chủ nghĩa xã hội
          </p>
        </div>
      </footer>
    </div>
    </div>
  );
}
