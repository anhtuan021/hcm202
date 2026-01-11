import Header from "../components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className="w-2 h-2 rounded-full bg-secondary" />
    </div>
    <div className="text-sm sm:text-xl text-foreground/80 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function Content() {
  return (
    <div className="relative min-h-screen bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/public/images/hcm2.jpg')" ,backgroundSize: "1700px",}}
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
                    II. Tư tưởng HCM về CNXH và xây dựng CNXH ở VN
                  </p>
                </div>
              </div>
              <div className="pl-0 sm:pl-18 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
                  1. Tư tưởng HCM về CNXH
                </h2>
                <p className="sm:text-2xl text-foreground/75 text-base leading-relaxed">
                  <strong> A. Quan niệm của HCM về CNXH</strong>
                </p>

                <BulletPoint>
                  CN xã hội là ở giai đoạn đầu của CN công sản.
                </BulletPoint>
                <div className="mt-14 overflow-x-auto">
                  <table className="w-full border border-secondary/30 rounded-xl overflow-hidden">
                    <thead className="bg-secondary/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-xl font-bold text-secondary">
                          Nội dung
                        </th>
                        <th className="px-6 py-4 text-left text-xl font-bold text-secondary">
                          Chủ nghĩa xã hội
                        </th>
                        <th className="px-6 py-4 text-left text-xl font-bold text-secondary">
                          Chủ nghĩa cộng sản
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary/20">
                      <tr className="hover:bg-secondary/5 transition">
                        <td className="px-6 py-5 text-lg font-semibold text-primary">
                          Giống nhau
                        </td>
                        <td
                          className="px-6 py-5 text-lg text-foreground/80 leading-relaxed"
                          colSpan={2}
                        >
                          Sức sản xuất phát triển cao, tư liệu sản xuất thuộc sở
                          hữu chung, không còn áp bức bóc lột con người.
                        </td>
                      </tr>
                      <tr className="hover:bg-secondary/5 transition">
                        <td className="px-6 py-5 text-lg font-semibold text-primary">
                          Khác nhau
                        </td>
                        <td className="px-6 py-5 text-lg text-foreground/80 leading-relaxed">
                          Vẫn còn tồn tại một số vết tích của xã hội cũ.
                        </td>
                        <td className="px-6 py-5 text-lg text-foreground/80 leading-relaxed">
                          Hoàn toàn không còn bất kỳ vết tích nào của xã hội cũ.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="sm:text-2xl text-foreground/75 text-base leading-relaxed">
                  <strong>
                    {" "}
                    B. Tiến lên CNXH là tất yếu khách quan
                  </strong>
                </p>
                <BulletPoint>
                  Theo Hồ Chí Minh, tiến lên CNXH là quá trình tất yếu, tuân theo các quy luật khách quan của sản xuất.
                </BulletPoint>
                <BulletPoint>
                  Tùy điều kiện lịch sử, mỗi quốc gia có con đường và bước đi khác nhau: các nước tư bản phát triển đi thẳng lên CNXH; các nước chưa phát triển tư bản có thể tiến lên CNXH sau khi đánh đổ đế quốc và phong kiến.
                </BulletPoint>
                <p className="sm:text-2xl text-foreground/75 text-base leading-relaxed">
                  <strong>
                    {" "}
                    C. Một số đặc trưng cơ bản của xã hội CNXH
                  </strong>
                </p>
                <BulletPoint>
                  Xã hội dân chủ, nhân dân là chủ thể làm chủ.
                </BulletPoint>
                <BulletPoint>
                  Kinh tế phát triển, tư liệu sản xuất chủ yếu thuộc sở hữu chung, bảo đảm lợi ích xã hội.
                </BulletPoint>
                <BulletPoint>
                  Xây dựng CNXH là sự nghiệp của nhân dân dưới sự lãnh đạo của Đảng Cộng sản.
                </BulletPoint>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
                  2. Tư tưởng HCM về xây dựng CNXH ở VN
                </h2>
                <p className="sm:text-2xl text-foreground/75 text-base leading-relaxed">
                  <strong>
                    {" "}
                    A. Tính chất, đặc điểm và nhiệm vụ của thời kỳ quá độ
                  </strong>
                </p>
                <BulletPoint>
                 <strong> Tính chất: </strong> Thời kỳ cải biến xã hội sâu sắc, phức tạp, lâu dài; tiến lên CNXH phải từng bước, không thể nóng vội.
                </BulletPoint>
                <BulletPoint>
                  <strong> Đặc điểm: </strong> Xuất phát từ nền nông nghiệp lạc hậu, đi thẳng lên CNXH, không qua giai đoạn tư bản chủ nghĩa.
                </BulletPoint>
                <BulletPoint>
                  <strong> Nhiệm vụ: </strong> Xóa bỏ tàn tích xã hội cũ, xây dựng các yếu tố mới trên mọi lĩnh vực:
<BulletPoint>
                  Chính trị: xây dựng chế độ dân chủ.
                </BulletPoint>
                <BulletPoint>
                  Kinh tế: phát triển công – nông nghiệp hiện đại.
                </BulletPoint>
                <BulletPoint>
                Văn hóa: phát huy văn hóa dân tộc, tiếp thu tinh hoa nhân loại.
                </BulletPoint>
                <BulletPoint>
                Xã hội: phát huy cá nhân gắn với lợi ích chung.
                </BulletPoint>
                 </BulletPoint>
                
                <p className="sm:text-2xl text-foreground/75 text-base leading-relaxed">
                  <strong>
                    {" "}
                    B. Nguyên tắc xây dựng CNXH trong thời kỳ quá độ

                  </strong>
                </p>
                <BulletPoint>
                  Kiên định chủ nghĩa Mác – Lênin, độc lập dân tộc gắn với CNXH.
                </BulletPoint>
                <BulletPoint>
                  Tăng cường đoàn kết quốc tế, gắn cách mạng Việt Nam với phong trào tiến bộ thế giới.
                </BulletPoint>
                <BulletPoint>
                  Vận dụng CNXH sáng tạo, phù hợp điều kiện Việt Nam, tránh giáo điều.
                </BulletPoint>
                 <BulletPoint>
                  Kết hợp xây dựng với đấu tranh để bảo vệ và phát triển sự nghiệp cách mạng.
                </BulletPoint>
                
            
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Button */}
        <section className="mb-20 flex justify-center">
          <Link
            to="/content2"
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
