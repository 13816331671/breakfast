# 弄堂晨光 · 上海早点

上海早点铺的单页官网，基于 **Next.js 14（App Router）** 构建，样式全部为原生 CSS，插画与地图均为手写 SVG，无任何外部图片依赖。

## 快速开始

```bash
npm install
npm run dev
```

打开 http://localhost:3000 即可预览。

其他命令：

```bash
npm run build   # 生产构建
npm run start   # 启动生产服务
npm run lint    # 代码检查
```

## 目录结构

```
app/
  layout.jsx            # 根布局：站点元信息、导航、页脚
  page.jsx              # 首页，按顺序组合各区块
  globals.css           # 全站样式（配色变量集中在 :root）
  icon.svg              # 站点图标
components/
  SiteHeader.jsx        # 吸顶导航（客户端组件：汉堡菜单 + 锚点平滑滚动）
  SiteFooter.jsx        # 页脚
  ScrollReveal.jsx      # 客户端组件：为 .reveal 元素注册进入视口动画
  Illustrations.jsx     # Hero 插画 + 四大金刚图标（SVG）
  ShanghaiMap.jsx       # 早餐风格的门店示意地图（SVG）
  sections/
    Hero.jsx            # 首屏
    Classics.jsx        # 四大金刚
    MenuSection.jsx     # 早点单
    Story.jsx           # 老灶故事
    Visit.jsx           # 到店指南（含地图）
lib/
  shop.js               # 门店信息、菜单、导航等全部文案数据
```

## 改内容去哪里

绝大多数文案都在 `lib/shop.js`：门店名称、地址、营业时间、电话、菜单价格、四大金刚介绍、故事文案、导航项。

改配色只需调整 `app/globals.css` 顶部的 `:root` 变量（豆浆米白、油条金、辣酱红、葱花绿）。

改门店定位点：`components/ShanghaiMap.jsx` 里的 `330 / 256` 是本店标记的坐标；「高德地图」按钮的链接由 `shop.address.mapQuery` 生成，替换成真实门店名或经纬度即可。

> 注：根目录的 `index.html` 是改造前的静态版本，保留作对照与免安装预览用。跑通 `npm run dev` 后可以删除。
