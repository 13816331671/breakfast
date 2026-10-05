export const shop = {
  name: "弄堂晨光",
  nameEn: "SHANGHAI BREAKFAST",
  seal: "晨",
  kicker: "凌晨四点起灶 · 石库门老味道",
  lead: "天蒙蒙亮的弄堂口，豆浆在锅里翻着热气，油条下锅“滋啦”一声。我们守着这方老灶，把上海人清晨最踏实的那口味道，原样端到你面前。",
  facts: [
    { value: "38年", label: "一口老灶" },
    { value: "四大金刚", label: "样样当日现做" },
    { value: "5:30", label: "准时开炉" },
  ],
  address: {
    label: "地址",
    line1: "黄浦区新天地北里",
    line2: "181 弄 25 号楼",
    note: "近兴业路，紧邻石库门景区。地铁 10 / 13 号线新天地站 6 号口，步行约 3 分钟。",
    mapQuery: "新天地北里",
  },
  hours: {
    label: "营业时间",
    line1: "早市 05:30–10:30",
    line2: "逢初一、十五提前收摊",
    note: "只做早市，中午前收摊，卖完即止。",
  },
  phone: {
    label: "电话 · 打包",
    value: "02186888848",
    note: "可提前 20 分钟电话预留，急事请加微信「弄堂晨光」。",
  },
  mapCaption: { left: "示意地图 · 非精确比例", right: "地铁新天地站 · 步行约 3 分钟" },
  chips: [
    { text: "✓ 支持打包带走", on: true },
    { text: "堂食座位 24 个" },
    { text: "现金 / 微信 / 支付宝" },
    { text: "周三 咸豆浆 免费加一次" },
  ],
  story: {
    quote:
      "面的发酵，急不来的。等足了时辰，油条才会空心；柴火烧够了，豆浆才有那股焦香。",
    signer: "毛师傅 · 守着这口老灶三十八年",
    title: "老灶不熄，晨光不散",
    lead: "从石库门弄堂的一辆早点摊车，到如今这间小店，变的是门牌，不变的是那口凌晨四点就烧起来的灶。面和豆，头一天晚上就要泡上、醒上。",
    steps: [
      { title: "夜里泡豆、和面", text: "黄豆冷水泡足八小时，面团醒到起筋。" },
      { title: "天没亮就起灶", text: "05:30 第一锅豆浆滚起来，第一根油条下锅。" },
      { title: "卖完即止，只做当天的", text: "不留隔夜，宁少不做，是老店最简单的规矩。" },
    ],
  },
};

export const classics = [
  {
    numeral: "壹",
    name: "大饼",
    desc: "甜咸两味，炭火炉壁烘得外脆内软，撒一层白芝麻。",
    price: "¥ 3 起",
    icon: "dabing",
  },
  {
    numeral: "贰",
    name: "油条",
    desc: "两根面一绞，热油里翻成金黄，咬开是空的、脆的。",
    price: "¥ 3.5 / 根",
    icon: "youtiao",
  },
  {
    numeral: "叁",
    name: "豆浆",
    desc: "现磨现煮，甜口暖喉，咸口加虾皮油条葱花，鲜得打颤。",
    price: "¥ 4 / 碗",
    icon: "doujiang",
  },
  {
    numeral: "肆",
    name: "粢饭团",
    desc: "糯米饭裹油条，甜口撒白糖黑洋酥，咸口塞榨菜肉松。",
    price: "¥ 6 起",
    icon: "cifan",
  },
];

export const menu = [
  { name: "咸豆浆", tag: "招牌", price: "¥4" },
  { name: "甜豆浆", price: "¥3.5" },
  { name: "大饼（咸）", price: "¥3" },
  { name: "大饼（甜）", price: "¥3" },
  { name: "现炸油条", price: "¥3.5" },
  { name: "粢饭团", tag: "甜咸各半", price: "¥6" },
  { name: "粢饭糕", price: "¥4" },
  { name: "生煎小笼", tag: "半客", price: "¥12" },
  { name: "豆腐花（咸）", price: "¥5" },
  { name: "阳春面", price: "¥9" },
  { name: "葱油饼", price: "¥5" },
  { name: "茶叶蛋", price: "¥2.5" },
  { name: "老虎脚爪", price: "¥4" },
  { name: "酸奶 / 牛奶", price: "¥5" },
];

export const navLinks = [
  { href: "#classics", label: "四大金刚" },
  { href: "#menu", label: "早点单" },
  { href: "#story", label: "老灶故事" },
  { href: "#visit", label: "到店指南" },
];

export const marquee = [
  "大饼",
  "油条",
  "豆浆",
  "粢饭团",
  "生煎",
  "小笼",
  "咸豆花",
  "粢饭糕",
  "四大金刚",
];
