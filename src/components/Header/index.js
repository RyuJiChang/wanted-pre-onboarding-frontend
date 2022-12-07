import { useNavigate, Link } from "react-router-dom";
import { Main } from "./styles";
import { ROUTE } from "../../constants";

function Header({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  function loginHandler(e) {
    if (e.target.textContent === "로그아웃") {
      setIsLogin(false);
      localStorage.removeItem("localToken");
      navigate(ROUTE.HOME);
    }
  }
  return (
    <Main>
      <Link to="/" onClick={loginHandler}>
        {isLogin ? "로그아웃" : "로그인"}
      </Link>
    </Main>
  );
}

export default Header;
