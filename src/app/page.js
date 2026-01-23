

export default function Page() {
  return(
    <main>

      {/* ======================================== */}
      {/*              HEADER / INTRO              */}
      {/* ======================================== */}
      <header>
        <p>Made with love (and Sobiah's code)</p>
        <h1>Hi Daniel 💕</h1>
      </header>

      {/* ======================================== */}
      {/*            ASK (initial) STATE           */}
      {/*      conditionally shown and hidden      */}
      {/* ======================================== */}
      <section id="ask-state">
        <p>
          I made a website because I'm a
          web developer and also because
          I'm ridiculously into you.
          <br/>
          So...important question:
        </p>
        <h2>Will you be my Valentine</h2>
        <div>
          <button type="button">Yes 💞</button>
          <button type="button">No 😧</button>
        </div>
        <p>(The "No" button is emotionally unavailable.)</p>
      </section>

      <hr/>

      {/* ======================================== */}
      {/*   YES STATE - Shown after clicking yes   */}
      {/*  if clicked, this replaces the ask state */}
      {/* ======================================== */}
      <section id="yes-state">
        <h2>
          Mission accomplished: 
          Valentines acquired 💘
        </h2>
        <p>No spoilers 🙃</p>
        <p>
          I've planned everything 
          and I'm spoiling you.
        </p>

        {/* ======================================== */}
        {/*         Spoiler free instructions        */}
        {/* ======================================== */}
        <h3>Your only instructions:</h3>
        <ul>
          <li>Show up hot and handsome (as always).</li>
          <li>Dress code: Formal wear (Black, red or both for colour).</li>
          <li>Meet up at King's Cross by 11:30 or earlier.</li>
        </ul>
        <p>P.S. I reserve the right to stay superglued to you the whole time.</p>

        {/* ======================================== */}
        {/*            FAKE REVEAL BUTTON            */}
        {/*        triggers laughing cat meme        */}
        {/* ======================================== */}
        <div>
          <p>Nice try 😂</p>
          <p>(Insert laughing cat meme here)</p>
          <p>No spoilers. Patience darling 😘</p>
        </div>

        {/* ======================================== */}
        {/*               REPLAY BUTTON              */}
        {/* ======================================== */}
        <div>
          <button type="button">Replay 😄</button>
        </div>

        <footer>
          <p>
            Made for Daniel. From Sobiah.
            With a scandalous amount of affection.
          </p>
        </footer>
      </section>
    </main>
  );
};
