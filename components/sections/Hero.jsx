import { HeroArt } from "@/components/Illustrations";
import { marquee, shop } from "@/lib/shop";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="kicker">
            <i className="dot" />
            {shop.kicker}
          </span>

          <h1 className="title serif">
            一口<span className="accent">大饼油条</span>
            <br />
            回到老上海
          </h1>

          <p className="lead">{shop.lead}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#menu">
              看看早点单 →
            </a>
            <a className="btn btn-ghost" href="#visit">
              怎么找到我们
            </a>
          </div>

          <div className="hero-facts">
            {shop.facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <b className="serif">{fact.value}</b>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art reveal">
          <div className="plate">
            <div className="steam">
              <i />
              <i />
              <i />
            </div>
            <HeroArt />
          </div>
          <div className="badge-float a">
            现磨<em> 咸豆浆</em>
          </div>
          <div className="badge-float b">
            油条 <em>酥·脆·香</em>
          </div>
        </div>
      </div>

      <div className="strip">
        <div className="strip-track">
          {[0, 1].map((copy) => (
            <span key={copy}>{marquee.join(" · ")}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
