import { menu } from "@/lib/shop";

export default function MenuSection() {
  return (
    <section id="menu">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="tag">Menu</div>
          <h2>早点单</h2>
          <p>每日现做，卖完即止。价格是弄堂价，分量是老邻居的分量。</p>
          <div className="orn">❋</div>
        </div>

        <div className="menu-cols">
          {menu.map((item) => (
            <div className="dish reveal" key={item.name}>
              <span className="name serif">
                {item.name}
                {item.tag ? <em>{item.tag}</em> : null}
              </span>
              <i className="lead-line" />
              <span className="cost serif">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="menu-note reveal">
          只做早市，供应时段 <b>05:30 – 10:30</b>　·　卖完即止，恕不预留过午
        </p>
      </div>
    </section>
  );
}
