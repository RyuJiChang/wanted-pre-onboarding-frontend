import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

/** todo 달성여부 체크용 */
const CheckBox = styled.input`
  display: flex;
  align-items: center;
`;

/** Todo 출력 및 수정용 input */
const TodoText = styled.input`
  font-size: 25px;
  font-weight: bold;
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  :disabled {
    background-color: rgba(59, 59, 59, 0.15);
  }
`;
const ButtonWrapper = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background-color: white;
  height: 30px;
  width: 50px;
  margin: 5px;
  margin-left: 10px;
  border-radius: 5px;
`;

export { TodoContainer, CheckBox, TodoText, ButtonWrapper, Button };
