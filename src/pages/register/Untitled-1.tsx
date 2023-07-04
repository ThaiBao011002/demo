// import React from "react";
// import { Formik, Form } from "formik";
// import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
// import { MdPassword } from "react-icons/md";
// import styled from "styled-components";
// import useAuth from "../../hooks/useAuth";
// import { CustomInput, Button } from "../../components";
// import ImageBG from "../../assets/images/right_side.svg";
// import * as Yup from 'yup'; // ok

// function Register() {
//   const { loginUser, registerUser } = useAuth();
//   const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });
//   return (
//     <SContainer>
//       <SForm>
//         <Formik
//           initialValues={{
//             email: "",
//             passWord: "",
//             name: "",
//             phoneNumber: "",
//           }}
//           validationSchema={SignupSchema}
//           onSubmit={(values: any) => {
//             registerUser(values);
//           }}
//         >
//           {({ errors, touched, isValidating }) => (
//           <Form>
//             <h1>Create your account </h1>
//             <p>Unlock all Features!</p>
//             <CustomInput icon={<AiOutlineUser size={20} />}
//               name="name"
//               placeholder="Enter Your Name"
//             />
//             {errors.name && touched.name && (
//               <div>{errors.name}</div>
//             )}
//             <CustomInput icon={<AiOutlineMail size={20} />}
//               name="email"
//               placeholder="Enter Your Email"
//             />
//             <CustomInput
//               icon={<AiOutlinePhone size={20} />}
//               name="phoneNumber"
//               placeholder="Enter Your PhoneNumber"
//             />
//             <CustomInput
//               icon={<MdPassword size={20} />}
//               type="password"
//               name="passWord"
//               placeholder="Enter Your PassWord"
//             />
//             <Button text="REGISTER" />
//           </Form>
//           )}
//         </Formik>
//       </SForm>
//       <SImg>
//         <img src={ImageBG} alt="" />
//       </SImg>
//     </SContainer>
//   );
// }

// const SContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const SForm = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   padding-left: 15%;
// `;

// const SImg = styled.div`
//   height: 900px;
//   img {
//     height: 100%;
//     width: 100%;
//   }
// `;

// export default Register;
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);