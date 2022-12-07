import styled from "styled-components";

/** 화면 구성용 메인 컨테이너 */
const MainContainer = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

/** 로그인/회원가입 컨테이너  */
const SignSelectorWapper = styled.div`
  display: flex;
  border: 1px solid #dfe0e1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
`;

/** 로그인/회원가입 스왑용 스타일 기본값  */
const SignSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157.5px;
  height: 50px;
`;

/** 로그인 스타일  */
const SignSelectorL = styled(SignSelector)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157.5px;
  height: 50px;
  border-right: 1px solid #dfe0e1;
  font-weight: ${(props) => (props.isSignUp ? "lighter" : "bold")};
  border-bottom: ${(props) => (props.isSignUp ? "1px solid #dfe0e1" : "none")};
`;

/** 회원가입 스타일  */
const SignSelectorR = styled(SignSelector)`
  border-bottom: 1px solid #dfe0e1;
  font-weight: ${(props) => (props.isSignUp ? "bold" : "lighter")};
  border-bottom: ${(props) => (props.isSignUp ? "none" : "1px solid #dfe0e1")};
`;

/** 폼 컨테이너 */
const FormContainer = styled.div`
  color: #232629;
  width: 268px;
  padding: 24px;
  display: block;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #dfe0e1;
  border-top: none;
`;

/** 스타일 미지정 form 태그 */
const Form = styled.form``;

/** 스타일 미지정 컨테이너용 div 태그 */
const InputContainer = styled.div``;

/** Email, Password 표기용 라벨 */
const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  height: 13px;
  width: 268px;
  padding: 0 2px 0 2px;
`;

/** Email, PassWord 인풋 태그 */
const Input = styled.input`
  font-size: 13px;
  height: 25px;
  width: 268px;
  border: 1px solid #babfc4;
  margin: 5px 0;
  border-radius: 5px;
`;

/** 잘못된 정보일 경우 표기 */
const Notice = styled.div`
  width: 268px;
  height: 25px;
  font-size: 12px;
  color: #ff0000bd;
`;

/** 로그인/회원가입용 버튼 */
const Button = styled.button`
  width: 268px;
  height: 2.5em;
  padding: 10.4px;
  margin: 5px 2px;
  background-color: ${(props) => (props.disabledCheck ? "black" : "gray")};
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
`;

export {
  MainContainer,
  SignSelectorWapper,
  SignSelectorL,
  SignSelectorR,
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  Notice,
};
