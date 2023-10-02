import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./context";

function App() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData } as any}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Routes></Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
