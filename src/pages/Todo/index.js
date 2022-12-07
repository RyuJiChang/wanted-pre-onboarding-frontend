import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTE, URL } from "../../constants";
import {
  MainContainer,
  TodoAdderContainer,
  TodoAdderInput,
  TodoAdderButton,
} from "./styles";
import { TodoWrapper } from "../../components";
function Todo() {
  const [listData, setListData] = useState(null);
  const [isChanged, setIsChanged] = useState(true);

  useEffect(() => {
    getList();
  }, [isChanged]);

  function getList() {
    axios({
      method: "get",
      url: URL.TODOS,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      setListData(response.data);
    });
  }

  function creatHandler(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: URL.TODOS,
      headers: {
        Authorization: localStorage.getItem("localToken"),
        "Content-Type": "application/json",
      },
      data: {
        todo: e.target[0].value,
      },
    }).then(function (response) {
      setIsChanged(!isChanged);
      e.target[0].value = "";
    });
  }

  return listData ? (
    <MainContainer>
      {!localStorage.getItem("localToken") && (
        <Navigate to={ROUTE.HOME}></Navigate>
      )}
      <TodoWrapper
        listData={listData}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
      <TodoAdderContainer onSubmit={creatHandler}>
        <TodoAdderInput />
        <TodoAdderButton>등록</TodoAdderButton>
      </TodoAdderContainer>
    </MainContainer>
  ) : (
    <div>loading...</div>
  );
}

export default Todo;
