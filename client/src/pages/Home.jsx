
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <main className="welcome-card">

        <div className="welcome-heart">♡</div>

        <p className="eyebrow">
          A LITTLE MYSTERY FOR YOU
        </p>

        <h1>Hey Anu💕✨</h1>

        <p className="home-description">
          Someone has prepared a tiny surprise
          for you. Are you curious to discover
          what is waiting inside?
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/mystery")}
        >
          Open Your Surprise ✨
        </button>

        <p className="home-hint">
          A little curiosity never hurts...
        </p>

      </main>

      <Footer />

    </div>
  );
}

export default Home;
