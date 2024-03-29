import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  FormTitle,
  StyledInput,
  FormWrapper,
  SubmitButton,
} from "./AuthForms.styles";
import { CentringWrapper } from "./AuthForms.styles";
import { StyledNavLink } from "./AuthForms.styles";

import * as Yup from "yup";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";

import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../slices/authSlice";
import { useSignInMutation } from "../../services/auth";
import { SignInResponse } from "../../slices/authSlice";

interface Values {
  login: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Login musi posiadać min. 2 znaki!")
    .max(50, "Login może posiadać max. 50 znaków!")
    .required("Login jest wymagany"),
  password: Yup.string()
    .min(6, "Hasło musi posiadać min. 6 znaków!")
    .max(50, "Hasło może posiadać max. 50 znaków!")
    .required("Hasło jest wymagane"),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const showModal = useModal();
  const [signIn] = useSignInMutation();

  return (
    <CentringWrapper>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async ({ login, password }: Values) => {
          signIn({ login, password })
            .unwrap()
            .then((payload: SignInResponse) => {
              dispatch(loginAction(payload));
              showModal({
                text: "Zalogowano Pomyślnie!",
                icon: "success",
                confirm: false,
                redirectUrl: "/",
              });
            })
            .catch((err) => {
              const message = err?.data?.message
                ? err.data.message
                : "Błąd przy logowaniu";
              showModal({
                text: message,
                icon: "error",
                confirm: false,
              });
            });
        }}
      >
        <Form autoComplete="off">
          <FormWrapper>
            <FormTitle>Logowanie</FormTitle>
            <Field
              id="login"
              name="login"
              placeholder="Login"
              as={StyledInput}
            />
            <ErrorMessage name="login" component={FormErrorMessage} />

            <Field
              id="password"
              name="password"
              placeholder="Hasło"
              type="password"
              as={StyledInput}
            />
            <ErrorMessage name="password" component={FormErrorMessage} />

            <SubmitButton type="submit" aria-label="Sign In">
              Zaloguj
            </SubmitButton>
            <StyledNavLink to="/register">Rejestracja</StyledNavLink>
          </FormWrapper>
        </Form>
      </Formik>
    </CentringWrapper>
  );
};

export default LoginForm;
