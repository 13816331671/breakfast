import { shop } from "@/lib/shop";

export default function Story() {
  const story = shop.story;

  return (
    <section id="story">
      <div className="wrap story">
        <div className="story-art reveal">
          <div className="frame">
            <blockquote className="serif">“{story.quote}”</blockquote>
            <div className="sig">
              <span className="seal">毛</span>
              <span>{story.signer}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="tag">Our Story</div>
          <h2>{story.title}</h2>
          <p>{story.lead}</p>

          <ul className="steps">
            {story.steps.map((step, index) => (
              <li key={step.title}>
                <span className="k serif">{index + 1}</span>
                <span>
                  <b>{step.title}</b>
                  <br />
                  {step.text}
                </span>
              </li>
            ))}
          </ul>

          <a className="btn btn-primary" style={{ marginTop: 28 }} href="#visit">
            来店里坐坐 →
          </a>
        </div>
      </div>
    </section>
  );
}
