
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mystery from "./pages/Mystery";
import Message from "./pages/Message";
import Quiz from "./pages/Quiz";
import FinalSurprise from "./pages/FinalSurprise";
import MusicPlayer from "./components/MusicPlayer";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <MusicPlayer />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/mystery" element={<Mystery />} />

        <Route path="/message" element={<Message />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route
  path="/final"
  element={<FinalSurprise />}
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;
