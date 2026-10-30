
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

function Message() {

  const navigate = useNavigate();

  // Personal message
  const message = `Hey Anu! 🌸

Just wanted to leave a little note here.

It's nice getting to know someone new, and
I'm glad we got a chance to connect.

I hope this little website brings a smile
to your face and makes your day a bit
more special.

Keep smiling and stay happy! 😊

Take care,
Jaydev ♡`;
  // Typing animation state
  const [displayedMessage, setDisplayedMessage] = useState("");

  useEffect(() => {

    if (displayedMessage.length >= message.length) {
      return;
    }

    const timer = setTimeout(() => {

      setDisplayedMessage(
        message.slice(0, displayedMessage.length + 1)
      );

    }, 35);

    return () => clearTimeout(timer);

  }, [displayedMessage, message]);

  const isComplete =
    displayedMessage.length === message.length;

  // Restart typing animation
  const replayMessage = () => {
    setDisplayedMessage("");
  };

  return (

    <div className="message-page">

      {/* Floating decorations */}

      <div className="floating-decoration" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>💗</span>
        <span>✧</span>
      </div>

      <main className="letter-container">

        <div className="letter-icon">
          💌
        </div>

        <p className="eyebrow">
          A LITTLE NOTE FOR YOU
        </p>

        <h1>Dear Anu💕</h1>

        <div className="letter-paper">

          <p className="letter-heading">
            Something I wanted to say...
          </p>

          <p className="typed-message">
            {displayedMessage}
            {!isComplete && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </div>

        {isComplete && (

          <div className="message-actions">

            <p className="complete-text">
              That's all for this little note. ♡
            </p>

            <button
              className="primary-button"
              onClick={replayMessage}
            >
              Read Again ↻
            </button>

            <button
  className="primary-button"
  onClick={() => navigate("/quiz")}
>
  Let's Play a Friendship Quiz 💗
</button>

          </div>

        )}

        <MusicPlayer />

      </main>

      <Footer />

    </div>

  );

}

export default Message;
