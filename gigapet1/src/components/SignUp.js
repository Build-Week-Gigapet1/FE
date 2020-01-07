import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
//import axios from "axios";

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
        <label htmlFor="name">
          Username
          <Field id="username" type="username" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="email">
          Email
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Enter an Email"
          />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Type Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label className="checkbox-container">
          Terms of Service
          <Field type="checkbox" name="tos" checked={values.tos} />
          <span className="checkmark" />
        </label>
        <button type="submit">Submit</button>
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
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      tos: props.tos || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
    // tos: Yup.boolean().oneOf([true])
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    //console.log("submitting", values);
    console.log("signup Handle");
    axiosWithAuth()
      .post("/auth/register", values)
      .then(responce => {
        //console.log(responce);
        localStorage.setItem("token", responce.data.token);
        window.location.href = "/";
        console.log("I ran");
      })
      .catch(error => console.log(error));
  }
})(MyForm);

export default FormikMyForm;
