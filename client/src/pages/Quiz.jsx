
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Jaydev's WhatsApp number
const WHATSAPP_NUMBER = "919776830020";

function Quiz() {
  const navigate = useNavigate();

  // Friendship questions
  const questions = [
    {
      question: "What makes your day better?",
      emoji: "🌸",
      options: [
        "A good conversation",
        "Listening to music",
        "Eating favourite food",
        "Getting surprises"
      ]
    },
    {
      question: "What is your favourite way to spend free time?",
      emoji: "✨",
      options: [
        "Watching movies",
        "Listening to songs",
        "Talking with friends",
        "Exploring something new"
      ]
    },
    {
      question: "Which describes you best?",
      emoji: "💗",
      options: [
        "Quiet and calm",
        "Funny and cheerful",
        "Friendly and caring",
        "Adventurous and curious"
      ]
    },
    {
      question: "What do you value most in a friendship?",
      emoji: "🤝",
      options: [
        "Trust",
        "Honesty",
        "Understanding",
        "Always being supportive"
      ]
    },
    {
      question: "Choose your perfect weekend!",
      emoji: "🌈",
      options: [
        "A relaxing day at home",
        "Going out with friends",
        "Watching favourite movies",
        "Trying something new"
      ]
    }
  ];

  // React states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const [confirmedSent, setConfirmedSent] = useState(false);

  // Skip states
  const [skipped, setSkipped] = useState(false);
  const [skipFrom, setSkipFrom] = useState("");

  const question = questions[currentQuestion];

  // Select answer
  const selectAnswer = (option) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);
  };

  // Next question
  const nextQuestion = () => {
    if (answers[currentQuestion] === undefined) {
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  // Previous question
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Skip the actual quiz
  const skipQuiz = () => {
    setSkipFrom("quiz");
    setSkipped(true);
  };

  // Skip WhatsApp sharing
  const skipSharing = () => {
    setSkipFrom("sharing");
    setSkipped(true);
  };

  // Go back to the correct screen
  const goBackFromSkip = () => {
    setSkipped(false);
    setSkipFrom("");
  };

  // Create WhatsApp message
  const createWhatsAppMessage = () => {
    let message = `Hello Jaydev! 💗

I completed your Friendship Quiz!

Here are my answers:

`;

    questions.forEach((question, index) => {
      message += `${index + 1}. ${question.question}\n`;
      message += `My answer: ${answers[index]}\n\n`;
    });

    message += `Thank you for creating this little surprise! 🌸`;

    return message;
  };

  // Open WhatsApp
  const sendAnswersToWhatsApp = () => {
    const message = createWhatsAppMessage();

    const whatsappLink =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );

    setWhatsappOpened(true);
  };

  // Restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
    setWhatsappOpened(false);
    setConfirmedSent(false);
    setSkipped(false);
    setSkipFrom("");
  };

  // Skip message screen
  if (skipped) {
    return (
      <div className="quiz-page">
        <main className="quiz-container result-container">

          <div className="result-emoji">
            🥺💔
          </div>

          <p className="eyebrow">
            A LITTLE SAD MOMENT
          </p>

          <h1>Aww Anu! 🥺</h1>

          {skipFrom === "quiz" ? (
            <>
              <h2 className="skip-message-title">
                You Skipped the Little Quiz!
              </h2>

              <p className="quiz-description">
                I was looking forward to seeing your answers.
                But that's okay! No pressure. 😊

                <br /><br />

                There is still one little surprise waiting
                for you. Let's continue! 💗
              </p>
            </>
          ) : (
            <>
              <h2 className="skip-message-title">
                You Skipped Sharing Your Answers! 🥺
              </h2>

              <p className="quiz-description">
                I was hoping to receive your answers on WhatsApp.

                <br /><br />

                But that's completely okay! No pressure.
                Your little surprise is waiting for you. 🌸
              </p>
            </>
          )}

          <button
            className="primary-button"
            onClick={() => navigate("/final")}
          >
            Continue Anyway 💗
          </button>

          <button
            className="restart-button"
            onClick={goBackFromSkip}
          >
            Go Back ↩
          </button>

        </main>

        <Footer />
      </div>
    );
  }

  // Completed quiz screen
  if (completed) {
    return (
      <div className="quiz-page">
        <main className="quiz-container result-container">

          {!confirmedSent ? (
            <>

              <div className="result-emoji">
                💌
              </div>

              <p className="eyebrow">
                FRIENDSHIP QUIZ COMPLETED
              </p>

              <h1>Thank You, Anu! 💗</h1>

              <p className="quiz-description">
                You have successfully answered all five
                friendship questions!
              </p>

              <div className="score-card">
                <h2>
                  {answers.length} / {questions.length}
                </h2>

                <p>Questions answered</p>
              </div>

              {/* Display selected answers */}
              <div className="answer-summary">

                <h3>Your Answers 🌸</h3>

                {questions.map((question, index) => (
                  <div
                    className="answer-item"
                    key={index}
                  >
                    <p>
                      {index + 1}. {question.question}
                    </p>

                    <strong>
                      {answers[index]}
                    </strong>
                  </div>
                ))}

              </div>

              {/* WhatsApp sharing */}
              {!whatsappOpened ? (
                <button
                  className="primary-button whatsapp-button"
                  onClick={sendAnswersToWhatsApp}
                >
                  Send Answers on WhatsApp 💚
                </button>
              ) : (
                <>
                  <p className="whatsapp-status">
                    WhatsApp has been opened!

                    Please press the Send button in WhatsApp
                    to share your answers with Jaydev. 💗
                  </p>

                  <button
                    className="primary-button"
                    onClick={() => setConfirmedSent(true)}
                  >
                    I Have Sent My Answers ✓
                  </button>

                  <button
                    className="restart-button"
                    onClick={() => setWhatsappOpened(false)}
                  >
                    Open WhatsApp Again ↻
                  </button>
                </>
              )}

              {/* Skip WhatsApp sharing */}
              <button
                className="skip-share-button"
                onClick={skipSharing}
              >
                Skip & Continue →
              </button>

            </>
          ) : (

            // Confirmation screen
            <div className="success-screen">

              <div className="success-icon">
                🎉
              </div>

              <p className="eyebrow">
                MESSAGE CONFIRMATION
              </p>

              <h1>Thank You, Anu! 💗</h1>

              <h2>
                Your answers have been sent to Jaydev!
              </h2>

              <p className="quiz-description">
                Thank you for taking the time to answer
                all the questions.

                Hope this little surprise made you smile
                today! 🌸
              </p>

              <div className="score-card">
                <h2>💌 Successfully completed!</h2>
                <p>Your friendship quiz journey</p>
              </div>

              <button
                className="primary-button"
                onClick={() => navigate("/final")}
              >
                Open Final Surprise 🎁
              </button>

            </div>
          )}

        </main>

        <Footer />
      </div>
    );
  }

  // Main quiz screen
  return (
    <div className="quiz-page">
      <main className="quiz-container">

        <div className="quiz-emoji">
          {question.emoji}
        </div>

        <p className="eyebrow">
          GETTING TO KNOW YOU
        </p>

        <h1>Friendship Quiz</h1>

        {/* Progress */}
        <div className="quiz-progress-info">

          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>
            {Math.round(
              ((currentQuestion + 1) / questions.length) * 100
            )}%
          </span>

        </div>

        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />
        </div>

        {/* Question */}
        <h2 className="question-title">
          {question.question}
        </h2>

        {/* Options */}
        <div className="quiz-options">

          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                answers[currentQuestion] === option
                  ? "selected"
                  : ""
              }`}
              onClick={() => selectAnswer(option)}
            >

              <span>
                {option}
              </span>

              <span>
                {answers[currentQuestion] === option
                  ? "💗"
                  : "○"}
              </span>

            </button>
          ))}

        </div>

        {/* Navigation */}
        <div className="quiz-navigation">

          <button
            className="back-button"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Back
          </button>

          <button
            className="primary-button"
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz ✨"
              : "Next Question →"}
          </button>

        </div>

        {/* First Skip button: Skip the quiz */}
        <button
          className="skip-button"
          onClick={skipQuiz}
        >
          Skip Quiz →
        </button>

      </main>

      <Footer />
    </div>
  );
}

export default Quiz;
