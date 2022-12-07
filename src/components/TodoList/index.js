import { useState } from "react";
import axios from "axios";
import { URL } from "../../constants";
import { TodoContainer, CheckBox, Memo, ButtonWrapper, Button } from "./styles";

function TodoList(props) {
  const [isModify, setIsModify] = useState(false);
  const [value, setValue] = useState(props.data.todo);
  const [checked, setChecked] = useState(props.data.isCompleted);
  function checkHandler(e) {
    setChecked(e.target.checked);
    setValue(props.data.todo);
    setIsModify(false);
    updateList("check");
  }

  function modifyHandler(e) {
    if (e.target.textContent === "취소") {
      setValue(props.data.todo);
    } else if (e.target.textContent === "저장") {
      updateList("none");
    }
    setIsModify(!isModify);
  }

  function valueHandler(e) {
    setValue(e.target.value);
  }

  function updateList(data) {
    axios({
      method: "put",
      url: URL.TODOS + "/" + props.data.id,
      headers: {
        Authorization: localStorage.getItem("localToken"),
        "Content-Type": "application/json",
      },
      data: {
        todo: value,
        isCompleted: data === "check" ? !checked : checked,
      },
    }).then(function (response) {
      props.setIsChanged(!props.isChanged);
    });
  }
  function deleteList() {
    axios({
      method: "delete",
      url: URL.TODOS + "/" + props.data.id,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      props.setIsChanged(!props.isChanged);
    });
  }

  return (
    <TodoContainer key={props.data.id}>
      <CheckBox type="checkbox" checked={checked} onChange={checkHandler} />
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
