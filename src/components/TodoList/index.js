import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants";
import { TodoContainer, CheckBox, Memo, ButtonWrapper, Button } from "./styles";

function TodoList(el) {
  const [isModify, setisModify] = useState(false);
  const [value, setValue] = useState(el.props.todo);
  const [checked, setChecked] = useState(el.props.isCompleted);
  function checkHandler(e) {
    setChecked(e.target.checked);
    //api 호출예정
  }

  function modifyHandler(e) {
    if (e.target.textContent === "취소") {
      setValue(el.props.todo);
    } else if (e.target.textContent === "저장") {
      updateList();
    }
    setisModify(!isModify);
  }

  function valueHandler(e) {
    setValue(e.target.value);
  }

  function updateList() {
    axios({
      method: "put",
      url: URL.TODOS + "/" + el.props.id,
      headers: {
        Authorization: localStorage.getItem("localToken"),
        "Content-Type": "application/json",
      },
      data: {
        todo: value,
        isCompleted: checked,
      },
    }).then(function (response) {
      // isChanged 값 변경으로 get 해오기
    });
  }
  function deleteList() {
    axios({
      method: "delete",
      url: URL.TODOS + "/" + el.props.id,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      // isChanged 값 변경으로 get 해오기?  요거는 솔직히
      // 배열 컨트롤도 ㅣ되는데 그냥 isChanged 바꾸자
    });
  }

  return (
    <TodoContainer key={el.props.id}>
      <CheckBox type="checkbox" checked={checked} onClick={checkHandler} />
      <Memo disabled={!isModify} value={value} onChange={valueHandler} />
      {isModify ? (
        <ButtonWrapper>
          <Button disabled={checked} onClick={modifyHandler}>
            저장
          </Button>
          <Button disabled={checked} onClick={modifyHandler}>
            취소
          </Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button disabled={checked} onClick={modifyHandler}>
            수정
          </Button>
          <Button disabled={checked} onClick={deleteList}>
            삭제
          </Button>
        </ButtonWrapper>
      )}
    </TodoContainer>
  );
}

export default TodoList;
