import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTE, URL } from "../../constants";
import {
  MainContainer,
  TodoWrapper,
  MemoAdderContainer,
  MemoAdderInput,
  MemoAdderButton,
} from "./styles";
import { TodoList } from "../../components";
function Todo() {
  const navigate = useNavigate();
  const [listData, setListData] = useState([
    {
      id: 1,
      todo: "과제하기",
      isCompleted: false,
      userId: 1,
    },
  ]);

  function getList() {
    axios({
      method: "get",
      url: URL.TODOS,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    })
      .then(function (response) {
        setListData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getList();
  }, []);

  function creatHandler(e) {
    console.log(e);
  }

  return (
    <MainContainer>
      {!localStorage.getItem("localToken") && (
        <Navigate to={ROUTE.HOME}></Navigate>
      )}
      <TodoWrapper>
        {listData.map((el) => {
          return <TodoList props={el}></TodoList>;
        })}
      </TodoWrapper>
      <MemoAdderContainer>
        <MemoAdderInput />
        <MemoAdderButton type="submit">등록</MemoAdderButton>
      </MemoAdderContainer>
    </MainContainer>
  );
}

export default Todo;
