"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, shop } from "@/lib/shop";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // 锚点平滑滚动，并补偿吸顶导航的高度
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      setOpen(false);

      const offset = header.offsetHeight - 2;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="nav" ref={headerRef}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="seal">{shop.seal}</span>
          <span>
            {shop.name}
            <small>{shop.nameEn}</small>
          </span>
        </a>

        <nav className={`links${open ? " open" : ""}`} id="navLinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#visit">
          今日开炉 · 05:30
        </a>

        <button
          className="burger"
          type="button"
          aria-label="菜单"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
