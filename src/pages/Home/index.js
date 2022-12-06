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
// import axios from "axios";

function Home() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  function emailHandler(e) {
    setFormData({ ...formData, email: e.target.value });
  }

  function passwordHandler(e) {
    setFormData({ ...formData, password: e.target.value });
  }

  return (
    <MainContainer>
      <SignSelectorWapper>
        <SignSelectorL>로그인</SignSelectorL>
        <SignSelectorR>회원가입</SignSelectorR>
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
          <Button onClick={(e) => e.preventDefault()}>
            {isSignUp ? "회원가입" : "로그인"}
          </Button>
        </Form>
      </FormContainer>
    </MainContainer>
  );
}

export default Home;
