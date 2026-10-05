import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "弄堂晨光 · 上海早点 | 大饼油条豆浆粢饭",
  description:
    "弄堂晨光上海早点铺：四大金刚、生煎小笼、咸豆浆、粢饭团，一口回到老上海的清晨。新天地北里 181 弄 25 号楼，只做早市。",
  keywords: ["上海早点", "四大金刚", "大饼油条", "咸豆浆", "粢饭团", "新天地"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
