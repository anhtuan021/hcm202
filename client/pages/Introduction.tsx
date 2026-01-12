import Header from "../components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className="w-2 h-2 rounded-full bg-secondary" />
    </div>
    <div className="text-lg text-foreground font-semibold leading-relaxed">
      {children}
    </div>
  </div>
);

export default function Introduction() {
  return (
    <div
      className="relative min-h-screen bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/images/hcm1.jpg')" ,backgroundSize: "1700px",}}
    >
      {/* Overlay làm nhạt ảnh nền */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* Nội dung */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          {/* Hero Section */}
          <section className="mb-16 sm:mb-24 text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="px-5 py-2.5 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide">
                🎓 NỘI DUNG THUYẾT TRÌNH
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              CHƯƠNG III. TƯ TƯỞNG HCM VỀ ĐỘC LẬP DÂN TỘC VÀ CNXH
            </h1>
            <p className="text-base sm:text-xl text-foreground font-semibold max-w-3xl mx-auto leading-relaxed">
              Khám phá tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ
              nghĩa xã hội – con đường bảo đảm tự do, hạnh phúc cho toàn dân,
              chứ không chỉ cho một giai cấp hay nhóm lợi ích riêng lẻ.
            </p>
          </section>

          {/* Section I - Introduction */}
          <section className="mb-16 sm:mb-24 scroll-mt-20">
            <div className="rounded-2xl p-8 sm:p-12">
              <div className="animate-fade-up">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white text-2xl flex-shrink-0 shadow-md">
                    ⚖️
                  </div>
                  <div>
                    <p className="text-sm sm:text-3xl font-bold text-secondary uppercase tracking-wide">
                      I.Tư tưởng HCM về độc lập dân tộc
                    </p>
                  </div>
                </div>
                <div className="pl-0 sm:pl-18 space-y-4">
                  <h2 className="text-3xl sm:text-3xl font-bold text-primary mt-1">
                    1. Vấn đề độc lập dân tộc
                  </h2>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      A. Độc lập, tự do là quyền thiêng liêng của mọi dân tộc
                    </strong>
                  </p>

                  <BulletPoint>
                    Năm 1919, Hồ Chí Minh nêu yêu sách đòi quyền bình đẳng, tự
                    do cho dân tộc Việt Nam, đặt nền móng tư tưởng về quyền dân
                    tộc.
                  </BulletPoint>
                  <BulletPoint>
                    Người tiếp thu và phát triển tư tưởng nhân quyền tiến bộ của
                    Cách mạng Mỹ và Pháp.
                  </BulletPoint>
                  <BulletPoint>
                    Năm 1945, Người long trọng khẳng định quyền độc lập, tự do
                    của dân tộc Việt Nam; tư tưởng này xuyên suốt toàn bộ hoạt
                    động cách mạng của Người.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      B. Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân
                      dân
                    </strong>
                  </p>
                  <BulletPoint>
                    Hồ Chí Minh tiếp thu các tư tưởng tiến bộ về tự do, bình
                    đẳng của nhân loại.
                  </BulletPoint>
                  <BulletPoint>
                    Trong Chánh cương vắn tắt của Đảng, Người xác định mục tiêu
                    cách mạng là xóa bỏ áp bức, bóc lột, bảo đảm quyền lợi và
                    đời sống của nhân dân.
                  </BulletPoint>
                  <BulletPoint>
                    Độc lập dân tộc phải gắn với tự do, hạnh phúc, đời sống ấm
                    no của nhân dân, coi đó là mục tiêu cao nhất của cách mạng
                    Việt Nam.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      C. Độc lập dân tộc phải thật sự, hoàn toàn và triệt để
                    </strong>
                  </p>
                  <BulletPoint>
                    Độc lập dân tộc phải bảo đảm chủ quyền và quyền tự quyết
                    trong đối nội, đối ngoại.
                  </BulletPoint>
                  <BulletPoint>
                    Độc lập được thực hiện toàn diện trên các lĩnh vực chính
                    trị, kinh tế, văn hóa, xã hội.
                  </BulletPoint>
                  <BulletPoint>
                    Trong hoàn cảnh khó khăn sau Cách mạng Tháng Tám, Hồ Chí
                    Minh linh hoạt ký Hiệp định Sơ bộ (6/3/1946) để khẳng định
                    tư cách quốc gia độc lập của Việt Nam.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      D. Độc lập dân tộc gắn liền với thống nhất và toàn vẹn
                      lãnh thổ
                    </strong>
                  </p>
                  <BulletPoint>
                    Hồ Chí Minh kiên quyết khẳng định Nam Bộ là bộ phận không
                    thể tách rời của Việt Nam.
                  </BulletPoint>
                  <BulletPoint>
                    Người luôn nhấn mạnh giữ vững chủ quyền, toàn vẹn lãnh thổ
                    là nguyên tắc bất di bất dịch.
                  </BulletPoint>
                  <BulletPoint>
                    Thể hiện niềm tin vững chắc vào thắng lợi của sự nghiệp độc
                    lập, thống nhất đất nước.
                  </BulletPoint>
                  <h2 className="text-3xl sm:text-3xl font-bold text-primary mt-1">
                    2. Về CM giải phóng dân tộc
                  </h2>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      A. CM giải phóng dân tộc muốn thắng lợi phải đi theo con
                      đường cách mạng vô sản
                    </strong>
                  </p>
                  <div className="mt-12 overflow-x-auto">
                    <table className="w-full border border-secondary/30 rounded-xl overflow-hidden">
                      <thead className="bg-secondary/10">
                        <tr>
                          <th className="px-6 py-4 text-left text-xl font-bold text-secondary">
                            Quan điểm
                          </th>
                          <th className="px-6 py-4 text-left text-xl font-bold text-secondary">
                            Thứ tự con đường cách mạng
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-secondary/20">
                        <tr className="hover:bg-secondary/5 transition">
                          <td className="px-6 py-5 text-lg font-semibold text-primary">
                            Mác & Ăngghen
                          </td>
                          <td className="px-6 py-5 text-lg text-foreground leading-relaxed">
                            Giải phóng giai cấp → Giải phóng dân tộc → Giải
                            phóng xã hội → Giải phóng con người
                          </td>
                        </tr>
                        <tr className="hover:bg-secondary/5 transition">
                          <td className="px-6 py-5 text-lg font-semibold text-primary">
                            Hồ Chí Minh
                          </td>
                          <td className="px-6 py-5 text-lg text-foreground leading-relaxed">
                            Giải phóng dân tộc → Giải phóng xã hội → Giải phóng
                            giai cấp → Giải phóng con người
                          </td>
                        </tr>
                        <tr className="hover:bg-secondary/5 transition">
                          <td className="px-6 py-5 text-lg font-semibold text-primary">
                            Quốc tế Cộng sản
                          </td>
                          <td className="px-6 py-5 text-lg text-foreground leading-relaxed">
                            Chống đế quốc và chống phong kiến phải được thực
                            hiện đồng thời, khăng khít với nhau, nương tựa vào
                            nhau.
                          </td>
                        </tr>
                        <tr className="hover:bg-secondary/5 transition">
                          <td className="px-6 py-5 text-lg font-semibold text-primary">
                            Hồ Chí Minh
                          </td>
                          <td className="px-6 py-5 text-lg text-foreground leading-relaxed">
                            Đặt lên hàng đầu nhiệm vụ chống đế quốc, giải phóng
                            dân tộc; nhiệm vụ chống phong kiến, mang lại ruộng
                            đất cho nông dân được thực hiện từng bước phù hợp.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      B. Cách mạng giải phóng dân tộc ở Việt Nam phải do Đảng
                      Cộng sản lãnh đạo
                    </strong>
                  </p>
                  <BulletPoint>
                    Đảng Cộng sản là nhân tố quyết định để giai cấp công nhân
                    hoàn thành sứ mệnh lịch sử.
                  </BulletPoint>
                  <BulletPoint>
                    Hồ Chí Minh khẳng định: “trước hết phải có Đảng cách mệnh”,
                    Đảng vững thì cách mạng mới thành công.
                  </BulletPoint>
                  <BulletPoint>
                    Đảng vừa mang bản chất giai cấp công nhân, vừa là Đảng của
                    nhân dân lao động và dân tộc Việt Nam.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground text-base leading-relaxed">
                    <strong>
                      {" "}
                      C. Cách mạng giải phóng dân tộc dựa vào đại đoàn kết toàn
                      dân tộc
                    </strong>
                  </p>
                  <BulletPoint>
                    Cách mạng là sự nghiệp của toàn dân, lực lượng là toàn dân
                    tộc.
                  </BulletPoint>
                  <BulletPoint>
                    Tranh thủ, trung lập hóa các lực lượng chưa phản cách mạng.
                  </BulletPoint>
                  <BulletPoint>
                    Liên minh công – nông là nền tảng của cách mạng.
                  </BulletPoint>
                  <BulletPoint>
                    Đại đoàn kết toàn dân thể hiện ở chủ trương toàn dân kháng
                    chiến, bảo vệ Tổ quốc.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground  text-base leading-relaxed">
                    <strong>
                      {" "}
                      D. Cách mạng giải phóng dân tộc cần chủ động, sáng tạo
                    </strong>
                  </p>
                  <BulletPoint>
                    Cách mạng thuộc địa có quan hệ bình đẳng với cách mạng vô
                    sản ở chính quốc, không phụ thuộc vào nhau.
                  </BulletPoint>
                  <BulletPoint>
                    Cách mạng thuộc địa có thể giành thắng lợi trước.
                  </BulletPoint>
                  <BulletPoint>
                    Cơ sở: thuộc địa là mắt xích sống còn của chủ nghĩa đế quốc;
                    các dân tộc thuộc địa có tinh thần đấu tranh mạnh mẽ, khi
                    được giác ngộ sẽ trở thành lực lượng cách mạng to lớn.
                  </BulletPoint>
                  <p className="sm:text-xl text-foreground text-base leading-relaxed">
                    <strong>
                      {" "}
                      E. Cách mạng giải phóng dân tộc phải tiến hành bằng bạo
                      lực cách mạng
                    </strong>
                  </p>
                  <BulletPoint>
                    Dùng bạo lực cách mạng chống lại bạo lực phản cách mạng để
                    giành và bảo vệ chính quyền.
                  </BulletPoint>
                  <BulletPoint>
                    Bạo lực cách mạng gồm lực lượng chính trị và lực lượng vũ
                    trang.
                  </BulletPoint>
                  <BulletPoint>
                    Đấu tranh chính trị là nền tảng, đấu tranh vũ trang giữ vai
                    trò quyết định trong việc đánh bại kẻ thù và kết thúc chiến
                    tranh.
                  </BulletPoint>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Button */}
          <section className="mb-20 flex justify-center">
            <Link
              to="/content"
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
              © 2024 Tư Tưởng Hồ Chí Minh • Độc lập dân tộc gắn liền với chủ
              nghĩa xã hội
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
