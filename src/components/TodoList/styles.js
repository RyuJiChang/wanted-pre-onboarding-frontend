import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const CheckBox = styled.input`
  display: flex;
  align-items: center;
`;

const Memo = styled.input`
  font-size: 25px;
  font-weight: bold;
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
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

export { TodoContainer, CheckBox, Memo, ButtonWrapper, Button };
