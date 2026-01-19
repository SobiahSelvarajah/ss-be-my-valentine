
export default function Page() {
  
  return ( 
    <main>

      {/* ================================================= */}
      {/* HEADER / INTRO                                    */}
      {/* ================================================= */}
      <header>
        <p>Made with love (and Sobiah's code)</p>
        <h1>Hi Daniel 💕</h1>
      </header>

      {/* ================================================= */}
      {/* ASK STATE (Initial View)                          */}
      {/* This will later be conditionally shown/hidden     */}
      {/* ================================================= */}
      <section id="ask-state">
        <p>
          I made a website because I'm a web developer 
          and also because I'm ridiculously into you. 
          <br/>
          So… important question:
        </p>
        <h2>Will you be my Valentine?</h2>
        <div>
          <button type="button">Yes 💞</button>
          <button type="button">No 😧</button>
        </div>
        <p>(The “No” button is emotionally unavailable.)</p>
      </section>

      <hr />

      {/* ================================================= */}
      {/* YES STATE (Shown after clicking “Yes”)            */}
      {/* This will later replace the ask state             */}
      {/* ================================================= */}
      <section id="yes-state">
        <h2>✅ Valentine secured</h2>
        <p>No spoilers 🙃</p>
        <p>I've planned everything and I'm spoiling you.</p>

        {/* ------------------------------------------------- */}
        {/* FINAL PLANS (Spoiler-free)                        */}
        {/* ------------------------------------------------- */}
        <h3>Your only instructions:</h3>
        <ul>
          <li>Show up hot and handsome (as always).</li>
          <li>Dress code: Formal wear (Black or red for colour).</li>
          <li>Bring your attention, I'll bring the plan.</li>
          <li>Details will arrive by text like a premium subscription.</li>
        </ul>
        <p>P.S. I reserve the right to steal your arm for cuddles.</p>

        {/* ------------------------------------------------- */}
        {/* FAKE REVEAL BUTTON                                */}
        {/* This will trigger the laughing cat meme           */}
        {/* ------------------------------------------------- */}
        <div>
          <button type="button">Reveal the plan 👀</button>
        </div>

        {/* ------------------------------------------------- */}
        {/* FAKE REVEAL RESPONSE                              */}
        {/* Initially hidden via JS.                          */}
        {/* ------------------------------------------------- */}
        <div>
          <p>Nice try 😂</p>
          <p>(Insert laughing cat meme here)</p>
          <p>No spoilers. Patience darling 😘</p>
        </div>

        {/* ------------------------------------------------- */}
        {/* ACTION BUTTON                                     */}
        {/* ------------------------------------------------- */}
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