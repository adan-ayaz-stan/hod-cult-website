import { Formik, useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// ICONS
import { FaGoogle, FaFacebook } from "react-icons/fa/index";

import styles from "../styles/register.module.css";

const Register: NextPage = () => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.username) {
      errors.username = "This field is required.";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    } else if (values.username.length < 4) {
      errors.username = "Must be 4 characters or more";
    } else if (/\W|_/g.test(values.username)) {
      errors.username = "Must not contain special characters";
    }

    if (!values.name) {
      errors.name = "This field is required.";
    } else if (values.name.length > 21) {
      errors.name = "Must be 21 characters or less";
    }

    if (!values.password) {
      errors.password = "This field is required.";
    } else if (values.password.length > 25) {
      errors.password = "Must be 20 characters or less";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    // if (!values.email) {
    //   errors.email = "This field is required.";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = "Invalid email address";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setProcessing(true);
      const userRegistry = {
        username: values.username,
        name: values.name.trim(),
        password: values.password,
      };
      const data = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistry),
      }).then((data) => data.json());
      if (data.status == "failed") {
        formik.errors.username = "Records already exist.";
        setProcessing(false);
      } else if (data.status == "success") {
        router.replace("/secret");
      }
    },
  });
  return (
    <div className={styles.main}>
      <Head>
        <title>Join our cult! HRHR games & much more!</title>
      </Head>

      <div className={styles.decorator_text_1}>
        <h2>Everything comes at a cost.</h2>
        <h2>Better steal it.</h2>
      </div>
      <div className={styles.decorator_text_2}>
        <h2>Raise the chaos.</h2>
        <h2>So peace becomes alive again.</h2>
      </div>

      <div className={styles.submain}>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
          id="register-form"
          autoComplete="off"
        >
          <h3>Join The Surge</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            required
            aria-required="true"
            onKeyDown={(e) => {
              if (e.which === 32) {
                return false;
              }
            }}
            onChange={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\s/g, "");
              e.currentTarget.value = e.currentTarget.value.toLowerCase();
              formik.handleChange(e);
            }}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <div className={styles.error}>{formik.errors.username}</div>
          ) : null}

          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            required
            aria-required="true"
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            required
            aria-required="true"
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          {processing == true ? (
            <button disabled>...</button>
          ) : (
            <button type="submit">Register</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
