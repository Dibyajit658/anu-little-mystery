
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Mystery() {
  const navigate = useNavigate();

  // Three new mystery clues
  const clues = [
    "It appears on your face when something makes you happy. 😊",
    "People often show it in their photographs. 📸",
    "It can make a simple hello feel special. 💗"
  ];

  // React state
  const [revealedClues, setRevealedClues] = useState([]);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  // Reveal a clue
  const revealClue = (index) => {
    if (!revealedClues.includes(index)) {
      setRevealedClues((previous) => [...previous, index]);
    }
  };

  // Check the answer
  const checkAnswer = (e) => {
    e.preventDefault();

    if (revealedClues.length !== clues.length) {
      setFeedback("Reveal all three clues first! ✨");
      return;
    }

    const userAnswer = answer.trim().toLowerCase();

    if (
      userAnswer === "smile" ||
      userAnswer === "a smile"
    ) {
      setUnlocked(true);
      setFeedback("");
    } else {
      setFeedback(
        "Not quite! Think about something that makes people happy. 💗"
      );
    }
  };

  // Restart the mystery
  const restartMystery = () => {
    setRevealedClues([]);
    setAnswer("");
    setFeedback("");
    setUnlocked(false);
  };

  return (
    <div className="mystery-page">

      <main className="mystery-container">

        <div className="mystery-icon">
          🔮
        </div>

        <p className="eyebrow">
          SECRET MISSION • 001
        </p>

        <h1>A Little Mystery</h1>

        <p className="mystery-description">
          Three clues. One secret word.
          Can you solve this little mystery?
        </p>

        {!unlocked ? (
          <>

            {/* Clue progress */}
            <div className="clue-progress">

              <span>
                Clues discovered
              </span>

              <strong>
                {revealedClues.length}/3
              </strong>

            </div>

            {/* Animated clue cards */}
            <div className="clue-list">

              {clues.map((clue, index) => {
                const isRevealed = revealedClues.includes(index);

                return (
                  <div
                    className={`clue-card ${
                      isRevealed ? "clue-revealed" : ""
                    }`}
                    key={index}
                  >

                    {!isRevealed ? (

                      <button
                        type="button"
                        className="reveal-button"
                        onClick={() => revealClue(index)}
                      >

                        <span className="reveal-icon">
                          ✨
                        </span>

                        <span className="clue-number">
                          Clue {index + 1}
                        </span>

                        <span className="reveal-text">
                          Tap to Reveal this clue ♡
                        </span>

                      </button>

                    ) : (

                      <div className="revealed-clue-content">

                        <span className="clue-number">
                          Clue {index + 1}
                        </span>

                        <p className="revealed-clue">
                          ✨ {clue}
                        </p>

                        <span className="clue-sparkle">
                          💗
                        </span>

                      </div>

                    )}

                  </div>
                );
              })}

            </div>

            {/* Answer form */}
            <form
              className="answer-form"
              onSubmit={checkAnswer}
            >

              <label htmlFor="answer">
                What's the secret word?
              </label>

              <input
                id="answer"
                type="text"
                placeholder="Enter your guess..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <button
                type="submit"
                className="primary-button"
              >
                Unlock the Mystery ✨
              </button>

            </form>

            {/* Feedback */}
            {feedback && (
              <p className="feedback">
                {feedback}
              </p>
            )}

          </>
        ) : (

          /* Mystery unlocked screen */
          <div className="unlock-card">

            <div className="success-icon">
              🎉
            </div>

            <p className="eyebrow">
              MISSION COMPLETED
            </p>

            <h2>
              You Solved It, Anu! 💗
            </h2>

            <p className="unlock-message">
              The secret word was SMILE!
            </p>

            <p className="unlock-message">
              This little mystery had one simple
              purpose: to give you a reason to smile
              today. Hope it worked! 😊
            </p>

            <p className="signature">
              — Jaydev ♡
            </p>

            {/* Navigate to Message page */}
            <button
              className="primary-button"
              onClick={() => navigate("/message")}
            >
              Read Your Little Message 💌
            </button>

            {/* Restart */}
            <button
              className="restart-button"
              onClick={restartMystery}
            >
              Play Again ↻
            </button>

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
}

export default Mystery;
