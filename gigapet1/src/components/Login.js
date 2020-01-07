import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { axiosWithAuth } from "../auth/axiosWithAuth";

const MyForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("status has changed", status);
    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div className="my-form">
      <Form>
        <label htmlFor="username">
          Username
          <Field
            id="username"
            type="username"
            name="username"
            placeholder=" Username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="password"
            name="password"
            placeholder=" Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <button type="submit">Login</button>
      </Form>
      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikMyForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || "",
      tos: props.tos || false
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
    // tos: Yup.boolean().oneOf([true])
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    //console.log("submitting", values);
    console.log("sign in handle");
    axiosWithAuth()
      .post("/auth/login", values)
      .then(responce => {
        //console.log(responce);
        localStorage.setItem("token", responce.data.token);
        window.location.href = "/dashboard";
      })
      .catch(error => console.log(error));
  }
})(MyForm);

export default FormikMyForm;
