import { NextPage, GetServerSideProps } from "next";
import React, { useState } from "react";
import * as jwt from "jsonwebtoken";

// ICONS
import { FaGoogle, FaFacebook } from "react-icons/fa/index";

import styles from "../styles/register.module.css";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Head from "next/head";

const Login: NextPage = () => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.username) {
      errors.username = "This field is required.";
    } else if (/\W|_/g.test(values.username)) {
      errors.username = "Must not contain special characters";
    }

    if (!values.password) {
      errors.password = "This field is required.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setProcessing(true);
      const userRegistry = {
        username: values.username,
        password: values.password,
      };
      const data = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegistry),
      }).then((data) => data.json());
      if (data.status == "failed") {
        if (data.type === "password") {
          formik.errors.password = data.message;
        } else {
          formik.errors.username = data.message;
        }
        setProcessing(false);
      } else if (data.status == "success") {
        router.replace("/dpanel");
      }
    },
  });

  return (
    <div className={styles.main}>
      <Head>
        <title>HOD Gatekeeper</title>
        <meta
          name="description"
          content="A Cult Application from Imagination"
        />
        <link rel="icon" href="/favicon.ico" />
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
          id="login-form"
          autoComplete="off"
        >
          <h3>Let's cave in</h3>
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
            <button type="submit">Login</button>
          )}
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const request = context.req;
    const response = context.res;
    const cookie = request.cookies.pscdaprvl;
    const verificationData = jwt.verify(cookie, "wepreachbeneaththestars");
    return {
      props: {},
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Login;
