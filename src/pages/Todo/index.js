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
  TodoAdderContainer,
  MemoAdderInput,
  MemoAdderButton,
} from "./styles";
function Todo() {
  const navigate = useNavigate();
  const [addMemo, setAddMemo] = useState("");
  useEffect(() => {
    console.log(1);
  }, []);
  return (
    <MainContainer>
      {!localStorage.getItem("localToken") && (
        <Navigate to={ROUTE.HOME}></Navigate>
      )}
      <TodoWrapper>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
        <TodoContainer>
          <CheckBox type="checkbox" checked={false} />
          <Memo value={"12312312123131aa212312asdas"} />
          <ButtonWrapper>
            <Button>수정</Button>
            <Button>삭제</Button>
          </ButtonWrapper>
        </TodoContainer>
      </TodoWrapper>
      <TodoAdderContainer>
        <MemoAdderInput value={addMemo} />
        <MemoAdderButton>등록</MemoAdderButton>
      </TodoAdderContainer>
    </MainContainer>
  );
}

export default Todo;
