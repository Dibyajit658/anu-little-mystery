
import { useState } from "react";
import Footer from "../components/Footer";

function FinalSurprise() {

  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);
  };

  const restartSurprise = () => {
    setOpened(false);
  };

  return (

    <div className="final-page">

      <main className="final-container">

        {!opened ? (

          <>

            <p className="eyebrow">
              ONE LAST LITTLE SURPRISE
            </p>

            <h1>Something Special for You, Anu! 💗</h1>

            <p className="final-description">
              You've made it to the final surprise!

              There's just one little gift waiting
              for you. Are you ready?
            </p>

            <button
              className="gift-button"
              onClick={openGift}
              aria-label="Open your surprise gift"
            >

              <span className="gift-emoji">
                🎁
              </span>

            </button>

            <p className="gift-hint">
              Tap the gift to open it ✨
            </p>

          </>

        ) : (

          <div className="final-reveal">

            <div className="confetti-container" aria-hidden="true">

              {Array.from({ length: 35 }).map((_, index) => (

                <span
                  key={index}
                  className="confetti"
                  style={{
                    "--i": index,
                    "--delay": `${(index % 7) * 0.15}s`
                  }}
                >
                  {["💗", "✨", "🌸", "💕", "🎉"][index % 5]}
                </span>

              ))}

            </div>

            <div className="final-heart">
              💖
            </div>

            <p className="eyebrow">
              SURPRISE UNLOCKED
            </p>

            <h1>Hey Anu! 🌸</h1>

            <div className="final-message-card">

              <p className="final-message-title">
                A Little Note for You
              </p>

              <p className="final-message">

                Thank you for exploring this little
                surprise.

                It was made with a simple thought:
                to bring a smile to your face.

                Even though we have only recently
                connected, I'm happy we got the
                chance to know each other.

                Keep smiling, stay happy, and
                take care of yourself! 😊

              </p>

              <div className="final-signature">
                With warm wishes,

                <strong>Jaydev ♡</strong>
              </div>

            </div>

            <p className="final-thanks">
              Hope you enjoyed your little journey! ✨
            </p>

            <button
              className="restart-button"
              onClick={restartSurprise}
            >
              Open the Gift Again 🎁
            </button>

          </div>

        )}

      </main>

      <Footer />

    </div>

  );

}

export default FinalSurprise;
