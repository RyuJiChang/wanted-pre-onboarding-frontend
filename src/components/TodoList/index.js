import { TodoContainer, CheckBox, Memo, ButtonWrapper, Button } from "./styles";

function TodoList(el) {
  return (
    <TodoContainer key={el.props.id}>
      <CheckBox type="checkbox" checked={el.props.isCompleted} />
      <Memo value={el.props.todo} />
      <ButtonWrapper>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonWrapper>
    </TodoContainer>
  );
}

export default TodoList;
