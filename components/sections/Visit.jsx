import ShanghaiMap from "@/components/ShanghaiMap";
import { shop } from "@/lib/shop";

export default function Visit() {
  const { address, hours, phone, chips } = shop;

  return (
    <section id="visit">
      <div className="wrap">
        <div className="visit-box reveal">
          <div className="visit-layout">
            <div className="visit-info">
              <div className="visit-item">
                <h3>{address.label}</h3>
                <div className="big">
                  {address.line1}
                  <br />
                  {address.line2}
                </div>
                <p>{address.note}</p>
              </div>

              <div className="visit-item">
                <h3>{hours.label}</h3>
                <div className="big">
                  {hours.line1}
                  <br />
                  {hours.line2}
                </div>
                <p>{hours.note}</p>
              </div>

              <div className="visit-item">
                <h3>{phone.label}</h3>
                <div className="big">{phone.value}</div>
                <p>{phone.note}</p>
              </div>
            </div>

            <div className="visit-map">
              <ShanghaiMap />
            </div>
          </div>

          <div className="visit-foot">
            {chips.map((chip) => (
              <span key={chip.text} className={chip.on ? "chip on" : "chip"}>
                {chip.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
