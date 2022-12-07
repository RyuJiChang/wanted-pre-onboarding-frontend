import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTE, URL } from "../../constants";
import {} from "./styles";
function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <div>
      {!localStorage.getItem("localToken") && (
        <Navigate to={ROUTE.HOME}></Navigate>
      )}
    </div>
  );
}

export default Todo;
