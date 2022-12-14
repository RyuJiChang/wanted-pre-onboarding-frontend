import styled from "styled-components";

/** 화면 구성용 메인 컨테이너 */
const MainContainer = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e9ecef87;
`;

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
/** todo Create용 컨테이너 */
const TodoAdderContainer = styled.form`
  width: 50vw;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #d9fff8;
`;
/** todo Create용 input */
const TodoAdderInput = styled.input`
  font-size: 25px;
  font-weight: bold;
  width: 80%;
  padding: 20px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
`;
/** todo Create용 Button */
const TodoAdderButton = styled(Button)`
  font-size: 20px;
  height: 50px;
  width: 60px;
`;

export {
  MainContainer,
  Button,
  TodoAdderContainer,
  TodoAdderInput,
  TodoAdderButton,
};
