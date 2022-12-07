import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTE, URL } from "../../constants";
import {
  MainContainer,
  MemoAdderContainer,
  MemoAdderInput,
  MemoAdderButton,
} from "./styles";
import { TodoWrapper } from "../../components";
function Todo() {
  // const navigate = useNavigate(); //로그아웃 구현 때 사용 예정
  const [listData, setListData] = useState(null);

  useEffect(() => {
    getList();
  }, []);

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

  function creatHandler() {}

  return listData ? (
    <MainContainer>
      {!localStorage.getItem("localToken") && (
        <Navigate to={ROUTE.HOME}></Navigate>
      )}
      <TodoWrapper listData={listData} />
      <MemoAdderContainer>
        <MemoAdderInput />
        <MemoAdderButton type="submit">등록</MemoAdderButton>
      </MemoAdderContainer>
    </MainContainer>
  ) : (
    <div>loading</div>
  );
}

export default Todo;
