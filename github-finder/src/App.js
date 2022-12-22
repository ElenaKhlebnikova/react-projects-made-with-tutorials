import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import { useState } from "react";
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import "./index.css";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
function App() {
  const [initialMin, setInitialMin] = useState();
  const [initialHours, setInitialHours] = useState();

  const handleData = () => {
    const initialDate = new Date();
    const setInitialHoursSet = initialDate.getHours();
    const setInitialMinSet = initialDate.getMinutes();
    setInitialMin(setInitialMinSet);
    setInitialHours(setInitialHoursSet);
    localStorage.setItem("initialMin", JSON.stringify(initialMin));
    localStorage.setItem("initialHours", JSON.stringify(initialHours));
  };

  const getInitialMin = localStorage.getItem("initialMin");
  const getInitialHours = localStorage.getItem("initialHours");
  console.log(initialHours, initialMin);
  console.log(getInitialHours, getInitialMin);
  const newDate = new Date();
  const newHours = newDate.getHours();
  const newMin = newDate.getMinutes();
  console.log(newHours, newMin);

  const countdown = () => {
    const newTimeInMin = newHours * 60 + newMin;
    const initialTimeInMin = initialHours * 60 + initialMin;
    const timeLeft = newTimeInMin - initialTimeInMin;
    return timeLeft;
  };

  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <button onClick={handleData}>
                CLICK ME!!!!!!!!!! {countdown()}
              </button>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
