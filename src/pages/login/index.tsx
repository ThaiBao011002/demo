import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { CustomInput } from "../../components";
import useAuth from "../../hooks/useAuth";
import ButtonComponent from "../../components/button";
import ImageBG from "../../assets/images/side_login.svg";

function Login() {
  const { loginUser } = useAuth();
  return (
    <SContainer>
      <SForm>
        <h1>Login to your Account </h1>
        <p>Welcome back! Select method to log in:</p>
        <Formik
          initialValues={{
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
          }}
          onSubmit={(values: any) => {
            loginUser(values);
          }}
        >
          <Form>
            <CustomInput icon={<AiOutlineMail size={20} />}
              name="email"
              placeholder="Enter Your Email"
            />

            <CustomInput
              icon={<MdPassword size={20} />}
              type="password"
              name="passWord"
              placeholder="Enter Your PassWord"

            />
            <ButtonComponent text="LOG IN" />
          </Form>
        </Formik>
        <SLink>
          Don’t have account? <Link to="/register"> Create an account</Link>
        </SLink>
      </SForm>
      <SImg>
        <img src={ImageBG} alt="" />
      </SImg>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15%;
`;
const SLink = styled.div`
  margin-top: 15px;
`;
const SImg = styled.div`
  height: 900px;
  img {
    height: 100%;
    width: 100%;
  }
`;
export default Login;
