import { useEffect, useState } from 'react';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const UpperContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 100px;
margin-top: 10vh;

    h1 {
        font-size: 45px;
        letter-spacing: 0px;
    }    
    
    h1 > a {
        text-decoration: inherit;
        color: inherit;
    }
`
const LowerContainer = styled.div`
display: flex;
flex-direction: column;
`
const Sign = styled.span`
width: 70%;
font-size: 20px;
font-weight: 600;
`

const Underline = styled.div`
border-top: 2px solid gray;
width: 40%;
margin: 20px auto;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;

    .idInput {
        width: 70%;
    }

    .idLabel, .pwdLabel, .pwdConfirmLabel, .emailLabel {
        display: flex;
        margin-left: 10px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
        color: gray;
    } 

    .customInput::placeholder {
        font-size: 12px;
    }
`




const SignUpPage = () => {
    return (
    <div>
        <UpperContainer>
            <h1><a href="LoginPage">오늘도 코딩</a></h1>
        </UpperContainer>
        <LowerContainer>
            <Sign>회원가입</Sign>
            <Underline></Underline>
        </LowerContainer>
        <MainContainer>
            <Form>
                <Form.Group className="idInput">
                    <Form.Label className="idLabel">아이디</Form.Label>
                    <Form.Control className="customInput" type="text" placeholder="아이디" />
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdLabel">비밀번호</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호" />
                </Form.Group>
                <Form.Group className="pwdInput">
                    <Form.Label className="pwdConfirmLabel">비밀번호 확인</Form.Label>
                    <Form.Control className="customInput" type="password" placeholder="비밀번호 확인" />
                </Form.Group>
                <Form.Group className="emailInput">
                    <Form.Label className="emailLabel">이메일</Form.Label>
                    <Form.Control className="customInput" type="email" placeholder="이메일" />
                </Form.Group>
                 <LoginButton />
            </Form>
        </MainContainer>
    </div>
    )
}


function LoginButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      style={{
        marginTop: "20px",
        padding: " 10px 50px"
      }}
    >
      가입하기
    </Button>
  );
}


export default SignUpPage