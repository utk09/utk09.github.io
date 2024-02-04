function Feature({ title, description }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageContent() {
  return (
    <div>
      <section>
        <p className="text-sm leading-6 text-justify">
          I am a Software Developer at Citigroup UK, and celebrated as one of
          the MLH Top 50 in 2023. Beyond my primary role, I dedicate myself as
          an MLH Coach and Technical Program Associate, fostering growth and
          innovation within the tech community. A proud alumnus of Newcastle
          University, I graduated with distinction, holding an MSc in Computer
          Science. My technical foundations lie in JavaScript, TypeScript,
          React, and Python. With a rich background from a previous tenure as an
          SDE at Reliance Jio in India, my diverse skills and passion for
          technology equip me to face intricate challenges and deliver creative
          solutions effectively.
        </p>
      </section>
    </div>
  );
}
