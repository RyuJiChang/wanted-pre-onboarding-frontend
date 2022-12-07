import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTE, URL } from "../../constants";
import {
  MainContainer,
  TodoWrapper,
  TodoContainer,
  CheckBox,
  Memo,
  ButtonWrapper,
  Button,
  MemoAdderContainer,
  MemoAdderInput,
  MemoAdderButton,
} from "./styles";
function Todo() {
  const navigate = useNavigate();
  const [listData, setListData] = useState({
    id: 1,
    todo: "과제하기",
    isCompleted: false,
    userId: 1,
  });

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
          return (
            <TodoContainer key={el.id}>
              <CheckBox type="checkbox" checked={el.isCompleted} />
              <Memo value={el.todo} />
              <ButtonWrapper>
                <Button>수정</Button>
                <Button>삭제</Button>
              </ButtonWrapper>
            </TodoContainer>
          );
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
