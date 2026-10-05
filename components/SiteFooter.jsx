import { navLinks, shop } from "@/lib/shop";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="flogo serif">{shop.name} · 上海早点</div>

        <nav className="fnav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p>© {new Date().getFullYear()} {shop.name}早点铺　·　一口老上海，等你天亮来</p>
        <p style={{ opacity: 0.6 }}>本页为示例网站，店名、地址与价格均为虚构展示内容。</p>
      </div>
    </footer>
  );
}
