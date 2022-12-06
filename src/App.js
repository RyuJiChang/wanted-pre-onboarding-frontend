import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE } from "./constants";
import { Home, Todo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.TODO} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
