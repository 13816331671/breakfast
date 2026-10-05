import { ClassicIcon } from "@/components/Illustrations";
import { classics } from "@/lib/shop";

export default function Classics() {
  return (
    <section id="classics">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="tag">The Big Four</div>
          <h2>四大金刚</h2>
          <p>上海人清晨的老朋友，缺一样都算不上一顿完整的早饭。</p>
          <div className="orn">❋</div>
        </div>

        <div className="sig-grid">
          {classics.map((item) => (
            <article className="sig-card reveal" key={item.name}>
              <span className="num serif">{item.numeral}</span>
              <ClassicIcon name={item.icon} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="price">{item.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
