import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/pages/Main";
import { useTheme } from "./context/ThemeContext";
import SurveyModal from "./components/SurveyModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
          <Header setModalIsOpen={setModalIsOpen} />
          <div className="container">
            <Main />
          </div>
          {modalIsOpen && <SurveyModal setModalIsOpen={setModalIsOpen} />}
    </div>
  );
}

export default App;
