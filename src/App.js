import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE } from "./constants";
import { Home, Todo } from "./pages";
import { Header } from "./components";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("localToken"));
  return (
    <BrowserRouter>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path={ROUTE.HOME} element={<Home setIsLogin={setIsLogin} />} />
        <Route path={ROUTE.TODO} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
