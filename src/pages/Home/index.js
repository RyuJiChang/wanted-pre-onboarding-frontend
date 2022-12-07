import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import {
  MainContainer,
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  Notice,
  SignSelectorL,
  SignSelectorR,
  SignSelectorWapper,
} from "./styles";
import { ROUTE, URL } from "../../constants";

function Home() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailError: "이메일을 입력해주세요",
    passwordError: "비밀번호를 입력해주세요",
  }); //4개의 값을 따로 관리하면 복잡하기 때문에 통합

  function emailHandler(e) {
    let value = e.target.value;
    let regExp = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (value.length === 0) {
      setFormData({
        ...formData,
        email: value,
        emailError: "이메일을 입력해주세요.",
      });
    } else if (value.match(regExp) === null) {
      setFormData({
        ...formData,
        email: value,
        emailError: "올바른 이메일 형식이 아닙니다.",
      });
    } else {
      setFormData({
        ...formData,
        email: value,
        emailError: "",
      });
    }
  }

  function passwordHandler(e) {
    let value = e.target.value;
    let regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (value.length === 0) {
      setFormData({
        ...formData,
        password: value,
        passwordError: "비밀번호를 입력해주세요.",
      });
    } else if (value.match(regExp) === null) {
      setFormData({
        ...formData,
        password: value,
        passwordError: "영문과 기호를 포함한 8~16글자로 만들어야 합니다.",
      });
    } else {
      setFormData({
        ...formData,
        password: value,
        passwordError: "",
      });
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    postForm(isSignUp, formData.password, formData.email);
  }

  function postForm(isSignUp, password, email) {
    axios({
      method: "post",
      url: isSignUp ? URL.SIGNUP : URL.SIGNIN, //재사용을 위한 URL 삼항연산자 처리
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    })
      .then(function (response) {
        localStorage.setItem(
          "localToken",
          "Bearer " + response.data.access_token
        );
        return <Navigate to={ROUTE.TODO}></Navigate>;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <MainContainer>
      <SignSelectorWapper>
        <SignSelectorL isSignUp={isSignUp} onClick={() => setIsSignUp(false)}>
          로그인
        </SignSelectorL>
        <SignSelectorR isSignUp={isSignUp} onClick={() => setIsSignUp(true)}>
          회원가입
        </SignSelectorR>
      </SignSelectorWapper>
      <FormContainer
      // onSubmit={handleSubmit}
      >
        <Form>
          <InputContainer>
            <Label className="input-text">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={emailHandler}
            />
            <Notice>{formData.emailError}</Notice>
          </InputContainer>
          <InputContainer>
            <Label className="input-text">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={passwordHandler}
            />
            <Notice>{formData.passwordError}</Notice>
          </InputContainer>
          <Button
            disabled={!(formData.emailError === formData.passwordError)}
            disabledCheck={formData.emailError === formData.passwordError}
            onClick={submitHandler}
          >
            {isSignUp ? "회원가입" : "로그인"}
          </Button>
        </Form>
      </FormContainer>
    </MainContainer>
  );
}

export default Home;
