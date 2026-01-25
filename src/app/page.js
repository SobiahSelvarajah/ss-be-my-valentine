"use client";

import { useState, useMemo } from "react";


export default function Page() {

  const boyfriendName = "Daniel";
  const girlfriendName = "Sobiah";

  // initial ask state
  const [ initialStage, setInitialStage ] = useState("ask");
  // No button behaviour
  const [ noIndex, setNoIndex ] = useState(0);
  const [ noOffset, setNoOffset ] = useState({ x:0, y:0 });

  const noResponses = useMemo( 
    () => [
      "No 😧",
      "Nope nope 🙂‍↔️",
      "Wait--",
      "Hold up boo boo ✋",
      "Think this through mister 🤨",
      "Be serious 🧐",
      "Not an option 😘",
      "Okay but...yes right?"
    ],
    []
  );

  function dodgeNo() {
    const x = Math.floor(Math.random() * 120) - 60;
    const y = Math.floor(Math.random() * 90) - 45;
    setNoOffset({ x, y });
    setNoIndex( (i) => (i+1) % noResponses.length );
  };

  return(
    <main className="min-h-screen grid place-items-center 
                     px-6 py-10 bg-black text-white">

      {/* ======================================== */}
      {/*              HEADER / INTRO              */}
      {/* ======================================== */}
      <header
        className="w-full max-w-xl text-center space-y-8"
      >
        <p className="text-sm italic text-white/30">
          Made with love (and {girlfriendName}'s code)
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Hi {boyfriendName} 💕
        </h1>
      </header>

      {/* ======================================== */}
      {/*            ASK (initial) STATE           */}
      {/*      conditionally shown and hidden      */}
      {/* ======================================== */}
      {initialStage === "ask" && (
        <section className="max-w-xl mx-auto mt-10 
                            text-center space-y-8">
          <p className="text-white/70 leading-relaxed ">
            I made a website because I'm a
            web developer and also because
            I'm ridiculously into you.
            <br/>
            So...important question:
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold 
                         inline-flex items-center gap-4 
                         justify-center">
            <span className="text-sm opacity-70">♡</span>
            <span>Will you be my Valentine?</span>
            <span className="text-sm opacity-70">♡</span>
          </h2>
          <div className="relative h-24 flex justify-center 
                          items-center">
            <button 
              type="button"
              onClick={() => setInitialStage("yes")}
              className="px-6 py-3 rounded-full text-sm 
                         font-medium bg-white/90 
                         text-black hover:bg-white
                         transition"
            >
              Yes 💞
            </button>
            <div className="relative w-[240px] h-16 ml-6 sm:ml-10">
              <button 
                type="button"
                onMouseEnter={dodgeNo}
                onClick={dodgeNo}
                className="absolute left-0 top-1/2 -translate-y-1/2 
                           px-6 py-3 rounded-full text-sm font-medium 
                           border border-white/30 text-white 
                           transition-transform"
                style={{ transform: `translate(${noOffset.x}px, ${noOffset.y}px)` }}
              > 
                {noResponses[noIndex]}
              </button>              
            </div>
          </div>
          <p className="text-xs text-white/60">
            (The "No" button is emotionally unavailable.)
          </p>
        </section>        
      )}


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
