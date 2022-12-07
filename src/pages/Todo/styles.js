import styled from "styled-components";

/** 화면 구성용 메인 컨테이너 */
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e9ecef87;
`;

const TodoWrapper = styled.div`
  background-color: #d9fff8;
  height: 80vh;
  width: 50vw;
  max-width: 800px;
  overflow-y: auto;
`;

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
const TodoAdderContainer = styled.div`
  width: 50vw;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #d9fff8;
`;
const MemoAdderInput = styled.input`
  font-size: 25px;
  font-weight: bold;
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const MemoAdderButton = styled(Button)`
  font-size: 20px;
  height: 50px;
  width: 60px;
`;

export {
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
};
